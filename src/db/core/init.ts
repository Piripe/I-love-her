import { getConnection } from "./connection";

export default async function init() {
    console.log("Connecting to DB...");

    let conn = await getConnection();
    
    if (conn) {
        await conn.execute("CREATE TABLE IF NOT EXISTS history (date INT PRIMARY KEY CHECK(date>0), color CHAR(6) CHARACTER SET ASCII NOT NULL DEFAULT 'aa2288', page JSON CHECK(JSON_VALID(page)))");

        await conn.execute("CREATE TABLE IF NOT EXISTS comments (date INT REFERENCES history(date), footprint TEXT, message TEXT)")

        await conn.execute("CREATE TABLE IF NOT EXISTS incoming_fallback (id INT PRIMARY KEY AUTO_INCREMENT, priority INT NOT NULL DEFAULT 0, color CHAR(6) CHARACTER SET ASCII NOT NULL DEFAULT 'aa2288', page JSON CHECK(JSON_VALID(page)), title TINYTEXT NOT NULL DEFAULT '')");

        await conn.execute("CREATE TABLE IF NOT EXISTS user_sessions (token CHAR(64), user_id int, expire_at DATETIME INVISIBLE DEFAULT (DATE_ADD(NOW(), INTERVAL 30 DAY)))");
        await conn.execute("CREATE EVENT IF NOT EXISTS auto_delete_user_sessions ON SCHEDULE EVERY 1 DAY DO DELETE FROM user_sessions WHERE (NOW() > expire_at)");

        await conn.end();
    }
    
}
import pool from "../pool";

export default async function init() {
    console.log("Connecting to DB...");
    let conn;
    try {
        conn = await (global as any).pool.getConnection();

        await conn.execute("CREATE TABLE IF NOT EXISTS history (date INT PRIMARY KEY CHECK(date>0), color CHAR(6) CHARACTER SET ASCII NOT NULL DEFAULT 'aa2288', page JSON CHECK(JSON_VALID(page)))");

        await conn.execute("CREATE TABLE IF NOT EXISTS comments (date INT REFERENCES history(date), footprint TEXT, message TEXT)")

    } catch (err) {
        console.error(err);
    } finally {
        if (conn) return conn.end();
    }
}
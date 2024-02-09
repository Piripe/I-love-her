import pool from "../pool";

export async function getConnection() {
    let conn;
    try {
        conn = await pool.getConnection();

        return conn;
    } catch (err) {
        console.error(err);
    }
    if (conn) await conn.end();
    return null;
}
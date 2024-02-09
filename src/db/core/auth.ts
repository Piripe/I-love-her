import { getConnection } from "./connection";

export async function insertSession(userId:number,token:string) {
    let conn = await getConnection();
    
    if (conn) {
        await conn.execute("INSERT INTO user_sessions VALUES (?,?)",[token,userId]);

        await conn.end();
    }
}
export async function getSession(token:string) {
    let conn = await getConnection();
    
    if (conn) {
        const res = await conn.query("SELECT user_id as userId FROM user_sessions WHERE (token=?) LIMIT 1",[token]) as { userId: number }[];

        await conn.end();

        if (res.length) {
            return res[0].userId;
        }
    }
    return null;
}
import { LayoutDefinition } from "$/index.d";
import { getConnection } from "../connection";

export async function moveFallbackRizzToHistory(day:number) {
    let conn = await getConnection();
    
    if (conn) {
        await conn.execute("INSERT INTO history SELECT ? AS date,color,page FROM incoming_fallback ORDER BY priority,id LIMIT 1",day);
        await conn.execute("DELETE FROM incoming_fallback ORDER BY priority,id LIMIT 1");

        await conn.end();
    }
}
export async function insertFallback(priority:number, page:LayoutDefinition,title:string) {
    let conn = await getConnection();
    
    if (conn) {
        const id = await conn.query("INSERT INTO incoming_fallback (priority, page, title) VALUES(?,?,?) RETURNING id",[priority, JSON.stringify(page), title]) as {id:number}[];

        await conn.end();
        
        if (id.length == 0) return null;
        return id[0].id;
    }
    return null;
}
export async function getFallback(id:number) {
    let conn = await getConnection();
    
    if (conn) {
        const fallback = await conn.query("SELECT priority,page AS layout,title FROM incoming_fallback WHERE (id=?) LIMIT 1",id) as {priority:number,layout:LayoutDefinition,title:string}[];

        await conn.end();
        
        if (fallback.length == 0) return null;
        return fallback[0];
    }
    return null;
}
export async function getFallbackList(page:number) {
    let conn = await getConnection();
    
    if (conn) {
        const fallback = await conn.query("SELECT priority,id,title FROM incoming_fallback ORDER BY priority,id LIMIT 25 OFFSET ?",page) as {priority:number,id:number,title:string}[];

        await conn.end();
        
        return fallback;
    }
    return null;
}
export async function updateFallback(id:number,priority:number, page:LayoutDefinition, title:string) {
    let conn = await getConnection();
    
    if (conn) {
        await conn.execute("UPDATE incoming_fallback SET priority=?, page=?, title=? WHERE (id=?) LIMIT 1",[priority,page,title,id]);

        await conn.end();
        
        return true;
    }
    return false;
}
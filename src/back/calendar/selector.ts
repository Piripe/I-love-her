import { moveFallbackRizzToHistory } from "@/db/core/calendar/incomingFallback";
import { getConnection } from "@/db/core/connection";

export async function selectDailyRizz() {
    let day = Math.floor((Date.now()+1000*60*60*12)/(1000*60*60*24));
    console.log(`Selecting rizz for day ${day}...`);

        // TODO : Advanced calendar 
        
    await moveFallbackRizzToHistory(day);
}
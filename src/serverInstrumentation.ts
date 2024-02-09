import { initCalendar } from "./back/calendar";
import initDB from "./db/core/init";

export default async function register() {
    console.log("Init DB...");
    await initDB();
    console.log("Init Calendar...");
    await initCalendar();
}
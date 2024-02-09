import { setRoutine } from "../utils/time";
import { selectDailyRizz } from "./selector";

export function initCalendar() {
    setRoutine(selectDailyRizz,1000*60*60*24,1000*60*60+500);
}
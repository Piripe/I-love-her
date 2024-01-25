"use server";

import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { getLayoutAtDate } from "@/db";

export default async function Page() {
    return (
        <>
            <div>
                {RizzDisplay(await getLayoutAtDate(Math.floor(Date.now() / (1000 * 60 * 60 * 24))))}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay selectedDate={0} />
            </div>
        </>
    );
}

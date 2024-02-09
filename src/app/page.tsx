"use server";

import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { getLayoutAtDate } from "@/db";
import Timer from "./Timer";

//export const revalidate = 30

export default async function Page() {
    if (Date.now() - new Date(2024, 1, 14, 20, 0).valueOf() < 0) return <Timer/>; //new Date(2024,1,14,20,0).valueOf()

    return (
        <>
            <div className={styles.display}>
                {RizzDisplay(await getLayoutAtDate(Math.floor((Date.now()+1000*60*60*1) / (1000 * 60 * 60 * 24))))}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay />
            </div>
        </>
    );
}

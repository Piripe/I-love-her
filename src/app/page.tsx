import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { getLayoutAtDate } from "@/db";
import { cache } from "react";

export const revalidate = 60

export default async function Page() {
    return (
        <>
            <div className={styles.display}>
                {RizzDisplay(await getRizz())}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay />
            </div>
        </>
    );
}

const getRizz = cache(async () => {
    const item = await getLayoutAtDate(Math.floor((Date.now()+1000*60*60*1) / (1000 * 60 * 60 * 24)))
    return item
  })
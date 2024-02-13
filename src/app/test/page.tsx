import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { getLayoutAtDate } from "@/db";
import { Background, Layout, Shape } from "$/index.d";

//export const revalidate = 3600;

export default async function Page() {
    return (
        <>
            <div className={styles.display}>
                {RizzDisplay(JSON.parse(`{"type":2,"options":{"pages":[{"type":0,"options":{"children":"j ","centered":true,"color":"#fff","invertedTransparency":false,"background":{"type":0,"options":{"image":"","blurSize":2}}}}],"background":{"type":0,"options":{"image":"","blurSize":2}}}}`))}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay />
            </div>
        </>
    );
}

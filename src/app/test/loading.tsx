import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";

export default function Loading() {
    return <>
        <div></div>
        <div className={styles.overlay}>
            <CalendarOverlay selectedDate={0} />
        </div>
    </>;
} 
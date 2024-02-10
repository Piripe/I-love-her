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
                {RizzDisplay({
                    type: Layout.SimplePaging,
                    options: {
                        children: [
                            // await getLayoutAtDate(0),
                            // await getLayoutAtDate(19739),
                            // await getLayoutAtDate(19740),
                            // await getLayoutAtDate(19752),
                            // await getLayoutAtDate(19753),
                            // await getLayoutAtDate(19754),
                            // await getLayoutAtDate(19760),
                            // await getLayoutAtDate(19762),
                        ],
                    },
                })}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay />
            </div>
        </>
    );
}

"use server";

import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { Suspense } from "react";
import Loading from "./loading";
import { getLayoutAtDate } from "@/db";

//export const revalidate = 3600;

export default async function Page({ params }: { params: { date: string } }) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className={styles.display}>{RizzDisplay(await getLayoutAtDate(Number.parseInt(params.date)))}</div>
                <div className={styles.overlay}>
                    <CalendarOverlay
                        selectedDate={Number.parseInt(params.date) * 1000 * 60 * 60 * 24}
                    />
                </div>
            </Suspense>
        </>
    );
}

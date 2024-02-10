"use server";

import BlobBackground from "@/components/backgrounds/BlobBackground";
import styles from "./page.module.scss";
import ValentineModal from "./ValentineModal";
import Heart from "@/components/shapes/Heart";

export default async function Page(props: { searchParams: { redirect?: string } }) {
    return (
        <>
            <div className={styles.background}>
                <BlobBackground
                    blobBackground="#000"
                    blobColor1="var(--accent)"
                    blobColor2="var(--accent-disabled)"
                    blobScale={1.25}
                    blurSize={1.5}
                    shape={Heart}
                />
            </div>
            <div className={styles.contentContainer}>
                <ValentineModal />
            </div>
        </>
    );
}

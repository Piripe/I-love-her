"use server";

import BlobBackground from "@/components/backgrounds/BlobBackground";
import Circle from "@/components/shapes/Circle";
import styles from "./page.module.scss";
import LoginModal from "./LoginModal";

export default async function Page(props: { searchParams: { redirect?: string } }) {
    return (
        <>
            <div className={styles.background}>
                <BlobBackground
                    blobBackground="#000"
                    blobColor1="var(--accent)"
                    blobColor2="var(--accent-disabled)"
                    blobScale={1.5}
                    blurSize={3}
                    shape={Circle}
                />
            </div>
            <div className={styles.contentContainer}>
                <LoginModal redirect={props.searchParams.redirect ?? "/dashboard"} />
            </div>
        </>
    );
}

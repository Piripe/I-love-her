"use client";

import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import BlobBackground from "@/components/backgrounds/BlobBackground";
import Heart from "@/components/shapes/Heart";
import { useRouter } from "next/navigation";

export default function Timer() {
    const router = useRouter();
    const endDate = new Date(2024, 1, 14, 20, 0).valueOf(); //new Date(2024, 1, 14, 20, 0).valueOf();

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timeUpdate = () => {
            setTimeout(() => {
                let newTime = Math.floor((endDate - Date.now())/1000);
                if (timer !== newTime || timer === 0) setTimer(newTime);
                else timeUpdate();
            }, 50);
        };
        timeUpdate();
    }, [timer]);

    if (timer < 0) router.refresh();

    const sec = timer % 60;
    const mins = Math.floor(timer / 60);
    const min = mins % 60;
    const hours = Math.floor(mins / 60);

    const hourText = `${hours === 0 ? "" : hours + ":"}${
        mins === 0 ? "" : (min.toString().length === 1 ? "0" + min : min) + ":"
    }${sec.toString().length === 1 ? "0" + sec : sec}`;

    return (
        <>
            <div className={styles.display}>
                <BlobBackground
                    blobColor1="#ffaa9e"
                    blobColor2="#c72424"
                    blobBackground="#000"
                    blobScale={1.29}
                    blurSize={1}
                    shape={Heart}
                />
            </div>
            {timer === 0 ? (
                <></>
            ) : (
                <div className={styles.timer}>
                    <svg viewBox={`0 0 ${hours === 0 ? (mins === 0 ? 2 : 4) : 8} 2`}>
                        <text
                            x={hours === 0 ? (mins === 0 ? 1 : 2) : 4}
                            y={1.35}
                            textAnchor="middle"
                            fontSize={1}
                            fill="#0000"
                            stroke="#fffa"
                            strokeWidth={0.0075}
                            strokeLinejoin="round">
                            {hourText}
                        </text>
                    </svg>
                    <div className={styles.blur}>
                        <span
                            style={{
                                height: hours === 0 ? (mins === 0 ? "100vw" : "50vw") : "25vw",
                            }}
                        />
                        <svg width="100%">
                            <clipPath id="lockup-headline-mask-path">
                                <text
                                    x="50vw"
                                    y={hours === 0 ? (mins === 0 ? "50vw" : "25vw") : "12.5vw"}
                                    dy="0.35em"
                                    fontSize={
                                        hours === 0 ? (mins === 0 ? "50vw" : "25vw") : "12.5vw"
                                    }
                                    textAnchor="middle">
                                    {hourText}
                                </text>
                            </clipPath>
                        </svg>
                    </div>
                </div>
            )}
        </>
    );
}

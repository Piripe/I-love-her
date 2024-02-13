"use client";

import styles from "./SimplePaging.module.scss";
import Button from "../ui/Button";
import { useState } from "react";

export default function SimplePagingClient(props: { pages?: JSX.Element[] }) {
    const [scroll, setScroll] = useState(0);
    const [lastScroll, setLastScroll] = useState(0);

    return (
        <div className={styles.container}>
            {props.pages?.map((x, i) => (
                <div
                    key={i}
                    style={{
                        transform: `scaleX(${i === scroll ? 1 : 1.5}) translateX(${
                            Math.min(1, Math.max(-1, i - scroll)) * 100
                        }%)`,
                        zIndex: +(i === scroll),
                        opacity:+(i===scroll || i===lastScroll),
                        transition:(i===scroll || i===lastScroll)?undefined:"none"
                    }}>
                    {x}
                </div>
            ))}
            <div className={styles.nav} key={-2}>
                <div
                    className={styles.leftNavButton}
                    onClick={() => {
                        setLastScroll(scroll);
                        setScroll(Math.max(0, scroll - 1));
                    }}>
                    <Button disabled={scroll <= 0}>←</Button>
                </div>
                <div
                    className={styles.rightNavButton}
                    onClick={() => {
                        setLastScroll(scroll);
                        setScroll(Math.min((props.pages?.length??0) - 1, scroll + 1));
                    }}>
                    <Button disabled={scroll >= (props.pages?.length??0) - 1}>→</Button>
                </div>
            </div>
            <div className={styles.navIndicator} key={-1}>
                {props.pages?.map((x, i) => (
                    <div onClick={() => {
                        setLastScroll(scroll);
                        setScroll(i);
                    }}
                    className={i === scroll ? styles.selected : ""}
                    key={i}>
                        <span
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

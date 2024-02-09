"use client";

import styles from "./SimplePaging.module.scss";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import MarkdownTwemoji from "../MarkdownTwemoji";
import Button from "../ui/Button";
import { useState } from "react";

export default function SimplePagingClient(props: { children: JSX.Element[] }) {

    const [scroll,setScroll] = useState(0);

    return (
        <div className={styles.container}>
            {props.children.map((x,i) => (
                <div key={i} style={{transform:`translateX(${i*100-scroll*100}%)`}}>{x}</div>
            ))}
            <div className={styles.nav} key="-1">
                <Button disabled={scroll<=0} onClick={()=>setScroll(Math.max(0,scroll-1))}>←</Button>
                <Button disabled={scroll>=props.children.length-1} onClick={()=>setScroll(Math.min(props.children.length-1,scroll+1))}>→</Button>
            </div>
        </div>
    );
}

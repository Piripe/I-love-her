"use client";
import Textbox from "@/components/ui/Textbox";
import Button from "@/components/ui/Button";
import styles from "./page.module.scss";
import { ButtonStyle } from "$/index.d";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import MarkdownTwemoji from "@/components/MarkdownTwemoji";

export default function ValentineModal() {
    const [yes, setYes] = useState(false);
    const [transform, setTransform] = useState("none");

    return (
        <div className={styles.content}>
            {yes ? (
                <>
                    <Markdown
                        className={`markdown centered`}
                        remarkPlugins={[remarkBreaks]}>
                        {MarkdownTwemoji("## Merci 🫶🏻\n---\n---\n### Moi aussi je t'aime 🫶🏻")}
                    </Markdown>
                </>
            ) : (
                <>
                    <div className={styles.title}>
                        Veux-tu être ma <span className={styles.special}>Valentine ?</span>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.btn}>
                            <Button onClick={() => setYes(true)} style={ButtonStyle.Accent}>
                                Oui
                            </Button>
                        </div>
                        <div
                            className={styles.btn}
                            style={{ translate: transform }}
                            onMouseOver={() => {
                                setTransform(
                                    `${Math.random() * 80 - 40}vw ${Math.random() * 80 - 40}vh`
                                );
                            }}>
                            <Button className={styles.no}>Non</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

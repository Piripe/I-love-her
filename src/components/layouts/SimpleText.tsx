import styles from "./SimpleText.module.scss";
import Markdown from "react-markdown";
import Twemoji from "@/components/Twemoji";
import remarkBreaks from "remark-breaks";

export default function SimpleText(props: { children: string; background: JSX.Element, invertedTransparency:boolean, color:string, centered:boolean }) {
    return (
        <>
            {props.background}
            <div className={styles.contentContainer}>
                <div className={styles.content} style={{mixBlendMode: props.invertedTransparency?'difference':'normal',color:props.color}}>
                    <Twemoji options={{ folder: "svg", ext: ".svg" }}>
                        <Markdown className={`markdown ${props.centered ? "centered" : ""}`} remarkPlugins={[remarkBreaks]}>
                            {props.children}
                        </Markdown>
                    </Twemoji>
                </div>
            </div>
        </>
    );
}

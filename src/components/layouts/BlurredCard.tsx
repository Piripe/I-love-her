import styles from "./BlurredCard.module.scss";
import Markdown from "react-markdown";
import Twemoji from "@/components/Twemoji";
import remarkBreaks from "remark-breaks";

export default function BlurredCard(props: { children: string; background: JSX.Element, blurSize:number, backdropIntensity:number, centered:boolean }) {
    return (
        <>
            {props.background}
            <div className={styles.contentContainer}>
                <div className={styles.content} style={{backdropFilter:`saturate(${1+props.backdropIntensity}) brightness(${1-props.backdropIntensity/2}) blur(max(${props.blurSize}vw,${props.blurSize}vh))`}}>
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

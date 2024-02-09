import styles from "./BlurredCard.module.scss";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import MarkdownTwemoji from "../MarkdownTwemoji";

export default function BlurredCard(props: { children: string; background: JSX.Element, blurSize:number, backdropIntensity:number, centered:boolean }) {
    return (
        <>
            {props.background}
            <div className={styles.contentContainer}>
                <div className={styles.content} style={{backdropFilter:`saturate(${1+props.backdropIntensity}) brightness(${1-props.backdropIntensity/2}) blur(max(${props.blurSize}vw,${props.blurSize}vh))`}}>
                    <Markdown
                        className={`markdown ${props.centered ? "centered" : ""}`}
                        remarkPlugins={[remarkBreaks]}>
                        {MarkdownTwemoji(props.children)}
                    </Markdown>
                </div>
            </div>
        </>
    );
}

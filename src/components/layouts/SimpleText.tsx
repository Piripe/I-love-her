import styles from "./SimpleText.module.scss";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import MarkdownTwemoji from "../MarkdownTwemoji";

export default function SimpleText(props: {
    children: string;
    background: JSX.Element;
    invertedTransparency: boolean;
    color: string;
    centered: boolean;
}) {
    return (
        <>
            {props.background}
            <div className={styles.contentContainer}>
                <div
                    className={styles.content}
                    style={{
                        mixBlendMode: props.invertedTransparency ? "difference" : "normal",
                        color: props.color,
                    }}>
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

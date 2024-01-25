import styles from "./ImageBackground.module.scss";

export default function ImageBackground(props: {
    image: string;
    blurSize: number;
}) {
    return (
        <div className={styles.background} style={{filter:`blur(max(${props.blurSize}vw,${props.blurSize}vh))`,backgroundImage:`url(${props.image})`}} />
    );
}

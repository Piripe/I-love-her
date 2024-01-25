import { ShapeProps } from "$/index";
import styles from "./BlobBackground.module.scss";

export default function BlobBackground(props: {
    blobColor1: string;
    blobColor2: string;
    blobBackground: string;
    blobScale: number;
    blurSize: number;
    shape:(props:ShapeProps)=>JSX.Element;
}) {
    const style = {
        "--blob-color-1": props.blobColor1,
        "--blob-color-2": props.blobColor2,
        "--blob-background": props.blobBackground,
        filter: `blur(max(${props.blurSize}vw,${props.blurSize}vh))`,
    } as React.CSSProperties;
    return (
        <div className={styles.background} style={style}>
            <svg className={styles.backgroundsvg} viewBox="0 0 100 100">
                <g>
                    <props.shape className={styles.blob} x={10} y={10} size={16 * props.blobScale} />
                    <props.shape className={styles.blob} x={40} y={60} size={18 * props.blobScale} />
                    <props.shape className={styles.blob} x={80} y={60} size={16 * props.blobScale} />
                    <props.shape className={styles.blob} x={90} y={20} size={24 * props.blobScale} />
                    <props.shape className={styles.blob} x={17} y={15} size={14 * props.blobScale} />
                    <props.shape className={styles.blob} x={30} y={25} size={6 * props.blobScale} />
                    <props.shape className={styles.blob} x={30} y={25} size={6 * props.blobScale} />
                    <props.shape className={styles.blob} x={17} y={15} size={14 * props.blobScale} />
                    <props.shape className={styles.blob} x={50} y={60} size={16 * props.blobScale} />
                    <props.shape className={styles.blob} x={70} y={90} size={2 * props.blobScale} />
                    <props.shape className={styles.blob} x={90} y={60} size={18 * props.blobScale} />
                    <props.shape className={styles.blob} x={30} y={90} size={16 * props.blobScale} />
                    <props.shape className={styles.blob} x={10} y={10} size={16 * props.blobScale} />
                    <props.shape className={styles.blob} x={50} y={10} size={4 * props.blobScale} />
                    <props.shape className={styles.blob} x={40} y={20} size={24 * props.blobScale} />
                    <props.shape className={styles.blob} x={50} y={10} size={8 * props.blobScale} />
                    <props.shape className={styles.blob} x={17} y={10} size={20 * props.blobScale} />
                    <props.shape className={styles.blob} x={10} y={50} size={16 * props.blobScale} />
                </g>
            </svg>
        </div>
    );
}

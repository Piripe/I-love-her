import { ButtonStyle } from "$/index";
import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

export default function Button(props: {
    className?: string | undefined;
    children?: JSX.Element | string | undefined;
    style?: ButtonStyle | undefined;
    disabled?: boolean | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
    return (
        <button
            className={`${styles.button} ${[styles.default, styles.accent][props.style ?? 0]} ${
                props.className ?? ""
            }`}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children ?? ""}
        </button>
    );
}

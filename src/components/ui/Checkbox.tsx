import { ChangeEventHandler } from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox(props: {
    className?: string;
    disabled?: boolean;
    label?: string;
    defaultValue?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                disabled={props.disabled}
                className={props.className}
                defaultChecked={props.defaultValue}
                onChange={props.onChange}
            />
            <div className={styles.label}>{props.label}</div>
        </div>
    );
}

import { ChangeEventHandler } from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox(props: {
    className?: string;
    disabled?: boolean;
    label?: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                disabled={props.disabled}
                className={props.className}
                defaultValue={props.defaultValue}
                onChange={props.onChange} />
            {props.label}
        </div>
    );
}

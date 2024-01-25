import { ChangeEventHandler } from "react";
import styles from "./Textbox.module.scss";

export default function Numericbox(props: {
    className?: string;
    defaultValue?: number;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    readOnly?: boolean;
    intOnly?:boolean;
}) {
    return (
        <input
            type="number"
            pattern={(props.intOnly??false)?'\\d*':undefined}
            className={`${styles.textbox} ${props.className ?? ""}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            onChange={props.onChange}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            readOnly={props.readOnly}
        />
    );
}

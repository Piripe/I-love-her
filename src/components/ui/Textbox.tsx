import { ChangeEventHandler } from "react";
import styles from "./Textbox.module.scss";

export default function Textbox(props: {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    multiline?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
    readOnly?: boolean;
    spellcheck?: boolean;
    pattern?:string;
    value?:string;
}) {
    return props.multiline ?? false ? (
        <textarea
            className={`${styles.textbox} ${props.className ?? ""}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            spellCheck={props.spellcheck}
            value={props.value}
        />
    ) : (
        <input
            type="text"
            className={`${styles.textbox} ${props.className ?? ""}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            spellCheck={props.spellcheck}
            pattern={props.pattern}
            value={props.value}
        />
    );
}

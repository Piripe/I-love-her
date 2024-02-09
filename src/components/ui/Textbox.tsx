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
    password?: boolean;
    pattern?:string;
    value?:string;
    id?:string;
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
            id={props.id}
        />
    ) : (
        <input
            type={props.password?"password":"text"}
            className={`${styles.textbox} ${props.className ?? ""}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            spellCheck={props.spellcheck}
            pattern={props.pattern}
            value={props.value}
            id={props.id}
        />
    );
}

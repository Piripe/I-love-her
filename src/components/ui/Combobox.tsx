import { ChangeEventHandler } from "react";
import styles from "./Combobox.module.scss";

export default function Combobox(props: {
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    items?: object;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}) {
    return (
        <select
            disabled={props.disabled}
            className={`${styles.combobox} ${props.className ?? ""}`}
            defaultValue={props.defaultValue}
            onChange={props.onChange}>
            {props.placeholder ? <option value="">{props.placeholder}</option> : ""}
            {Object.keys(props.items ?? {}).map(x => (
                <option value={x} key={x}>
                    {(props.items as any)[x].toString()}
                </option>
            ))}
        </select>
    );
}

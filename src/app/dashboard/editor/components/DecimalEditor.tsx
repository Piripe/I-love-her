import { EditorParamDefinition } from "$/index.d";
import Numericbox from "@/components/ui/Numericbox";
import styles from "./editor.module.scss";

export default function DecimalEditor(props: {
    defaultValue: number;
    onValueChanged: (value: number) => void;
    param?: EditorParamDefinition;
}) {
    return (
        <div className={styles.paramRow}>
            <div className={styles.label}>{props.param?.label}</div>
            <Numericbox defaultValue={props.defaultValue} onChange={e=>props.onValueChanged(Number.parseFloat(e.currentTarget.value))} min={props.param?.componentAdditionalSettings?.min} max={props.param?.componentAdditionalSettings?.max} step={props.param?.componentAdditionalSettings?.step} />
        </div>
    );
}

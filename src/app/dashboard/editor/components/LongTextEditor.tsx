import { EditorParamDefinition } from "$/index.d";
import styles from "./editor.module.scss";
import Textbox from "@/components/ui/Textbox";

export default function LongTextEditor(props: {
    defaultValue: string;
    onValueChanged: (value: string) => void;
    param?: EditorParamDefinition;
}) {
    return (
        <div className={styles.largeParamRow}>
            <div className={styles.label}>{props.param?.label}</div>
            <Textbox defaultValue={props.defaultValue} onChange={e=>props.onValueChanged(e.currentTarget.value)} multiline/>
        </div>
    );
}

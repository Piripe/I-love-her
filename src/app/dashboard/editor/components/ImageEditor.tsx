import { EditorParamDefinition } from "$/index.d";
import ImagePicker from "@/components/ui/ImagePicker";
import styles from "./editor.module.scss";

export default function ImageEditor(props: {
    defaultValue: string;
    onValueChanged: (value: string) => void;
    param?: EditorParamDefinition;
}) {
    return (
        <div className={styles.paramRow}>
            <div className={styles.label}>{props.param?.label}</div>
            <ImagePicker defaultPath={props.defaultValue} onSelect={props.onValueChanged} />
        </div>
    );
}

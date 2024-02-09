import { EditorParamDefinition, Shape } from "$/index.d";
import Combobox from "@/components/ui/Combobox";
import { shapeEditorNames } from "@/constants";
import styles from "./editor.module.scss";

export default function ShapeEditor(props: {
    defaultValue: Shape;
    onValueChanged: (value: Shape) => void;
    param?:EditorParamDefinition;
}) {
    return (
        <div className={styles.paramRow}>
            <div className={styles.label}>{props.param?.label}</div>
            <Combobox
                defaultValue={props.defaultValue.toString()}
                items={Object.fromEntries(shapeEditorNames.map((x, i) => [i, x]))}
                onChange={e => props.onValueChanged(Number.parseInt(e.currentTarget.value))}
            />
        </div>
    );
}

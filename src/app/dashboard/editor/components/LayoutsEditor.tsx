import { EditorParamComponent, EditorParamDefinition, LayoutDefinition } from "$/index.d";
import Button from "@/components/ui/Button";
import LayoutEditor from "./LayoutEditor";
import styles from "./editor.module.scss";

export default function LayoutsEditor(props: {
    defaultValue: LayoutDefinition[];
    onValueChanged: (value: LayoutDefinition[]) => void;
    param?: EditorParamDefinition;
}) {
    return <>
        <div className={styles.paramRow}>
                <div className={styles.label}>{props.param?.label}</div>
                <Button>Add</Button>
        </div>
        <div className={styles.params}>
            {props.defaultValue.map((x,i)=><div className={styles.params} key={i}>{LayoutEditor({defaultValue:x,onValueChanged:()=>{},param:{label:"",component:EditorParamComponent.Layout,name:""}})}</div>)}
        </div>
    </>;
}

import { EditorParamDefinition } from "$/index.d";
import Checkbox from "@/components/ui/Checkbox";

export default function BoolEditor(props: {
    defaultValue: boolean;
    onValueChanged: (value: boolean) => void;
    param?: EditorParamDefinition;
}) {
    return (
            <Checkbox defaultValue={props.defaultValue} onChange={e=>props.onValueChanged(e.currentTarget.checked)} label={props.param?.label} />
    );
}

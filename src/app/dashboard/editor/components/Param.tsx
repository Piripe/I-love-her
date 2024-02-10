import { EditorParamComponent, EditorParamDefinition } from "$/index.d";
import BackgroundEditor from "./BackgroundEditor";
import BoolEditor from "./BoolEditor";
import DecimalEditor from "./DecimalEditor";
import ImageEditor from "./ImageEditor";
import IntEditor from "./IntEditor";
import LayoutEditor from "./LayoutEditor";
import LayoutsEditor from "./LayoutsEditor";
import LongTextEditor from "./LongTextEditor";
import ShapeEditor from "./ShapeEditor";
import ShortTextEditor from "./ShortTextEditor";

export default function Param({
    param,
    defaultValue,
    onValueChanged,
    key,
}: {
    param: EditorParamDefinition;
    defaultValue: any;
    onValueChanged: (value: any) => void;
    key: string;
}) {
    switch (param.component) {
        case EditorParamComponent.Layout:
            return <div key={key}>{LayoutEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Background:
            return <div key={key}>{BackgroundEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Shape:
            return <div key={key}>{ShapeEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Image:
            return <div key={key}>{ImageEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.ShortText:
        case EditorParamComponent.Color:
            return <div key={key}>{ShortTextEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.LongText:
            return <div key={key}>{LongTextEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Decimal:
            return <div key={key}>{DecimalEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Int:
            return <div key={key}>{IntEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Bool:
            return <div key={key}>{BoolEditor({ defaultValue, onValueChanged, param })}</div>;
        case EditorParamComponent.Layouts:
            return <div key={key}>{LayoutsEditor({ defaultValue, onValueChanged, param })}</div>;

        default:
            return (
                <div key={key} >
                    {param.label} : {param.component} = {JSON.stringify(defaultValue)}
                </div>
            );
    }
}

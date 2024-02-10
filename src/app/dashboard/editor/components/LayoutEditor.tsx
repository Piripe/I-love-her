"use client";

import { EditorParamDefinition, Layout, LayoutDefinition } from "$/index.d";
import Combobox from "@/components/ui/Combobox";
import { layoutEditorParams } from "@/constants";
import { useState } from "react";
import Param from "./Param";
import styles from "./editor.module.scss";

export default function LayoutEditor(props: {
    defaultValue: LayoutDefinition;
    onValueChanged: (value: LayoutDefinition) => void;
    param?: EditorParamDefinition;
}) {
    const [value, setValue] = useState(props.defaultValue);
    const updateValue = (v:LayoutDefinition)=>{
        const layoutKeys = Object.keys(layoutEditorParams[v.type].defaults);
        console.log(v);
        setValue(v);
        props.onValueChanged({type:v.type ,options: Object.fromEntries(Object.entries(v.options).filter(([key])=>layoutKeys.includes(key)))});
    }

    return (
        <>
            <div className={styles.paramRow}>
                <div className={styles.label}>{props.param?.label}</div>
                <Combobox
                    items={Object.fromEntries(layoutEditorParams.map((x, i) => [i, x.name]))}
                    defaultValue={value.type.toString()}
                    onChange={e => {
                        const newLayout = Number.parseInt(e.currentTarget.value) as Layout;
                        const newOptions = Object.assign(JSON.parse(
                            JSON.stringify(layoutEditorParams[newLayout].defaults)
                        ),value.options);
                        updateValue({
                            type: newLayout,
                            options: newOptions,
                        });
                    }}
                />
            </div>
            <div className={styles.params}>
                {layoutEditorParams[value.type].params.map(x =>
                    
                    Param({
                        defaultValue: value.options[x.name],
                        param: x,
                        onValueChanged: e => {
                            let newValue = value;
                            newValue.options[x.name] = e;
                            updateValue(newValue);
                        },
                        key: x.name,
                    })
                )}
            </div>
        </>
    );
}

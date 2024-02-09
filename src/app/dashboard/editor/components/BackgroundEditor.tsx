"use client";

import { Background, BackgroundDefinition, EditorParamDefinition } from "$/index.d";
import Combobox from "@/components/ui/Combobox";
import { useState } from "react";
import Param from "./Param";
import { backgroundEditorParams } from "@/constants";
import styles from "./editor.module.scss";

export default function BackgroundEditor(props: {
    defaultValue: BackgroundDefinition;
    onValueChanged: (value: BackgroundDefinition) => void;
    param?: EditorParamDefinition;
}) {
    const [value, setValue] = useState(props.defaultValue);
    const updateValue = (v: BackgroundDefinition) => {
        const backgroundKeys = Object.keys(backgroundEditorParams[v.type].defaults);
        setValue(v);
        props.onValueChanged({
            type: v.type,
            options: Object.fromEntries(
                Object.entries(v.options).filter(([key]) => backgroundKeys.includes(key))
            ),
        });
    };
    return (
        <div>
            <div className={styles.paramRow}>
                <div className={styles.label}>{props.param?.label}</div>
                <Combobox
                    items={Object.fromEntries(backgroundEditorParams.map((x, i) => [i, x.name]))}
                    defaultValue={value.type.toString()}
                    onChange={e => {
                        const newBackground = Number.parseInt(e.currentTarget.value) as Background;
                        const newOptions = Object.assign(
                            JSON.parse(
                                JSON.stringify(backgroundEditorParams[newBackground].defaults)
                            ),
                            value.options
                        );
                        updateValue({
                            type: newBackground,
                            options: newOptions,
                        });
                    }}
                />
            </div>
            <div className={styles.params}>
                {backgroundEditorParams[value.type].params.map(x =>
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
        </div>
    );
}

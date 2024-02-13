"use client";

import { EditorParamDefinition, Background, BackgroundDefinition } from "$/index.d";
import Combobox from "@/components/ui/Combobox";
import { backgroundEditorParams } from "@/constants";
import React from "react";
import Param from "./Param";
import styles from "./editor.module.scss";

type EditorProps = {
    defaultValue: BackgroundDefinition;
    onValueChanged: (value: BackgroundDefinition) => void;
    param?: EditorParamDefinition;
}

export default class BackgroundEditor extends React.Component<EditorProps> {
    value = {} as BackgroundDefinition;

    constructor(props:EditorProps) {
        super(props);
        this.value = props.defaultValue
    }

    updateValue = (v:BackgroundDefinition) => {
        const backgroundKeys = Object.keys(backgroundEditorParams[v.type].defaults);
        this.value = v;
        this.props.onValueChanged({type:v.type ,options: Object.fromEntries(Object.entries(v.options).filter(([key])=>backgroundKeys.includes(key)))});
    }

    render() {
        return (
            <>
                <div className={styles.paramRow}>
                    <div className={styles.label}>{this.props.param?.label}</div>
                    <Combobox
                        items={Object.fromEntries(backgroundEditorParams.map((x, i) => [i, x.name]))}
                        defaultValue={this.props.defaultValue.type.toString()}
                        onChange={e => {
                            const newBackground = Number.parseInt(e.currentTarget.value) as Background;
                            const newOptions = Object.assign(JSON.parse(
                                JSON.stringify(backgroundEditorParams[newBackground].defaults)
                            ),this.value.options);
                            this.updateValue({
                                type: newBackground,
                                options: newOptions,
                            });
                            this.forceUpdate();
                        }}
                    />
                </div>
                <div className={styles.params}>
                    {backgroundEditorParams[this.value.type].params.map(x =>
                        
                        Param({
                            defaultValue: this.value.options[x.name],
                            param: x,
                            onValueChanged: e => {
                                let newValue = this.value;
                                newValue.options[x.name] = e;
                                this.updateValue(newValue);
                            },
                            key: x.name,
                        })
                    )}
                </div>
            </>
        );
    }
}

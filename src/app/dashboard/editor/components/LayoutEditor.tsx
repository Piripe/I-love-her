"use client";

import { EditorParamDefinition, Layout, LayoutDefinition } from "$/index.d";
import Combobox from "@/components/ui/Combobox";
import { layoutEditorParams } from "@/constants";
import React from "react";
import Param from "./Param";
import styles from "./editor.module.scss";

type EditorProps = {
    defaultValue: LayoutDefinition;
    onValueChanged: (value: LayoutDefinition) => void;
    param?: EditorParamDefinition<{
        additionnalComponent?: JSX.Element
    }>;
}

export default class LayoutEditor extends React.Component<EditorProps> {
    value = {} as LayoutDefinition;

    constructor(props:EditorProps) {
        super(props);
        this.value = props.defaultValue
    }

    updateValue = (v:LayoutDefinition) => {
        const layoutKeys = Object.keys(layoutEditorParams[v.type].defaults);
        this.value = v;
        this.props.onValueChanged({type:v.type ,options: Object.fromEntries(Object.entries(v.options).filter(([key])=>layoutKeys.includes(key))), uuid:this.props.defaultValue.uuid});
    }

    render() {
        return (
            <>
                <div className={styles.paramRow}>
                    <div className={styles.label}>{this.props.param?.label}</div>
                    <Combobox
                        items={Object.fromEntries(layoutEditorParams.map((x, i) => [i, x.name]))}
                        defaultValue={this.props.defaultValue.type.toString()}
                        onChange={e => {
                            const newLayout = Number.parseInt(e.currentTarget.value) as Layout;
                            const newOptions = Object.assign(JSON.parse(
                                JSON.stringify(layoutEditorParams[newLayout].defaults)
                            ),this.value.options);
                            this.updateValue({
                                type: newLayout,
                                options: newOptions
                            });
                            this.forceUpdate();
                        }}
                    />
                    {this.props.param?.componentAdditionalSettings?.additionnalComponent}
                </div>
                <div className={styles.params}>
                    {layoutEditorParams[this.value.type].params.map(x =>
                        
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

"use client";

import {
    ButtonStyle,
    EditorParamComponent,
    EditorParamDefinition,
    Layout,
    LayoutDefinition,
} from "$/index.d";
import { layoutEditorParams } from "@/constants";
import React from "react";
import styles from "./editor.module.scss";
import leStyles from "./LayoutsEditor.module.scss";
import Button from "@/components/ui/Button";
import LayoutEditor from "./LayoutEditor";
import Modal from "@/components/ui/Modal";

type EditorProps = {
    defaultValue: LayoutDefinition[];
    onValueChanged: (value: LayoutDefinition[]) => void;
    param?: EditorParamDefinition;
};
type EditorState = { deleteModal: number };

export default class LayoutsEditor extends React.Component<EditorProps, EditorState> {
    value = {} as LayoutDefinition[];
    layoutEditors = {} as JSX.Element[];

    constructor(props: EditorProps) {
        super(props);
        this.state = { deleteModal: -1 };
        this.value = props.defaultValue;
    }

    updateValue = (v?: LayoutDefinition, i?: number) => {
        if (v && i!=undefined) this.value[i] = v;
        this.props.onValueChanged(this.value.map(x => ({ type: x.type, options: x.options })));
    };

    render() {
        return (
            <>
                <div className={styles.paramRow}>
                    <div className={styles.label}>{this.props.param?.label}</div>
                    <Button
                        onClick={() => {
                            this.value.push({} as LayoutDefinition);
                            this.updateValue(
                                {
                                    type: 0,
                                    options: JSON.parse(
                                        JSON.stringify(layoutEditorParams[0].defaults)
                                    ),
                                },
                                this.value.length - 1
                            );
                            this.forceUpdate();
                        }}>
                        Add
                    </Button>
                </div>
                <div className={styles.params}>
                    {this.value.map((x, i) => {
                        if (!x.uuid) x.uuid = Math.random().toPrecision(21);
                        return (
                            <div className={styles.params} key={x.uuid}>
                                <LayoutEditor
                                    defaultValue={x}
                                    onValueChanged={e => {
                                        this.updateValue(e, i);
                                    }}
                                    param={{
                                        label: "",
                                        component: EditorParamComponent.Layout,
                                        name: "",
                                        componentAdditionalSettings: {
                                            additionnalComponent:
                                                this.value.length > 1 ? (
                                                    <div className={leStyles.actionButtons}>
                                                        <Button
                                                            onClick={() => {
                                                                if (i > 0) {
                                                                    let [layout] =
                                                                        this.value.splice(i, 1);
                                                                    this.value = [
                                                                        ...this.value.slice(
                                                                            0,
                                                                            i - 1
                                                                        ),
                                                                        layout,
                                                                        ...this.value.slice(i - 1),
                                                                    ];
                                                                    this.updateValue();
                                                                    this.forceUpdate();
                                                                }
                                                            }}
                                                            disabled={i <= 0}>
                                                            ↑
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                if (i < this.value.length - 1) {
                                                                    let [layout] =
                                                                        this.value.splice(i, 1);
                                                                    this.value = [
                                                                        ...this.value.slice(
                                                                            0,
                                                                            i + 1
                                                                        ),
                                                                        layout,
                                                                        ...this.value.slice(i + 1),
                                                                    ];
                                                                    this.updateValue();
                                                                    this.forceUpdate();
                                                                }
                                                            }}
                                                            disabled={i >= this.value.length - 1}>
                                                            ↓
                                                        </Button>
                                                        <Button
                                                            style={ButtonStyle.Danger}
                                                            onClick={() => {
                                                                this.setState({ deleteModal: i });
                                                            }}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                ) : undefined,
                                        },
                                    }}></LayoutEditor>
                            </div>
                        );
                    })}
                </div>
                {this.state.deleteModal >= 0 ? (
                    <Modal
                        onClickOver={() => {
                            this.setState({ deleteModal: -1 });
                        }}
                        onClose={() => {
                            this.setState({ deleteModal: -1 });
                        }}
                        title="Delete page?"
                        className={leStyles.deleteModal}>
                        <div className={leStyles.deleteModalContainer}>
                            <div className={leStyles.deleteDescription}>
                                Are you sure to delete this page?{" "}
                                <span>(This action cannot be undone)</span>
                            </div>
                            <div className={leStyles.deleteActions}>
                                <Button
                                    style={ButtonStyle.Danger}
                                    onClick={() => {
                                        this.value.splice(this.state.deleteModal, 1);
                                        this.updateValue();
                                        this.forceUpdate();
                                        this.setState({ deleteModal: -1 });
                                    }}>
                                    Delete
                                </Button>
                                <Button
                                    onClick={() => {
                                        this.setState({ deleteModal: -1 });
                                    }}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Modal>
                ) : (
                    <></>
                )}
            </>
        );
    }
}

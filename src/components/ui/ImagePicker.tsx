"use client";

import { useState } from "react";
import Button from "./Button";
import styles from "./ImagePicker.module.scss";
import Modal from "./Modal";
import ImagePickerModal from "./ImagePicker/ImagePickerModal";
import path from "path";

export default function ImagePicker(props: {
    className?: string;
    defaultWorkingPath?: string[];
    rootPath?: string[];
    defaultPath?:string;
    onSelect?: (path: string) => void;
}) {
    const rootPath = props.rootPath ?? ["assets"];
    const [imagePath, setImagePath] = useState( props.defaultPath?.startsWith("/"+path.join(...rootPath)) ? props.defaultPath.substring(rootPath.map(x=>x.length).reduce((x,y)=>x+y+1)+2) : props.defaultPath);
    const [showModal, setShowModal] = useState(false);
    const [workingPath, setWorkingPath] = useState(props.defaultWorkingPath ?? []);

    return (
        <div className={`${styles.container} ${props.className}`}>
            <Button onClick={() => setShowModal(true)}>Pick Image...</Button>
            <div className={styles.pickedImage}>{imagePath ?? "No image selected"}</div>
            {showModal ? (
                <Modal
                    onClose={() => setShowModal(false)}
                    onClickOver={() => setShowModal(false)}
                    title="Pick Image...">
                    <ImagePickerModal
                        rootPath={rootPath}
                        defaultPath={workingPath}
                        defaultSelectPath={imagePath}
                        onCancel={() => setShowModal(false)}
                        onSelect={(path, workingPath) => {
                            setImagePath(path);
                            setWorkingPath(workingPath);
                            setShowModal(false);
                            (props.onSelect?? (() => {}))("/"+rootPath.join("/")+"/"+path);
                        }}
                    />
                </Modal>
            ) : (
                <></>
            )}
        </div>
    );
}

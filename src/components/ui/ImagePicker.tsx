"use client";

import { useState } from "react";
import Button from "./Button";
import styles from "./ImagePicker.module.scss";
import Modal from "./Modal";
import ImagePickerModal from "./ImagePicker/ImagePickerModal";

export default function ImagePicker(props: {
    className?: string | undefined;
    defaultPath?: string[] | undefined;
    rootPath?: string[] | undefined;
    onSelect?: (path: string) => void;
}) {
    const [imagePath, setImagePath] = useState<string | undefined>();
    const [showModal, setShowModal] = useState(false);
    const [workingPath, setWorkingPath] = useState(props.defaultPath ?? []);
    const rootPath = props.rootPath ?? ["assets"];

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

"use client";

import { useEffect, useState } from "react";
import styles from "../ImagePicker.module.scss";
import { ButtonStyle, FolderContent, FolderContentType } from "$/index.d";
import Button from "../Button";
import { getFolderContent } from "./ImagePickerActions";
import Textbox from "../Textbox";
import path from "path";

export default function ImagePickerModal(props: {
    defaultPath: string[];
    defaultSelectPath?: string;
    rootPath: string[];
    onCancel: () => void;
    onSelect: (path: string, workingPath: string[]) => void;
}) {
    const [workingPath, setWorkingPath] = useState(props.defaultPath);
    const [workingSelectPath, setWorkingSelectPath] = useState(props.defaultSelectPath);
    const [folderContent, setFolderContent] = useState<FolderContent[] | undefined>();

    useEffect(() => {
        const updateFolderContent = async () => {
            const content = await getFolderContent(path.join(...props.rootPath, ...workingPath));
            setFolderContent(content);
        };
        if (!folderContent) updateFolderContent();
    }, [folderContent]);

    return (
        <div className={styles.modal}>
            <Textbox className={styles.folderPath} value={path.join(...workingPath)} readOnly />
            <div className={styles.fileExplorer}>
                {folderContent ? (
                    <>
                        {workingPath.length > 0 ? (
                            <Button
                                onClick={() => {
                                    let newPath = [...workingPath];
                                    newPath.pop();
                                    setWorkingPath(newPath);
                                    setFolderContent(undefined);
                                }}>
                                ..
                            </Button>
                        ) : (
                            <></>
                        )}

                        {folderContent.map(x => (
                            <Button
                                style={
                                    +(
                                        (workingSelectPath ?? "") ==
                                        path.join(...workingPath, x.name)
                                    ) as ButtonStyle
                                }
                                onClick={() => {
                                    if (x.type === FolderContentType.File)
                                        setWorkingSelectPath(path.join(...workingPath, x.name));
                                    else {
                                        setWorkingPath([...workingPath, x.name]);
                                        setFolderContent(undefined);
                                    }
                                }}
                                key={x.name}>
                                <>
                                    {x.type == FolderContentType.File ? (
                                        <img
                                            src={
                                                "/_next/image?url=" +
                                                encodeURI(
                                                    "/" +
                                                        path.join(
                                                            ...props.rootPath,
                                                            ...workingPath,
                                                            x.name
                                                        )
                                                ) +
                                                "&w=128&q=50"
                                            }
                                            alt={x.name}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    {x.name}
                                </>
                            </Button>
                        ))}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className={styles.fileSelector}>
                <Textbox
                    className={`${styles.folderPath} ${styles.fileName}`}
                    value={workingSelectPath ?? "No image selected"}
                    readOnly
                />
                <div className={styles.fileActions}>
                    <Button onClick={props.onCancel}>Cancel</Button>
                    <Button
                        style={workingSelectPath ? ButtonStyle.Accent : ButtonStyle.Default}
                        disabled={!workingSelectPath}
                        onClick={() => props.onSelect(workingSelectPath ?? "", workingPath)}>
                        Select
                    </Button>
                </div>
            </div>
        </div>
    );
}

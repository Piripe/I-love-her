"use client";
import RizzDisplay from "@/components/RizzDisplay";
import { Background, Layout, LayoutDefinition, Shape } from "$/index.d";
import styles from "./page.module.scss";
import Textbox from "@/components/ui/Textbox";
import LayoutEditor from "./components/LayoutEditor";
import { useEffect, useState } from "react";
import { layoutEditorParams } from "@/constants";
import Button from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import Numericbox from "@/components/ui/Numericbox";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [value, setValue] = useState(
        id
            ? null
            : ({
                  type: 0,
                  options: JSON.parse(JSON.stringify(layoutEditorParams[0].defaults)),
              } as LayoutDefinition)
    );
    const [priority, setPriority] = useState(id ? null : 0);

    useEffect(() => {
        const token =
            document.cookie
                .split("; ")
                .find(row => row.startsWith("currentUser="))
                ?.split("=")[1] ?? "";
        if (id)
            fetch("/api/incoming_fallback?id=" + id, {
                method: "GET",
                headers: { Authorization: token },
            }).then(async x => {
                if (x.ok) {
                    const fallback = await x.json();
                    setValue(fallback.layout);
                    setPriority(fallback.priority);
                }
            });
    },[id]);

    return !value ? (
        <>Loading...</>
    ) : (
        <div className={styles.editorContainer}>
            <div className={`${styles.editorParams} ${styles.card}`}>
                <LayoutEditor
                    defaultValue={value}
                    onValueChanged={e => {
                        setValue({ ...e });
                    }}
                />
            </div>
            <div className={`${styles.editorControlBox} ${styles.card}`}>
                <div className={styles.previewViewportConainer}>
                    <input className={styles.fullscreenBox} type="checkbox" />
                    <div className={styles.previewViewport}>
                        {RizzDisplay(JSON.parse(JSON.stringify(value)))}
                    </div>
                </div>
                <Textbox
                    className={styles.resultJson}
                    value={JSON.stringify(value)}
                    multiline
                    readOnly
                />
                <Numericbox intOnly defaultValue={priority??0} onChange={e=>setPriority(e.currentTarget.valueAsNumber)}/>
                <Button
                    onClick={async e => {
                        const btn = e.currentTarget;
                        btn.disabled = true;
                        const token =
                            document.cookie
                                .split("; ")
                                .find(row => row.startsWith("currentUser="))
                                ?.split("=")[1] ?? "";

                        const id = searchParams.get("id");
                        if (id == null) {
                            const response = await fetch("/api/incoming_fallback/create", {
                                method: "POST",
                                headers: { Authorization: token },
                                body: JSON.stringify({
                                    priority: priority,
                                    layout: value,
                                }),
                            });

                            if (response.ok)
                                router.push("/dashboard/editor?id=" + (await response.json()).id);
                        } else {
                            const response = await fetch("/api/incoming_fallback/update", {
                                method: "POST",
                                headers: { Authorization: token },
                                body: JSON.stringify({
                                    id:id,
                                    priority: priority,
                                    layout: value,
                                }),
                            });
                        }
                        btn.disabled = false;
                    }}>
                    Upload
                </Button>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import PriorityEntry from "./PriorityEntry";

export default function PriorityList() {
    const [entries, setEntries] = useState<{
        priority: number;
        id: number;
        title: string;
    }[]>();
    
    useEffect(() => {
        const token =
            document.cookie
                .split("; ")
                .find(row => row.startsWith("currentUser="))
                ?.split("=")[1] ?? "";
        fetch("/api/incoming_fallback/list?page=0", {
            method: "GET",
            headers: { Authorization: token },
        }).then(async x => {
                if (x.ok) {
                    const fallback = await x.json();
                    setEntries(fallback);
                }
            });
    },[]);

    return <>{!entries ? "Loading..." : entries.map(PriorityEntry)}</>;
}

"use server";
import Link from "next/link";
import styles from "./HeadNav.module.scss";
import Button from "@/components/ui/Button";
import { ButtonStyle } from "$/index.d";

export async function HeadNav() {
    return (<div className={styles.container}>
        <Link href={"/"}>Back to home</Link>
    </div>
    );
}

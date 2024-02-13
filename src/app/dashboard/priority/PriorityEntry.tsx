import Button from "@/components/ui/Button";
import styles from "./page.module.scss";
import Link from "next/link";
import Textbox from "@/components/ui/Textbox";
import Numericbox from "@/components/ui/Numericbox";

export default function PriorityEntry(props: { priority: number; id: number; title: string }) {
    return (
        <div className={styles.entryRow}>
            <Numericbox defaultValue={props.priority} intOnly readOnly/>
            <Textbox defaultValue={props.title} maxLength={256} readOnly/>
            <Link href={"/dashboard/editor?id=" + props.id}>
                <Button>Edit</Button>
            </Link>
        </div>
    );
}

"use server";
import { Suspense } from "react";
import styles from "./page.module.scss";
import PriorityList from "./PriorityList";

export default async function Page() {
    return <PriorityList/>;
}

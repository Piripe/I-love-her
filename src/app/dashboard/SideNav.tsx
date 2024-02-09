"use server";
import Link from "next/link";
import styles from "./SideNav.module.scss";

export async function SideNav(props:{links:{name:string|JSX.Element,href:string}[]}) {
    return (
    <div className={styles.container}>
        <input className={styles.openBox} type="checkbox"/>
        <div className={styles.openAnim}>
            <span/>
            <span/>
            <span/>
        </div>
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                {props.links.map(x=><Link key={x.href} href={x.href}>{x.name}</Link>)}
            </div>
        </div>
    </div>
    );
}

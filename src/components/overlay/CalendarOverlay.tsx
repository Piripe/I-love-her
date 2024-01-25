'use client'

import { useState } from "react";
import styles from "./CalendarOverlay.module.scss";
import Calendar from "react-calendar";
import { redirect, useRouter } from "next/navigation";

export default function CalendarOverlay(props:{selectedDate:number|Date}) {
    const [opened, setOpened] = useState(false);
    const router = useRouter();

    return <div className={`${styles.container} ${opened ? styles.opened : styles.closed}`}>
        <div className={styles.openButtonContainer} onClick={()=>{setOpened(true)}}>
            <svg viewBox="0 0 32 32" className={styles.openSvg}>
                <rect x={5} width={5} height={9} rx={2}/>
                <rect x={22} width={5} height={9} rx={2}/>
                
                <path d="M2,5q-2,0,-2,2V30q0,2,2,2H30q2,0,2,-2V7q0,-2,-2,-2,-2,0,-2,2,0,3,-3,3h-1q-3,0,-3,-3,0,-2,-2,-2h-6q-2,0,-2,2,0,3,-3,3h-1v1h18q4,0,4,4v10q0,4,-4,4h-18q-4,0,-4,-4v-10q0,-4,4,-4v-1q-3,0,-3,-3,0,-2,-2,-2"/>
                
                <rect x={5} y={13} width={6} height={6} rx={2}/>
                <rect x={5} y={21} width={6} height={6} rx={2}/>
                <rect x={13} y={13} width={6} height={6} rx={2}/>
                <rect x={13} y={21} width={6} height={6} rx={2}/>
                <rect x={21} y={13} width={6} height={6} rx={2}/>
            </svg>
        </div>
        <div className={styles.openedContainer}>
            <svg viewBox="0 0 12 12" className={styles.closeButton} onClick={()=>{setOpened(false)}}>
                <path d="M0,1L5,6 0,11 1,12 6,7 11,12 12,11 7,6 12,1 11,0 6,5 1,0"/>
            </svg>
            <div className={styles.calendarContainer}>
                <Calendar defaultValue={new Date(props.selectedDate ?? 0)} minDate={new Date(2024,0,12,0,0,0)} maxDate={new Date(Date.now())} locale="fr-FR" onChange={(e)=>{
                    setOpened(false);
                    const date = e?.valueOf() as number;
                    if (((Date.now()+1000*60*60)-date) / (1000*60*60*24) < 1) router.push(`/`,{scroll:false});
                    else router.push(`/view/${Math.floor((date?.valueOf()+1000*60*60*12)/ (1000 * 60 * 60 * 24))}`,{scroll:false});
                }} />
            </div>
        </div>
    </div>;
}
"use client";
import Textbox from "@/components/ui/Textbox";
import Button from "@/components/ui/Button";
import styles from "./page.module.scss";
import { ButtonStyle } from "$/index.d";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginModal(props:{redirect:string}) {
    const router = useRouter();
    const [invalidPass, setInvalidPass] = useState(false);

    return (
        <div className={styles.content}>
            <h2>Login</h2>
            <div className={`${styles.entry} ${invalidPass?styles.invalidPassword:""}`}>
                Password
                <Textbox id="loginPass" password />
            </div>
            <Button
                style={ButtonStyle.Accent}
                onClick={async () => {
                    setInvalidPass(false);
                    const res = await fetch("/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            password: (document.getElementById("loginPass") as HTMLInputElement)
                                .value,
                        }),
                    });
                    console.log(res)
                    if (res.status == 200) {
                        console.log(`Redirecting to ${props.redirect}...`);
                        router.push(props.redirect, {scroll:false});
                    } else setInvalidPass(true);
                }}>
                Login
            </Button>
        </div>
    );
}

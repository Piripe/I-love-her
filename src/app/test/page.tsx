"use server";

import RizzDisplay from "@/components/RizzDisplay";
import styles from "./page.module.scss";
import CalendarOverlay from "@/components/overlay/CalendarOverlay";
import { Suspense } from "react";
import Loading from "./loading";
import { getLayoutAtDate } from "@/db";
import { Background, Layout, Shape } from "$/index.d";
import BlurredCard from "@/components/layouts/BlurredCard";

//export const revalidate = 3600;

export default async function Page() {
    return (
        <>
            <div className={styles.display}>
                {RizzDisplay({
                    type: Layout.SimplePaging,
                    options: {
                        children: [
                            {
                                type: Layout.BlurredCard,
                                options: {
                                    background: {
                                        type: Background.Blob,
                                        options: {
                                            blobColor1: "#900",
                                            blobColor2: "#300",
                                            blobBackground: "#030303",
                                            blobScale: 1,
                                            blurSize: 3,
                                            shape: Shape.Circle,
                                        },
                                    },
                                    blurSize: 6,
                                    backdropIntensity: 1,
                                    centered: true,
                                    children:
                                        "# Erreur 404\nIl ne s'est rien passé ce jour-là :🤐:",
                                },
                            },
                            JSON.parse(
                                `{"type":1,"options":{"children":"## Yooo !\\n\\n---\\n---\\n---\\nComment ça va le sannnng ? :🩸:\\n\\n---\\n***Moi ça va perso.***","centered":true,"blurSize":1,"backdropIntensity":1,"background":{"type":0,"options":{"image":"/assets/backgrounds/red-city.webp","blurSize":0.1}}}}`
                            ),
                        ],
                    },
                })}
            </div>
            <div className={styles.overlay}>
                <CalendarOverlay />
            </div>
        </>
    );
}

import { Background, Layout, LayoutDefinition, Shape } from "$/index.d";
import { getConnection } from "./core/connection";

const fallback = {
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
        children: "# Erreur 404\nIl ne s'est rien passé ce jour-là :🤐:",
    },
};



export async function getLayoutAtDate(date: number): Promise<LayoutDefinition> {
    if (!isNaN(date)) {
        let conn = await getConnection();

        if (conn) {
            let layout = (await conn.query(
                "SELECT page FROM history WHERE (`date` = ?) LIMIT 1",
                date
            )) as { page: LayoutDefinition }[];

            await conn.end();
            if (layout.length) {
                return layout[0].page;
            }
        }
    }
    return JSON.parse(JSON.stringify(fallback));
}
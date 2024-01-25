import { Background, Layout, LayoutDefinition, Shape } from "$/index.d";

const fallback = {
    type: Layout.BlurredCard,
    options: {
        background: {
            type: Background.Blob,
            options: {
                blobColor1: "#900",
                blobColor2: "#300",
                blobBackground: "#030303",
                blobScale: 1.25,
                blurSize: 3,
                shape:Shape.Circle
            }
        },
        blurSize: 6,
        backdropIntensity: 1,
        centered:true,
        children: "# Erreur 404\nIl ne s'est rien passé ce jour-là 🤐",
    },
};

const db = {
    19740: {
        type: Layout.BlurredCard,
        options: {
            background: {
                type: Background.Image,
                options: { image: "/assets/backgrounds/sakura-conduit.webp", blurSize: 0.3 },
            },
            blurSize: 2,
            backdropIntensity: .5,
            centered:true,
            children:
                "Tu sais très bien que ***je t 'aime***, pas vrai ?🫶🏻\n# \n# Je t 'aime 🫶🏻\n## Je t 'aime 🫶🏻\n### Je t 'aime 🫶🏻 🥰",
        },
    },
    19739: {
        type: Layout.BlurredCard,
        options: {
            background: {
                type: Background.Blob,
                options: {
                    blobColor1: "#fff",
                    blobColor2: "#f89",
                    blobBackground: "#000",
                    blobScale: 1.25,
                    blurSize: 1,
                    shape:Shape.Heart
                }
            },
            blurSize: 2,
            backdropIntensity: 1,
            centered:true,
            children:
                "Comment ça va ?\n\\\nParce que moi ça va 🙃",
        },
    },
};



export async function getLayoutAtDate(date: number): Promise<LayoutDefinition> {
    return JSON.parse(JSON.stringify(
        ((db as any)[date] as LayoutDefinition | undefined) ??
        fallback
    ));
}

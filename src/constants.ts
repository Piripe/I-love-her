import { EditorParamComponent, EditorParamDefinition, LayoutDefinition, SpecialParamType } from "$/index.d";
import BlobBackground from "./components/backgrounds/BlobBackground";
import ImageBackground from "./components/backgrounds/ImageBackground";
import BlurredCard from "./components/layouts/BlurredCard";
import SimplePaging from "./components/layouts/SimplePaging";
import SimpleText from "./components/layouts/SimpleText";
import Circle from "./components/shapes/Circle";
import Heart from "./components/shapes/Heart";
import Star from "./components/shapes/Star";

export const backgrounds = [ImageBackground, BlobBackground];
export const backgroundSpecialParams = [
    {},
    {
        shape: SpecialParamType.Shape,
    },
];
export const layouts = [SimpleText, BlurredCard, SimplePaging];
export const layoutSpecialParams = [
    {
        background: SpecialParamType.Background,
    },
    {
        background: SpecialParamType.Background,
    },
    {
        pages: SpecialParamType.Layouts,
    }
];
export const shapes = [Circle, Heart, Star];

export const backgroundEditorParams: {
    name: string;
    defaults: any;
    params: EditorParamDefinition[];
}[] = [
    {
        name: "Simple Image",
        defaults: { image: "", blurSize: 2 },
        params: [
            { name: "image", label: "Image", component: EditorParamComponent.Image },
            {
                name: "blurSize",
                label: "Blur Size",
                component: EditorParamComponent.Decimal,
                componentAdditionalSettings: {
                    min: 0,
                    max: 32,
                    step: 0.1,
                },
            },
        ],
    },
    {
        name: "Blob",
        defaults: {
            blobColor1: "#f00",
            blobColor2: "#0ff",
            blobBackground: "#000",
            blobScale: 1,
            blurSize: 2,
            shape: 0,
        },
        params: [
            {
                name: "blobColor1",
                label: "Blob Color 1",
                component: EditorParamComponent.Color,
            },
            {
                name: "blobColor2",
                label: "Blob Color 2",
                component: EditorParamComponent.Color,
            },
            {
                name: "blobBackground",
                label: "Background Color",
                component: EditorParamComponent.Color,
            },
            {
                name: "blobScale",
                label: "Blob Scale",
                component: EditorParamComponent.Decimal,
                componentAdditionalSettings: {
                    min: 0,
                    max: 10,
                    step: 0.1,
                },
            },
            {
                name: "blurSize",
                label: "Blur Size",
                component: EditorParamComponent.Decimal,
                componentAdditionalSettings: {
                    min: 0,
                    max: 32,
                    step: 0.1,
                },
            },
            { name: "shape", label: "Shape", component: EditorParamComponent.Shape },
        ],
    },
];

const defaultLayoutOptions = {
    children: "",
    centered: true,
    color: "#fff",
    invertedTransparency: false,
    background: { type: 0, options: backgroundEditorParams[0].defaults },
}
export const layoutEditorParams: {
    name: string;
    defaults: any;
    params: EditorParamDefinition[];
}[] = [
    {
        name: "Simple Text",
        defaults: defaultLayoutOptions,
        params: [
            {
                name: "children",
                label: "Text",
                component: EditorParamComponent.LongText,
            },
            {
                name: "centered",
                label: "Text Centered",
                component: EditorParamComponent.Bool,
            },
            {
                name: "color",
                label: "Text Color",
                component: EditorParamComponent.Color,
            },
            {
                name: "invertedTransparency",
                label: "Inverted Transparency",
                component: EditorParamComponent.Bool,
            },
            {
                name: "background",
                label: "Background",
                component: EditorParamComponent.Background,
            },
        ],
    },
    {
        name: "Blurred Card",
        defaults: {
            children: "",
            centered: true,
            blurSize: 6,
            backdropIntensity: 1,
            background: { type: 0, options: backgroundEditorParams[0].defaults },
        },
        params: [
            {
                name: "children",
                label: "Text",
                component: EditorParamComponent.LongText,
            },
            {
                name: "centered",
                label: "Text Centered",
                component: EditorParamComponent.Bool,
            },
            {
                name: "blurSize",
                label: "Blur Size",
                component: EditorParamComponent.Decimal,
                componentAdditionalSettings: {
                    min: 0,
                    max: 32,
                    step: 0.2,
                },
            },
            {
                name: "backdropIntensity",
                label: "Backdrop Intensity",
                component: EditorParamComponent.Decimal,
                componentAdditionalSettings: {
                    min: 0,
                    max: 2,
                    step: 0.05,
                },
            },
            {
                name: "background",
                label: "Background",
                component: EditorParamComponent.Background,
            },
        ],
    },
    {
        name: "Simple Paging",
        defaults: {
            pages: [{type:0,options:defaultLayoutOptions}] as LayoutDefinition[],
            background: { type: 0, options: backgroundEditorParams[0].defaults },
        },
        params: [
            {
                name: "pages",
                label: "Pages",
                component: EditorParamComponent.Layouts,
            },
            {
                name: "background",
                label: "Background",
                component: EditorParamComponent.Background,
            },
        ],
    },
];
export const shapeEditorNames: string[] = ["Circle", "Heart", "Star"];

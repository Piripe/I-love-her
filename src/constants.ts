import {SpecialParamType} from "$/index.d";
import BlobBackground from "./components/backgrounds/BlobBackground";
import ImageBackground from "./components/backgrounds/ImageBackground";
import BlurredCard from "./components/layouts/BlurredCard";
import SimpleText from "./components/layouts/SimpleText";
import Circle from "./components/shapes/Circle";
import Heart from "./components/shapes/Heart";
import Star from "./components/shapes/Star";

export const backgrounds = [
    ImageBackground,
    BlobBackground,
]
export const backgroundSpecialParams = [
    {
    },
    {
        shape:SpecialParamType.Shape
    }
]
export const layouts = [
    SimpleText,
    BlurredCard,
]
export const layoutSpecialParams = [
    {
        background:SpecialParamType.Background
    },
    {
        background:SpecialParamType.Background
    }
]
export const shapes = [
    Circle,
    Heart,
    Star
]

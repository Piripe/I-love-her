import { BackgroundDefinition, LayoutDefinition, SpecialParamType } from "$/index.d";
import {
    backgroundSpecialParams,
    backgrounds,
    layoutSpecialParams,
    layouts,
    shapes,
} from "@/constants";

export default function RizzDisplay(props: LayoutDefinition) {
    return getLayout(props);
}
function getLayout(l: LayoutDefinition) {
    let options = l.options;
    const specialParams = layoutSpecialParams[l.type] as any;
    Object.keys(specialParams).forEach(paramName => {
        options[paramName] = getSpecialParam(
            specialParams[paramName] as SpecialParamType,
            options[paramName]
        );
    });

    return layouts[l.type](options);
}
function getBackground(b: BackgroundDefinition) {
    let options = b.options;
    const specialParams = backgroundSpecialParams[b.type] as any;
    Object.keys(specialParams).forEach(paramName => {
        options[paramName] = getSpecialParam(
            specialParams[paramName] as SpecialParamType,
            options[paramName]
        );
    });

    return backgrounds[b.type](options);
}
function getSpecialParam(param: SpecialParamType, value: any) {
    switch (param) {
        case SpecialParamType.Background:
            return getBackground(value);
        case SpecialParamType.Layout:
            return getLayout(value);
        case SpecialParamType.Shape:
            return shapes[value];
        case SpecialParamType.Layouts:
            return value?.map(getLayout);
    }
}

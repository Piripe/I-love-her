export type ShapeProps = {
    x:number,
    y:number,
    size:number,
    className:string|undefined
}
export enum Layout {
    SimpleText = 0,
    BlurredCard = 1,
    SimplePaging = 2,
}
export enum Background {
    Image = 0,
    Blob = 1,
}
export enum Shape {
    Circle = 0,
    Heart = 1,
    Star = 2,
}
export enum SpecialParamType {
    Layout = 0,
    Background = 1,
    Shape = 2,
    Layouts = 3
}
export type LayoutDefinition = {
    type:Layout
    options:any
}
export type BackgroundDefinition = {
    type:Background
    options:any
}
export enum ButtonStyle {
    Default = 0,
    Accent = 1
}
export enum FolderContentType {
    File = 0,
    Folder = 1,
}
export type FolderContent = {
    type:FolderContentType,
    name:string
}
export enum EditorParamComponent {
    Layout = 0,
    Background = 1,
    Shape = 2,
    Image = 3,
    ShortText = 4,
    LongText = 5,
    Decimal = 6,
    Int = 7,
    Bool = 8,
    Color = 9,
    Layouts = 10,
}
export type EditorParamDefinition = {
    name:string,
    label:string,
    tips?:string,
    component:EditorParamComponent,
    componentAdditionalSettings?:any,
}
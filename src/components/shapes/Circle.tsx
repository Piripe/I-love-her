import { ShapeProps } from "$/index";

export default function Circle(props: ShapeProps) {
    return <circle className={props.className} cx={props.x} cy={props.y} r={props.size / 2} />;
}

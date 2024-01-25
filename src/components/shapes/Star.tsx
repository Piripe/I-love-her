export default function Star(props: ShapeProps) {
    const { x, y, size } = props;
    return (
        <path
            className={props.className}
            d={`M ${0.5 * size + x},${y} L ${0.625 * size + x},${0.325 * size + y} ${
                1 * size + x
            },${0.3 * size + y} ${0.7 * size + x},${0.55 * size + y} ${0.8 * size + x},${
                0.9 * size + y
            } ${0.5 * size + x},${0.7 * size + y} ${0.2 * size + x},${0.9 * size + y} ${
                0.3 * size + x
            },${0.55 * size + y} ${x},${0.3 * size + y} ${0.375 * size + x},${0.325 * size + y} z`}
        />
    );
}

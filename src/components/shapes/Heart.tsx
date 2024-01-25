export default function Heart(props: ShapeProps) {
    const { x, y, size } = props;
    return (
        <path
            className={props.className}
            d={`M ${(1 / 9) * size + x},${(3 / 9) * size + y} A ${(2 / 9) * size},${
                (2 / 9) * size
            } 0,0,1 ${(5 / 9) * size + x},${(3 / 9) * size + y} A ${(2 / 9) * size},${
                (2 / 9) * size
            } 0,0,1 ${1 * size + x},${(3 / 9) * size + y} Q ${1 * size + x},${(6 / 9) * size + y} ${
                (5 / 9) * size + x
            },${1 * size + y} Q ${(1 / 9) * size + x},${(6 / 9) * size + y} ${(1 / 9) * size + x},${
                (3 / 9) * size + y
            } z`}
        />
    );
}

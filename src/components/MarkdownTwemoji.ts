import Twemoji from "twemoji";

export default function MarkdownTwemoji(input: string) {
    return input.replace(
        /:([^:]+):/g,
        (x: string, ...groups: any[]) =>
            `![${x}](https://twemoji.maxcdn.com/v/14.0.1/svg/${Twemoji.convert.toCodePoint(
                groups[0]
            )}.svg)`
    );
}

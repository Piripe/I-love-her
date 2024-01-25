"use server";
import { FolderContent } from "$/index.d";
import { lstatSync, readdirSync } from "fs";
import path from "path";

export async function getFolderContent(p: string): Promise<FolderContent[]> {
    const fullPath = "./public/" + p;
    const relative = path.relative("./public", fullPath);
    if (relative.startsWith("..") || path.isAbsolute(relative)) return [];
    return readdirSync(fullPath).map(x => {
        return { type: +lstatSync(fullPath + "/" + x).isDirectory(), name: x };
    });
}

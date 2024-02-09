import config from "@/config";
import { getSession, insertSession } from "@/db/core/auth";

function genId(length: number) {
    let result = "";
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export async function login(password: string) {
    if (config.users.includes(password)) {
        let userToken = genId(64);
        
        insertSession(config.users.indexOf(password),userToken);

        return userToken;
    }
    return null;
}

export async function getUser(token: string) {
    return await getSession(token);
    // TODO: Cache sessions
}

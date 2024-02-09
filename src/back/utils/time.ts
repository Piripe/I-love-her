export function setRoutine(handler: Function, interval: number, offset: number, ...argArray:any[]) {
    setTimeout(() => {
        handler.call(handler,argArray);
        setTimeout(() => setRoutine(handler, interval, offset, ...argArray),50);
    }, (interval - ((Date.now() + offset) % interval)) % interval);
}

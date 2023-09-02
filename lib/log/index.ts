let enableLog: boolean = true;

export function log(message: any, ...optionalParams: any[]) {
    if (enableLog) console.log(message, ...optionalParams)
}
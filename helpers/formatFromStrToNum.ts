export function formatFromStrToNum(str: string): number {
    return +str.replace(/\s/g, "");
}

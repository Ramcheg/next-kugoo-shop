export default function toNumberLink(str: string): number {
    let newstr = str.match(/\d/g)?.join("");
    if (typeof newstr === "string") {
        return parseInt(newstr);
    } else {
        return NaN;
    }
}

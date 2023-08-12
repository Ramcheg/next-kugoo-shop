import formatCurrency from "./formatCurrency";
import { formatFromStrToNum } from "./formatFromStrToNum";

export const formatProcentCurrency = (
    price: string | number,
    sale: string
): string => {
    let numCurr: number;

    if (typeof price === "string") {
        numCurr = formatFromStrToNum(price);
    } else {
        numCurr = price;
    }
    const toNumSale = formatFromStrToNum(sale);
    if (toNumSale > 0 && sale) {
        return formatCurrency(
            Math.floor(numCurr - numCurr * (toNumSale / 100))
        );
    } else {
        return "";
    }
};

import formatCurrency from "./formatCurrency";
import { formatFromStrToNum } from "./formatFromStrToNum";

export const formatProcentCurrency = (str: string, sale: string): string => {
    const toNumCurr = formatFromStrToNum(str);
    const toNumSale = formatFromStrToNum(sale);
    if (toNumSale > 0 && sale) {
        return formatCurrency(
            Math.floor(toNumCurr - toNumCurr * (toNumSale / 100))
        );
    } else {
        return "";
    }
};

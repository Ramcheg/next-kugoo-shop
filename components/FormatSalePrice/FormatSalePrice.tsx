import formatCurrency from "@/helpers/formatCurrency";
import { formatFromStrToNum } from "@/helpers/formatFromStrToNum";
import { formatProcentCurrency } from "@/helpers/formatProcentCurrency";

export function FormatSalePrice({
    price,
    sale,
}: {
    price: string;
    sale: string;
}): JSX.Element {
    const oldCurr = formatCurrency(formatFromStrToNum(price));

    const saleCurr = formatProcentCurrency(price, sale);
    return (
        <div>
            {saleCurr !== "" ? (
                <>
                    <div className="text-xs 2xl:text-ms text-gray-dark line-through">
                        {oldCurr}
                    </div>
                    <div className="text-xl 2xl:text-2xl font-semibold">
                        {saleCurr}
                    </div>
                </>
            ) : (
                <div className="text-xl 2xl:text-2xl font-semibold">
                    {oldCurr}
                </div>
            )}
        </div>
    );
}

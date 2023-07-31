import { H, ProductCard } from "..";

export function AdditionallyProduct(): JSX.Element {
    return (
        <div>
            <H className="text-center" level={2}>
                часто покупают
            </H>
            <div className="flex justify-center gap-7 flex-wrap mt-3 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

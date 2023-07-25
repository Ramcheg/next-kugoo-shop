import { H } from "@/components";
import { HomeProductsSort } from "../HomeProductsSort/HomeProductsSort";
import { ProductCard } from "@/components/ProductCard/ProductCard";

export function HomeProducts(): JSX.Element {
    return (
        <>
            <div className="flex justify-between items-center">
                <H level={2}>Электросамокаты</H>
                <div className="flex gap-[.63rem]">
                    <HomeProductsSort />
                </div>
            </div>
            <div>
                <ProductCard />
            </div>
        </>
    );
}

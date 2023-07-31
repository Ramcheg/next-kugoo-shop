import { Button, H, Input } from "@/components";
import { HomeProductsSort } from "../HomeProductsSort/HomeProductsSort";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";

export function HomeProducts(): JSX.Element {
    return (
        <>
            <div className="flex justify-center md:justify-between items-center mt-10">
                <H className="hidden md:block" level={2}>
                    Электросамокаты
                </H>
                <div className="flex flex-col sm:flex-row  gap-[.63rem]">
                    <HomeProductsSort />
                </div>
            </div>
            <div className="grid justify-center  gap-y-10 gap-x-7 grid-cols-[repeat(auto-fit,minmax(0,_150px))] md:grid-cols-[repeat(auto-fit,minmax(0,_225px))] 2xl:grid-cols-[repeat(auto-fit,minmax(0,_300px))] grid-rows-2 mt-12">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex justify-center mt-4 md:mt-8">
                <Button
                    className=" border-gray-dark "
                    color="gray"
                    size="middle"
                >
                    Смотреть все
                </Button>
            </div>
        </>
    );
}

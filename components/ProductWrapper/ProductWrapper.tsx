"use client";

import { IProductWithoutFirebase } from "@/helpers/getAllProductsFire";
import { ProductCard } from "..";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import {
    handleFilter,
    addProduct,
} from "../HomePage/HomeProducts/homeProductSlice";

export function ProductWrapper({
    products,
}: {
    products: IProductWithoutFirebase[];
}): JSX.Element {
    const { electricScooterArr } = useAppSelector((store) => store.homeProduct);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addProduct(products));
    }, []);

    return (
        <div className="grid justify-center  gap-y-10 gap-x-7 grid-cols-[repeat(auto-fit,minmax(0,_150px))] md:grid-cols-[repeat(auto-fit,minmax(0,_225px))] 2xl:grid-cols-[repeat(auto-fit,minmax(0,_300px))] grid-rows-2 mt-12">
            {electricScooterArr ? (
                electricScooterArr.map((item, i) => {
                    return <ProductCard key={item.id} {...item} />;
                })
            ) : (
                <h2 className="text-center mt-12">
                    Товаров в данной катигории нет
                </h2>
            )}
        </div>
    );
}

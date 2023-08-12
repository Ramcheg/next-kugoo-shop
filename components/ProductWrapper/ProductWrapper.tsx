"use client";

import { IProductWithoutFirebase } from "@/helpers/getAllProductsFire";
import { ProductCard } from "..";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import {
    addProduct,
    selectFilterHomeProduct,
} from "../HomePage/HomeProducts/homeProductSlice";
import Loading from "@/app/loading";
import { motion } from "framer-motion";
import { localStorageNameType } from "@/interfaces/localStorageTypes";
import { IBasketGoods } from "../Header/HeaderBasketModal/HeaderBasketModalProps";
import { initLocalStorArr } from "../ProductCard/ProductCardSlice";

export function ProductWrapper({
    products,
}: {
    products: IProductWithoutFirebase[];
}): JSX.Element {
    const dispatch = useAppDispatch();
    const filteredProducts = useAppSelector(selectFilterHomeProduct);
    const loading = useAppSelector((store) => store.homeProduct.loading);
    const filteredProductSlice = filteredProducts.slice(0, 8);
    useEffect(() => {
        function checkBasketStorage(localStorName: localStorageNameType) {
            const storage = localStorage.getItem(localStorName);
            if (storage && storage !== "") {
                const parse = JSON.parse(storage) as IBasketGoods[];
                dispatch(
                    initLocalStorArr({
                        arr: parse,
                        localStorType: localStorName,
                    })
                );
            } else {
                return [];
            }
        }

        checkBasketStorage("basket");
        checkBasketStorage("favorite");
        checkBasketStorage("compare");
        dispatch(addProduct(products));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderItem =
        filteredProductSlice && filteredProductSlice.length > 0 ? (
            filteredProductSlice.map((item, i) => {
                return <ProductCard key={item.id} {...item} />;
            })
        ) : (
            <h2 className="text-center text-xl  mt-12">
                Товаров в данной катигории нет
            </h2>
        );

    return (
        <motion.div
            style={{ opacity: 1 }}
            layout
            className="grid justify-center gap-y-10 gap-x-7  grid-cols-[repeat(auto-fit,minmax(0,_150px))]  sm:grid-cols-[repeat(auto-fit,minmax(150px,_250x))] md:grid-cols-[repeat(auto-fit,minmax(0,_300px))] grid-rows-1 auto-rows-fr mt-12"
        >
            {loading === "loading" ? <Loading /> : renderItem}
        </motion.div>
    );
}

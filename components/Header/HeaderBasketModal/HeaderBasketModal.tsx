"use client";

import { Button } from "@/components";
import { IBasketGoods } from "./HeaderBasketModalProps";
import thumbnailBasket from "@/public/other/thumbnail_Basket.png";
import formatCurrency from "@/helpers/formatCurrency";
import { HeaderBasketModalItem } from "./HeaderBasketModalItem";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { initLocalStorArr } from "@/components/ProductCard/ProductCardSlice";

export function HeaderBasketModal(): JSX.Element {
    const [allPrice, setAllPrice] = useState<number>(0);
    const { basketArr } = useAppSelector((store) => store.productCard);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let currenPrice = 0;
        basketArr.forEach(({ price, sale }) => {
            currenPrice += Math.floor(price - price * (+sale / 100));
        });
        setAllPrice(currenPrice);
    }, [basketArr]);

    function formatGoodsText(count: number): string {
        const wordForms = ["товар", "товара", "товаров"];

        if (count % 10 === 1 && count % 100 !== 11) {
            return `${count} ${wordForms[0]}`;
        }

        if (
            [2, 3, 4].includes(count % 10) &&
            ![12, 13, 14].includes(count % 100)
        ) {
            return `${count} ${wordForms[1]}`;
        }
        return `${count} ${wordForms[2]}`;
    }

    const deletedProduct = (id: string) => {
        const newProduct = basketArr.filter((item, index) => item.id !== id);
        dispatch(
            initLocalStorArr({ arr: newProduct, localStorType: "basket" })
        );
    };

    const renderItems = basketArr.map((goods, i) => {
        return (
            <HeaderBasketModalItem
                deletedProduct={deletedProduct}
                key={goods.id}
                {...goods}
            />
        );
    });

    return (
        <div className="absolute w-[21rem] 2xl:w-[24rem] z-20 h-[21rem] right-5 2xl:right-15 top-14 ">
            <div>
                <div className=" bg-gray-light  px-[1.25rem] py-4 flex items-center justify-between gap-[5.3rem]">
                    <div className="font-medium text-lg">В вашей корзине</div>
                    <div className="text-sm 2xl:text-base text-gray-dark ">
                        {formatGoodsText(basketArr.length)}
                    </div>
                </div>
                <div className="overflow-y-auto bg-white h-[13rem] ">
                    {basketArr.length === 0 ? (
                        <h2 className="text-center text-xl 2xl:text-2xl mt-10 ">
                            У вас нет товаров в корзине
                        </h2>
                    ) : (
                        renderItems
                    )}
                    <div className=""></div>
                </div>
                <div className="flex bg-white justify-between px-[1.25rem] py-4 items-center shadow-[0px_-20px_20px_-20px_rgba(0,0,0,0.16)]">
                    <div className={basketArr.length > 0 ? "block" : "hidden"}>
                        <p className="text-sm 2xl:text-base text-gray-dark">
                            Сумма:
                        </p>
                        <p className="font-medium text-lg 2xl:text-xl">
                            {formatCurrency(allPrice)}
                        </p>
                    </div>
                    <Link href="/basket">
                        <Button
                            className="mx-auto"
                            color="lavander"
                            size="dropDown"
                            isDisabled={basketArr.length == 0}
                            isHover={basketArr.length !== 0}
                        >
                            Перейти к корзине
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

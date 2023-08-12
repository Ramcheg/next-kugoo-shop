"use client";

import Image from "next/image";
import { H } from "../H/H";
import {
    AddInBusketBtn,
    AddInCompareBtn,
    AddInFavoriteBtn,
    FormatSalePrice,
    PayForOneClick,
} from "..";

import BattarySvg from "@/public/card/battary.svg";
import SpeedometerSvg from "@/public/card/speedometer.svg";
import PowerSvg from "@/public/card/power.svg";
import TimerSvg from "@/public/card/timer.svg";
import { FakeButton } from "../FakeButton/FakeButton";
import Link from "next/link";
import { IDate } from "@/helpers/getProductsFireType";
import Loading from "@/app/loading";
import formatNumber from "@/helpers/formatNumber";
import { formatFromStrToNum } from "@/helpers/formatFromStrToNum";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IBasketGoods } from "../Header/HeaderBasketModal/HeaderBasketModalProps";
import { localStorageNameType } from "@/interfaces/localStorageTypes";
import { formatProcentCurrency } from "@/helpers/formatProcentCurrency";

export function ProductCard({
    name,
    mainImg,
    price,
    descriptionProduct,
    typeTransportareEN,
    id,
    sale,
    sold,
    createdData,
    amount,
    thumpnail,
}: IDate): JSX.Element {
    const [isBusketTrue, SetIsBusketTrue] = useState<boolean>(false);
    const [isFavoriteTrue, SetIsFavoriteTrue] = useState<boolean>(false);
    const [isCompareTrue, SetIsCompareTrue] = useState<boolean>(false);

    useEffect(() => {
        function checkBasketStorage(localStorName: localStorageNameType) {
            const storage = localStorage.getItem(localStorName);
            if (storage && storage !== "") {
                const parse = JSON.parse(storage) as IBasketGoods[];
                if (parse.length > 0) {
                    const filterProduct = parse.filter(
                        (item) => item.id === id
                    );
                    return filterProduct.length > 0;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        SetIsBusketTrue(checkBasketStorage("basket"));
        SetIsFavoriteTrue(checkBasketStorage("favorite"));
        SetIsFavoriteTrue(checkBasketStorage("compare"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!name) {
        return <Loading />;
    }

    const isNewProduct = (): boolean => {
        const currentDate = new Date().getTime();
        const createProduct = new Date(createdData.seconds * 1000).getTime();
        const beatweenDate = currentDate - createProduct;
        if (beatweenDate < 604800000) {
            return true;
        } else {
            return false;
        }
    };

    const setStorage = (localStorName: localStorageNameType) => {
        const storage = localStorage.getItem(localStorName);
        if (storage && storage !== "") {
            return JSON.parse(storage) as IBasketGoods[];
        } else {
            return [];
        }
    };

    const changeEventStorage = (
        localStorName: localStorageNameType,
        inLocalStor: boolean
    ) => {
        switch (localStorName) {
            case "basket":
                SetIsBusketTrue(inLocalStor);
                break;
            case "favorite":
                SetIsFavoriteTrue(inLocalStor);
                break;
            case "compare":
                SetIsCompareTrue(inLocalStor);
                break;
            default:
                break;
        }
    };
    const getEventStorage = (localStorName: localStorageNameType) => {
        switch (localStorName) {
            case "basket":
                return isBusketTrue;
            case "favorite":
                return isFavoriteTrue;
            case "compare":
                return isCompareTrue;
            default:
                break;
        }
    };

    const getLocalStorage = (localStorName: localStorageNameType) => {
        const localStor = setStorage(localStorName);
        if (getEventStorage(localStorName)) {
            const deleteProduct = localStor.filter((item) => item.id !== id);
            localStorage.setItem(localStorName, JSON.stringify(deleteProduct));
            changeEventStorage(localStorName, false);
        } else {
            const newArr: IBasketGoods = {
                id,
                count: 1,
                name,
                price: formatFromStrToNum(price),
                sale: sale,
                thumbnail:
                    typeof thumpnail == "string" ? thumpnail : thumpnail[0],
            };
            const newArrProduct: IBasketGoods[] = [...localStor, newArr];
            localStorage.setItem(localStorName, JSON.stringify(newArrProduct));
            changeEventStorage(localStorName, true);
        }
    };
    const isNewProd = isNewProduct();
    return (
        <motion.div
            layout
            className="relative overflow-hidden border border-solid rounded-xl border-gray-editible flex flex-col justify-between"
        >
            <div className="">
                <Image
                    src={mainImg}
                    alt="skuter"
                    width={221}
                    height={284}
                    className="md:w-full 2xl:w-[100%]  mx-auto mt-[1px]  rounded-t-xl"
                />
            </div>
            <div className="flex justify-center flex-col items-center mt-3 mx-1 md:mx-4 ">
                <Link
                    className="text-center"
                    href={`/catalog/${typeTransportareEN}/${id}`}
                >
                    <H className=" text-center hover:text-lavander" level={4}>
                        {name}
                    </H>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-4 my-5">
                    <div className="flex gap-2 items-center">
                        <BattarySvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {`${formatNumber(
                                formatFromStrToNum(
                                    descriptionProduct.powerBattary.slice(0, -3)
                                )
                            )} mAh`}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <SpeedometerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {`${descriptionProduct.speed} км/ч`}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <PowerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {`${descriptionProduct.power} W`}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TimerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {`${descriptionProduct.timeBattary} ${
                                +descriptionProduct.timeBattary < 5
                                    ? "часа"
                                    : "часов"
                            }`}
                        </span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:gap-6 items-center justify-between mb-4">
                    <FormatSalePrice sale={sale} price={price} />
                    <div className="flex gap-2 justify-center items-center">
                        <AddInBusketBtn
                            isItemInLocalStor={
                                isBusketTrue ? isBusketTrue : false
                            }
                            getLocalStorage={getLocalStorage}
                        />
                        <AddInFavoriteBtn
                            isItemInLocalStor={
                                isFavoriteTrue ? isFavoriteTrue : false
                            }
                            getLocalStorage={getLocalStorage}
                        />
                    </div>
                </div>
            </div>
            <PayForOneClick />
            <AddInCompareBtn
                className="absolute  top-4 right-4"
                getLocalStorage={getLocalStorage}
                isItemInLocalStor={isBusketTrue ? isBusketTrue : false}
            />
            {+sold > 5 && (
                <FakeButton
                    className="absolute top-6 left-6"
                    bgColor="red"
                    textColor="white"
                    isUpperCase
                >
                    хит
                </FakeButton>
            )}
            {isNewProd && (
                <FakeButton
                    className={`absolute top-6 ${
                        +sold > 5 ? "left-24" : " left-6"
                    }`}
                    bgColor="green"
                    textColor="white"
                    isUpperCase={false}
                >
                    Новинка
                </FakeButton>
            )}
        </motion.div>
    );
}

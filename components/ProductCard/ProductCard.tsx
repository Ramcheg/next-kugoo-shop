"use client";

import Image from "next/image";
import { H } from "../H/H";
import { ButtonIcon, FormatSalePrice, PayForOneClick } from "..";

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
}: IDate): JSX.Element {
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

    const isNewProd = isNewProduct();
    console.log(isNewProduct());
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
                        <ButtonIcon
                            colorIcon="lavander"
                            icon="shopping"
                            withBorder
                        />
                        <ButtonIcon
                            colorIcon="lavander"
                            icon="heart"
                            withBorder
                        />
                    </div>
                </div>
            </div>
            <PayForOneClick />
            <ButtonIcon
                className="absolute bg-white/20 top-4 right-4"
                colorIcon="white"
                icon="compare"
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

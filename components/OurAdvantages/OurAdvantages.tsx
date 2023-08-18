"use client";

import { Button, H } from "..";

import ArrowRightSVG from "@/public/ArrowRight.svg";
import { ILastServisecItem, IOurAdvantagesItems } from "./OurAdvantagesTypes";
import Image from "next/image";
import Link from "next/link";
import {
    advntInternetShopArr,
    advntServicesArr,
    internetShop,
    servicesShop,
} from "./OurAdvantagesArr";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

export function OurAdvantages(): JSX.Element {
    const [firstSlide, setFirstSlide] = useState<boolean>(true);
    const [secontSlide, setSecontSlide] = useState<boolean>(false);

    const RenderFullItems = (
        { name, link, img }: ILastServisecItem,
        arr: IOurAdvantagesItems[]
    ) => {
        const renderAdvItems = arr.map(
            ({ descrtiption, icon, name }, i): JSX.Element => {
                return (
                    <div
                        className="px-5  py-6 border border-solid border-gray-editible rounded-md  w-3/4 md:w-full mx-auto  sm:w-auto "
                        key={i}
                    >
                        {icon}
                        <div className="text-lg 2xl:text-xl font-medium mt-5">
                            {name}
                        </div>
                        <p className="text-sm/5 2xl:text-base/5 mt-2  w-full lg:w-3/4">
                            {descrtiption}
                        </p>
                    </div>
                );
            }
        );

        return (
            <>
                {renderAdvItems}
                <div className=" relative px-5  py-6 border border-solid border-gray-editible rounded-md  w-3/4 md:w-full mx-auto overflow-hidden bg-gray-light">
                    <div className="mt-11  relative z-10">
                        <div className="text-lg 2xl:text-xl font-medium mt-5   ">
                            {name}
                        </div>
                        <Link
                            href={`/${link}`}
                            className="text-sm 2xl:text-base text-lavander font-medium  mt-2 flex items-center gap-2 "
                        >
                            Перейти <ArrowRightSVG />
                        </Link>
                    </div>
                    <Image
                        className="absolute right-0 bottom-0 md:w-2/3 lg:w-[55%] xl:w-[40%]"
                        src={img}
                        alt={link}
                    />
                </div>
            </>
        );
    };

    const onChangeSlide = () => {
        setSecontSlide((second) => !second);
        setFirstSlide((first) => !first);
    };

    const internetShopItems = RenderFullItems(
        internetShop,
        advntInternetShopArr
    );
    const servicesItems = RenderFullItems(servicesShop, advntServicesArr);

    const variantShop: Variants = {
        hidden: { x: -4000 },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 460,
                damping: 50,
            },
        },
    };

    const variantServices: Variants = {
        hidden: { x: 4000 },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 460,
                damping: 50,
            },
        },
    };

    return (
        <div>
            <div className="text-center">
                <H level={2}>
                    Предлагаем самые выгодные <br />
                    цены на продукты Kugoo за счет прямых поставок
                </H>
                <p className="mt-5 text-xl">
                    и заботимся об удобстве покупателей
                </p>
            </div>
            <div className="flex justify-center mt-4 md:mt-12 gap-5">
                <Button
                    color={firstSlide ? "white" : "gray"}
                    size="middle"
                    withBorder={firstSlide}
                    isDisabled={firstSlide}
                    isHover={!firstSlide}
                    onClick={() => onChangeSlide()}
                >
                    Интернет-магазин
                </Button>
                <Button
                    color={secontSlide ? "white" : "gray"}
                    size="middle"
                    withBorder={secontSlide}
                    isDisabled={secontSlide}
                    isHover={!secontSlide}
                    onClick={() => onChangeSlide()}
                >
                    Сервисный центр
                </Button>
            </div>
            {firstSlide ? (
                <motion.div
                    variants={variantShop}
                    animate={firstSlide ? "visible" : "hidden"}
                    initial={"hidden"}
                    className="grid grid-cols-[minmax(auto-fit(0,230px))] md:grid-cols-3 md:grid-rows-2 grid-rows-3 gap-7 mt-7  md:mt-14 "
                >
                    {internetShopItems}
                </motion.div>
            ) : null}
            {secontSlide ? (
                <motion.div
                    variants={variantServices}
                    initial={"hidden"}
                    animate={secontSlide ? "visible" : "hidden"}
                    className="grid grid-cols-[minmax(auto-fit(0,230px))] md:grid-cols-3 md:grid-rows-2 grid-rows-3 gap-7 mt-7  md:mt-14 "
                >
                    {servicesItems}
                </motion.div>
            ) : null}
        </div>
    );
}

"use client";

import { FC } from "react";
import {
    IServicePriceListItem,
    ServicePriceListBtnNameType,
} from "./ServicePriceListTypes";
import { Variants, motion } from "framer-motion";
import { ServicePriceListItemsBtn } from "./ServicePriceListItemsBtn";

interface ServicePriceListItems {
    ArrListItems: IServicePriceListItem[];
    isActiveSlide: boolean;
    type: ServicePriceListBtnNameType;
}

export const ServicePriceListItems: FC<ServicePriceListItems> = ({
    ArrListItems,
    isActiveSlide,
    type,
}) => {
    const renderItem = (arr: IServicePriceListItem[]) => {
        return arr.map(({ id, name, price }) => {
            return (
                <div
                    className="flex justify-between border-b-2 border-solid border-gray-light py-4 text-xs md:text-base"
                    key={id}
                >
                    <div>{name}</div>
                    <div className="font-medium">{price}</div>
                </div>
            );
        });
    };

    const render = () => {
        const firstList = [...ArrListItems].slice(0, 9);
        const secondList = [...ArrListItems].slice(9, ArrListItems.length);

        const fistRender = renderItem(firstList);
        const secondRender = renderItem(secondList);

        return (
            <div className="flex justify-between flex-wrap mt-6 md:mt-14 mx-2 md:mx-0">
                <div className="w-5/12">{fistRender}</div>
                <div className="w-5/12">{secondRender}</div>
            </div>
        );
    };

    const container: Variants = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "block" },
    };

    return (
        <motion.div
            className="container mx-auto"
            variants={container}
            animate={isActiveSlide ? "visible" : "hidden"}
        >
            {render()}
            <div className="flex justify-center mt-5 md:mt-10">
                <ServicePriceListItemsBtn
                    ArrListItems={ArrListItems}
                    type={type}
                />
            </div>
        </motion.div>
    );
};

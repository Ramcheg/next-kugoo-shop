"use client";

import { H } from "@/components";
import { FC, useState } from "react";
import { ServicePriceListBtnList } from "./ServicePriceListBtnList";

import { ServicePriceListItems } from "./ServicePriceListItems";
import { ServicePriceListItemHidro } from "./ServicePriceListArr";
import { ServicePriceListBtnNameType } from "./ServicePriceListTypes";

export const ServicePriceList: FC = () => {
    const [activeSlide, setActiveSlide] =
        useState<ServicePriceListBtnNameType>("hidro");

    const changeActiveSlide = (slideName: ServicePriceListBtnNameType) => {
        setActiveSlide(slideName);
    };

    return (
        <div>
            <H className="text-center" level={2}>
                Стоимость гидроизоляции и настройки
            </H>
            <p className="text-center">
                Для версии MAX и VIP гидроизоляция и настройка — бесплатно
            </p>
            <ServicePriceListBtnList
                changeActiveSlide={changeActiveSlide}
                activeSlide={activeSlide}
            />
            <ServicePriceListItems
                ArrListItems={ServicePriceListItemHidro}
                isActiveSlide={activeSlide === "hidro"}
                type="hidro"
            />
            <ServicePriceListItems
                ArrListItems={ServicePriceListItemHidro}
                isActiveSlide={activeSlide === "setting"}
                type="setting"
            />
            <ServicePriceListItems
                ArrListItems={ServicePriceListItemHidro}
                isActiveSlide={activeSlide === "hidroAndSetting"}
                type="hidroAndSetting"
            />
        </div>
    );
};

"use client";
import { Button } from "@/components";
import { FC } from "react";
import { ServicePriceListBtn } from "./ServicePriceListArr";
import { ServicePriceListBtnNameType } from "./ServicePriceListTypes";

interface IServicePriceListBtnList {
    changeActiveSlide: (slideName: ServicePriceListBtnNameType) => void;
    activeSlide: ServicePriceListBtnNameType;
}
export const ServicePriceListBtnList: FC<IServicePriceListBtnList> = ({
    activeSlide,
    changeActiveSlide,
}) => {
    const renderBtn = ServicePriceListBtn.map(({ id, name }) => {
        const isActive = activeSlide === id;
        return (
            <Button
                className={isActive ? "" : "border-transparent"}
                size="small"
                color={isActive ? "white" : "gray"}
                isHover={!isActive}
                isDisabled={isActive}
                key={id}
                onClick={() => changeActiveSlide(id)}
            >
                {name}
            </Button>
        );
    });
    return (
        <div className="flex justify-center gap-5 flex-wrap  mt-5 md:mt-10">
            {renderBtn}
        </div>
    );
};

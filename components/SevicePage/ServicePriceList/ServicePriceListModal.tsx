"use client";
import { FC } from "react";
import { ServicePriceListBtnNameType } from "./ServicePriceListTypes";

interface IServicePriceListModalProps {
    type: ServicePriceListBtnNameType;
    onOpenModal: () => void;
}

export const ServicePriceListModal: FC<IServicePriceListModalProps> = ({
    onOpenModal,
    type,
}) => {
    return <div onClick={onOpenModal}>Hello</div>;
};

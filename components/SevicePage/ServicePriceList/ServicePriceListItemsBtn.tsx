"use client";

import { Button, ModalWrapperCenter } from "@/components";
import { FC } from "react";
import { ServicePriceListBtnNameType } from "./ServicePriceListTypes";
import { ServicePriceListModal } from "./ServicePriceListModal";
import useOpenModal from "@/hooks/useOpenModal";

export interface IServicePriceListItemsBtnProps {
    type: ServicePriceListBtnNameType;
}

export const ServicePriceListItemsBtn: FC<IServicePriceListItemsBtnProps> = ({
    type,
}) => {
    const { onOpenModal, openModal } = useOpenModal();

    switch (type) {
        case "hidro":
            return (
                <>
                    <Button color="lavander" size="small" onClick={onOpenModal}>
                        Заказать гидроизоляцию
                    </Button>
                    <ModalWrapperCenter openModal={openModal}>
                        <ServicePriceListModal
                            onOpenModal={onOpenModal}
                            type="hidro"
                        />
                    </ModalWrapperCenter>
                </>
            );
        case "setting":
            return (
                <Button color="lavander" size="small">
                    Заказать настройку
                </Button>
            );
        case "hidroAndSetting":
            return (
                <Button color="lavander" size="small">
                    Заказать настройку и гидороизоляцию
                </Button>
            );

        default:
            return (
                <Button color="lavander" size="small">
                    Заказать гидроизоляцию
                </Button>
            );
    }
};

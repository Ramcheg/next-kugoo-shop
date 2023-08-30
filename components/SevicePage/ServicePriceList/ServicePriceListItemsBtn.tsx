"use client";

import { Button, ModalWrapperCenter } from "@/components";
import { FC } from "react";
import {
    IServicePriceListItem,
    ServicePriceListBtnNameType,
} from "./ServicePriceListTypes";
import { ServicePriceListModal } from "./ServicePriceListModal";
import useOpenModal from "@/hooks/useOpenModal";

export interface IServicePriceListItemsBtnProps {
    type: ServicePriceListBtnNameType;
    ArrListItems: IServicePriceListItem[];
}

export const ServicePriceListItemsBtn: FC<IServicePriceListItemsBtnProps> = ({
    type,
    ArrListItems,
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
                            ArrListItems={ArrListItems}
                            onOpenModal={onOpenModal}
                            type="hidro"
                        />
                    </ModalWrapperCenter>
                </>
            );
        case "setting":
            return (
                <>
                    <Button color="lavander" size="small" onClick={onOpenModal}>
                        Заказать настройку
                    </Button>
                    <ModalWrapperCenter openModal={openModal}>
                        <ServicePriceListModal
                            ArrListItems={ArrListItems}
                            onOpenModal={onOpenModal}
                            type="setting"
                        />
                    </ModalWrapperCenter>
                </>
            );
        case "hidroAndSetting":
            return (
                <>
                    <Button color="lavander" size="small" onClick={onOpenModal}>
                        Заказать настройку и гидороизоляцию
                    </Button>
                    <ModalWrapperCenter openModal={openModal}>
                        <ServicePriceListModal
                            ArrListItems={ArrListItems}
                            onOpenModal={onOpenModal}
                            type="hidroAndSetting"
                        />
                    </ModalWrapperCenter>
                </>
            );

        default:
            return (
                <>
                    <Button color="lavander" size="small" onClick={onOpenModal}>
                        Заказать гидроизоляцию
                    </Button>
                    <ModalWrapperCenter openModal={openModal}>
                        <ServicePriceListModal
                            ArrListItems={ArrListItems}
                            onOpenModal={onOpenModal}
                            type="hidro"
                        />
                    </ModalWrapperCenter>
                </>
            );
    }
};

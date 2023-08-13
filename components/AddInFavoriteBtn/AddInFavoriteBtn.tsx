"use client";

import { useEffect, useState } from "react";
import { ModalEventText } from "..";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";

export function AddInFavoriteBtn({
    getLocalStorage,
    isItemInLocalStor,
}: ILocalStorageBtnProps): JSX.Element {
    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        if (openModal) {
            const clearModal = setTimeout(() => {
                setOpenModal(false);
            }, 3000);
            return () => {
                clearTimeout(clearModal);
            };
        }
    }, [openModal]);

    const onClickBtnEvent = () => {
        getLocalStorage("favorite");
        setOpenModal(true);
    };
    return (
        <>
            <ButtonIcon
                colorIcon="lavander"
                icon="heart"
                withBorder
                onClick={onClickBtnEvent}
                iconFill={isItemInLocalStor}
            />
            {openModal && isItemInLocalStor && <ModalEventText />}
        </>
    );
}

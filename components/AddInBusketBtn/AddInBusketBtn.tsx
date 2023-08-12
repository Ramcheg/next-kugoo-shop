"use client";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";

export function AddInBusketBtn({
    isItemInLocalStor,
    getLocalStorage,
}: ILocalStorageBtnProps): JSX.Element {
    return (
        <ButtonIcon
            onClick={() => getLocalStorage("basket")}
            iconFill={isItemInLocalStor}
            colorIcon="lavander"
            icon="shopping"
            withBorder
        />
    );
}

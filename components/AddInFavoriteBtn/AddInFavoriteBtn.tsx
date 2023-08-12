"use clent";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";

export function AddInFavoriteBtn({
    getLocalStorage,
    isItemInLocalStor,
}: ILocalStorageBtnProps): JSX.Element {
    return (
        <ButtonIcon
            colorIcon="lavander"
            icon="heart"
            withBorder
            onClick={() => getLocalStorage("favorite")}
            iconFill={isItemInLocalStor}
        />
    );
}

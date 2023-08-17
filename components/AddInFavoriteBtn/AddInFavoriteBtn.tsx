"use client";

import Link from "next/link";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";

import { useSnackbar } from "notistack";

export function AddInFavoriteBtn({
    getLocalStorage,
    isItemInLocalStor,
}: ILocalStorageBtnProps): JSX.Element {
    const { enqueueSnackbar } = useSnackbar();

    const action = () => (
        <>
            <Link
                className="text-lg hover:text-gray-editible font-semibold"
                href={"/favorite"}
            >
                Перейти в избранное
            </Link>
        </>
    );

    const onClickBtnEvent = () => {
        getLocalStorage("favorite");
        if (!isItemInLocalStor) {
            enqueueSnackbar("Товар добавлен в список избранного!", {
                variant: "info",
                className: "flex flex-col",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                action,
            });
        }
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
        </>
    );
}

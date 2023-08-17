"use client";

import { useSnackbar } from "notistack";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";
import Link from "next/link";

export function AddInBusketBtn({
    isItemInLocalStor,
    getLocalStorage,
}: ILocalStorageBtnProps): JSX.Element {
    const { enqueueSnackbar } = useSnackbar();

    const action = () => (
        <>
            <Link
                className="text-lg hover:text-gray-editible font-semibold mr-10"
                href={"/basket"}
            >
                Перейти в корзину
            </Link>
        </>
    );

    const onClickBtnEvent = () => {
        getLocalStorage("basket");
        if (!isItemInLocalStor) {
            enqueueSnackbar("Товар добавлен в корзину", {
                variant: "info",
                className: "flex flex-col",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                action,
            });
        }
    };

    return (
        <ButtonIcon
            onClick={onClickBtnEvent}
            iconFill={isItemInLocalStor}
            colorIcon="lavander"
            icon="shopping"
            withBorder
        />
    );
}

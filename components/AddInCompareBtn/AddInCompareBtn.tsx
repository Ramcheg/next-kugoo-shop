"use client";

import classNames from "classnames";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { IAddInCompareProps } from "./AddInCompareTypes";
import { useSnackbar } from "notistack";
import Link from "next/link";

export function AddInCompareBtn({
    className,
    getLocalStorage,
    isItemInLocalStor,
}: IAddInCompareProps): JSX.Element {
    const { enqueueSnackbar } = useSnackbar();

    const action = () => (
        <>
            <Link
                className="text-lg hover:text-gray-editible font-semibold"
                href={"/compare"}
            >
                Перейти в сравнение
            </Link>
        </>
    );

    const onClickBtnEvent = () => {
        getLocalStorage("compare");
        if (!isItemInLocalStor) {
            enqueueSnackbar("Товар добавлен в список сравнения!", {
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
        <ButtonIcon
            className={classNames(className, {
                ["bg-white/70"]: isItemInLocalStor,
                ["bg-white/20"]: !isItemInLocalStor,
            })}
            colorIcon="white"
            icon="compare"
            onClick={onClickBtnEvent}
        />
    );
}

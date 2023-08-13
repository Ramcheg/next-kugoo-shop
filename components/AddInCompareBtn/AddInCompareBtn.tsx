"use client";

import classNames from "classnames";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { IAddInCompareProps } from "./AddInCompareTypes";

export function AddInCompareBtn({
    className,
    getLocalStorage,
    isItemInLocalStor,
}: IAddInCompareProps): JSX.Element {
    return (
        <ButtonIcon
            className={classNames(className, {
                ["bg-white/70"]: isItemInLocalStor,
                ["bg-white/20"]: !isItemInLocalStor,
            })}
            colorIcon="white"
            icon="compare"
            onClick={() => getLocalStorage("compare")}
        />
    );
}

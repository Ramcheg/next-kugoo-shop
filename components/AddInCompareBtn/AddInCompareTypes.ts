import { ComponentProps } from "react";
import { ILocalStorageBtnProps } from "../ProductCard/ProductCardTypes";

export interface IAddInCompareProps
    extends ComponentProps<"button">,
        ILocalStorageBtnProps {}

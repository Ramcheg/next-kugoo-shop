import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type iconType = "heart" | "compare" | "shopping";
type colorIconType = "black" | "lavander" | "white";

export interface IButtonIcon
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children?: ReactNode;
    icon: iconType;
    colorIcon: colorIconType;
    withBorder?: boolean;
    isblur?: boolean;
    iconFill?: boolean;
    animateHover?: boolean;
    bandage?: number;
}
export interface IIconArr {
    name: iconType;
    element: JSX.Element;
}

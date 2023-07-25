import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


type typeIconType = "circle" | "default";
type iconType = "heart" | "compare" | "viber" | "whatsapp" | "telegram" | "shopping";
type sizeType = "small" | "normal" | "square" | "big";
type colorIconType = "black" | "lavander" | "white" | "";
type bgColorType = "transparent";


export interface IButtonIcon extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    typeIcon: typeIconType;
    icon: iconType;
    size: sizeType;
    colorIcon: colorIconType;
    bgColor: bgColorType;
    withBorder: boolean;
    isblur: boolean;
    iconFill: boolean

}

export interface Idef extends Partial<IButtonIcon> {}

export interface IIconArr {
    name: iconType;
    element: JSX.Element
}
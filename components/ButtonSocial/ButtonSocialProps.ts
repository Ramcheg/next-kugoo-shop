import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type iconType = "phone" | "whatsapp" | "telegram";

export interface IButtonSocialIcon
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    typeIcon: iconType;
}

export interface IIconArr {
    name: iconType;
    element: JSX.Element;
}

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type colorType = "white" | "orange" | "lavander" | "gray";
type sizeType = "small" | "middle" | "icon" | "dropDown" | "menu";
type iconType = "none" | "menu" | "dropDown";
export interface IButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    color: colorType;
    size: sizeType;
    icon?: iconType;
    typeButton?: "button" | "submit" | "reset";
    onLavaner?: boolean;
    borderOn?: boolean;
}

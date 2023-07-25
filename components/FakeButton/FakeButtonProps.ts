import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IFakeButton
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    bgColor: "white" | "green" | "red";
    textColor: "lavander" | "white";
    isUpperCase: boolean;
}

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IH
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {
    level: 1 | 2 | 3 | 4;
    children: ReactNode;
    color?: "white" | "black";
    transform?: "normal" | "uppercase";
}

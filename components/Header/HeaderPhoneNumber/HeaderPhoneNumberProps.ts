import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPhoneNumber
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    widthIcon: boolean

}

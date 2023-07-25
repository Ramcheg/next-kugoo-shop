import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputType = "email" | "text" | "tel";

export interface IInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    inputType: InputType;
    placeholderInput: string;
    isRequired?: boolean;
    nameInput: string;
}

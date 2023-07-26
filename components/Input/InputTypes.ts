import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputType = "email" | "text" | "tel" | "checkbox";

export interface IInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    inputType: InputType;
    placeholderInput?: string;
    isRequired?: boolean;
    nameInput: string;
}

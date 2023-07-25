import { IInputProps } from "./InputTypes";

export function Input({
    inputType,
    isRequired = false,
    nameInput,
    placeholderInput,
    ...props
}: IInputProps): JSX.Element {
    return (
        <input
            name={nameInput}
            type={inputType}
            placeholder={placeholderInput}
            required={isRequired}
            className="px-6 rounded flex-1 py-2 lg:py-4 border border-solid border-gray-editible  text-gray-dark 2xl:text-lg  placeholder:gray-dark placeholder:2xl:text-lg"
            {...props}
        />
    );
}

import classNames from "classnames";
import { IInputProps } from "./InputTypes";

export function Input({
    inputType,
    isRequired = false,
    nameInput,
    placeholderInput,
    colorChackbox = "default",
    className,
    ...props
}: IInputProps): JSX.Element {
    const standartInput =
        "px-6 rounded flex-1 py-2 lg:py-4 border border-solid border-gray-editible  text-gray-dark 2xl:text-lg  placeholder:gray-dark placeholder:2xl:text-lg";
    return (
        <input
            name={nameInput}
            type={inputType}
            placeholder={placeholderInput}
            required={isRequired}
            className={classNames(className, {
                [standartInput]: inputType !== "checkbox",
                ["ml-4 after:invalid:border-red-500 after:transition-all after:delay-100 appearance-none checked:after:content-['✔'] after:text-xs after:pl-[2px] relative  after:content-[''] after:w-4  after:h-4 after:border after:rounded-sm after:border-solid after:-top-2 after:-left-4 after:absolute"]:
                    inputType === "checkbox",
                [" after:text-lavander  after:border-black/50  hover:after:border-lavander after:shadow-lavander disabled:after:bg-slate-300 disabled:after:hover:border-black/50"]:
                    inputType === "checkbox" && colorChackbox === "default",
                ["after:text-lavander  after:bg-white disabled:after:bg-slate-300 disabled:after:hover:border-black/50"]:
                    inputType === "checkbox" && colorChackbox === "white",
            })}
            {...props}
        />
    );
}

import { IFakeButton } from "./FakeButtonProps";
import cn from "classnames";

export function FakeButton({
    bgColor,
    children,
    isUpperCase,
    textColor,
    className,
    ...props
}: IFakeButton): JSX.Element {
    return (
        <div
            className={cn(
                "py-1 px-3 rounded-md text-xs 2xl:text-base font-medium inline-block",
                className,
                {
                    ["bg-white"]: bgColor === "white",
                    ["bg-[#EE685F]"]: bgColor === "red",
                    ["bg-[#75D14A]"]: bgColor === "green",

                    ["text-lavander"]: textColor === "lavander",
                    ["text-white"]: textColor === "white",

                    ["uppercase"]: isUpperCase,
                }
            )}
            {...props}
        >
            {children}
        </div>
    );
}

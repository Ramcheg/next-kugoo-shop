import { IButtonProps } from "./ButtonProps";
import cn from "classnames";
import DropIcon from "@/public/DropArrow.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import "./ButtonModule.scss";

export function Button({
    children,
    size,
    color,
    className,
    icon,
    borderHoverOn,
    typeButton = "button",
    onLavaner,
    withBorder,
    isHover = true,
    isDisabled = false,
    ...props
}: IButtonProps): JSX.Element {
    return (
        <>
            <button
                disabled={isDisabled}
                type={typeButton}
                className={cn(
                    "transition-all duration-300 text-base 2xl:text-xl  border   relative cursor-pointer",
                    className,
                    {
                        [" text-white bg-lavander "]: color === "lavander",
                        ["text-gray-dark bg-gray-light  "]: color === "gray",
                        ["text-white bg-orange-editible  "]: color === "orange",
                        ["  bg-white border-lavander  "]: color === "white",

                        [" hover:bg-lavander-light"]:
                            color === "lavander" && isHover,

                        [" hover:bg-white hover:border hover:border-lavander hover:text-lavander"]:
                            color === "gray" && isHover,
                        [" hover:bg-orange-light"]:
                            color === "orange" && isHover,
                        [" hover:text-white   hover:bg-lavander-light "]:
                            color === "white" && isHover,

                        [" btn flex flex-row-reverse items-center "]:
                            icon === "menu",
                        ["flex flex-row items-center justify-center gap-1"]:
                            icon === "dropDown",

                        ["hover:border hover:border-white"]: onLavaner,

                        ["text-base px-[1.55rem] 2xl:px-[2rem] py-[0.93rem] 2xl:py-[1.2rem] rounded"]:
                            size === "middle",
                        ["text-base p-[0.69rem] 2xl:p-[0.74rem] rounded-tr-md rounded-br-md"]:
                            size === "icon",
                        ["text-base px-[1.12rem] 2xl:px-[2rem] py-[0.5rem] 2xl:py-[0.65rem] rounded"]:
                            size === "menu",
                        ["text-[0.87rem] 2xl:text-base  py-[0.325rem] 2xl:py-[0,42rem] px-[0.87rem] 2xl:px-[1.1rem] rounded"]:
                            size === "dropDown",
                        ["text-sm 2xl:text-base px-[1.24rem] 2xl:px-[1.6rem] py-[0.61rem] 2xl:py-[0.8rem] rounded"]:
                            size === "small",

                        ["border-transparent hover:border hover:border-solid hover:border-white"]:
                            borderHoverOn === "white",
                        ["border-transparent"]: borderHoverOn === "transparent",

                        ["border border-solid border-lavander"]: withBorder,
                    }
                )}
                {...props}
            >
                {children}
                {icon === "menu" ? <BurgerMenu /> : ""}
                {icon === "dropDown" ? (
                    <DropIcon className=" h-[6px] 2xl:h-[8px] w-[6px] 2xl:w-[8px]" />
                ) : (
                    ""
                )}
            </button>
        </>
    );
}

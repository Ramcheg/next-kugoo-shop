import ArrowBtnSVG from "@/public/ArrowBtn.svg";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function ArrowBtnCircle({
    className,
    ...props
}: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>): JSX.Element {
    return (
        <div
            className={classNames(
                "rounded-full w-12 md:w-16 h-12 md:h-16 bg-lavander flex justify-center items-center cursor-pointer hover:bg-lavander-light transition-all delay-100",
                className
            )}
            {...props}
        >
            <ArrowBtnSVG />
        </div>
    );
}

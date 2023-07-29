import { IH } from "./HProps";
import cn from "classnames";

export function H({
    level,
    color = "black",
    children,
    className,
    transform = "uppercase",
    ...props
}: IH): JSX.Element {
    const clazzFor1and2 = cn(
        "text-base lg:text-4xl/[4rem] 2xl:text-5xl/[4rem] font-semibold uppercase",
        className,
        {
            ["text-black"]: color === "black",
            ["text-white"]: color === "white",
            ["uppercase"]: transform === "uppercase",
        }
    );
    switch (level) {
        case 1:
            return (
                <h1 className={clazzFor1and2} {...props}>
                    {children}
                </h1>
            );
        case 2:
            return (
                <h2 className={clazzFor1and2} {...props}>
                    {children}
                </h2>
            );
        case 3:
            return (
                <h3
                    className={cn(
                        "text-sm lg:text-2xl 2xl:text-3xl font-semibold",
                        className,
                        {
                            ["text-black"]: color === "black",
                            ["text-white"]: color === "white",
                            ["uppercase"]: transform === "uppercase",
                        }
                    )}
                    {...props}
                >
                    {children}
                </h3>
            );
        case 4:
            return (
                <h4
                    className={cn(
                        "text-lg/6 md:text-xl/6 font-semibold",
                        className,
                        {
                            ["text-black"]: color === "black",
                            ["text-white"]: color === "white",
                            ["uppercase"]: transform === "uppercase",
                        }
                    )}
                    {...props}
                >
                    {children}
                </h4>
            );
        default:
            throw new Error("Head<h> lvl is not definded");
    }
}

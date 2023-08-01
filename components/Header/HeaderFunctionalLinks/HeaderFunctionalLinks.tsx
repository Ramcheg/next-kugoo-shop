import { ISocialIconGroupProps } from "./HeaderFunctionalLinksProps";
import Link from "next/link";
import cn from "classnames";
import { CallUsBtn } from "@/components/CallUsBtn/CallUsBtn";

export function HeaderFunctionalLinks({
    className,
    ...props
}: ISocialIconGroupProps): JSX.Element {
    return (
        <nav
            className={cn(
                "text-gray-dark text-xs  2xl:text-base font-normal",
                className
            )}
            {...props}
        >
            <Link
                className="transition-colors delay-100 hover:text-lavander"
                href="/service"
            >
                Сервис
            </Link>
            <Link
                className="transition-colors delay-100 hover:text-lavander"
                href="/cooperation"
            >
                Сотрудничество
            </Link>
            <CallUsBtn />
        </nav>
    );
}

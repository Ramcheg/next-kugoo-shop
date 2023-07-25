import { ISocialIconGroupProps } from "./HeaderFunctionalLinksProps";
import Link from "next/link";
import cn from "classnames";

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
                href="#"
            >
                Сервис
            </Link>
            <Link
                className="transition-colors delay-100 hover:text-lavander"
                href="#"
            >
                Сотрудничество
            </Link>
            <Link
                className="transition-colors delay-100 hover:text-lavander"
                href="#"
            >
                Заказать звонок
            </Link>
        </nav>
    );
}

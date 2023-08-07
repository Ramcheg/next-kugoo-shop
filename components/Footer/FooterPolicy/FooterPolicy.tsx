import Link from "next/link";

export function FooterPolicy(): JSX.Element {
    return (
        <div className="flex gap-2 md:gap-11 flex-col md:flex-row  text-center md:text-start">
            <Link
                href="/cooperation"
                className="text-gray-dark text-xs 2xl:text-sm hover:text-lavander-light transition-all duration-100 "
            >
                Реквизиты
            </Link>
            <Link
                href="/policy"
                className="text-gray-dark text-xs 2xl:text-sm hover:text-lavander-light transition-all duration-100 "
            >
                Политика конфиденциальности
            </Link>
        </div>
    );
}

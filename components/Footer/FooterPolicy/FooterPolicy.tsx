export function FooterPolicy(): JSX.Element {
    return (
        <div className="flex gap-2 md:gap-11 flex-col md:flex-row  text-center md:text-start">
            <a
                href="#"
                className="text-gray-dark text-xs 2xl:text-sm hover:text-lavander-light transition-all duration-100 "
            >
                Реквизиты
            </a>
            <a
                href="#"
                className="text-gray-dark text-xs 2xl:text-sm hover:text-lavander-light transition-all duration-100 "
            >
                Политика конфиденциальности
            </a>
        </div>
    );
}

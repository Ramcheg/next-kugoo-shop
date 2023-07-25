import { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

import AppHeader from "@/layouts/AppHeader/AppHeader";
import AppFooter from "@/layouts/AppFooter/AppFooter";
import { Providers } from "@/components/Providers/Providers";

const inter = Jost({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["cyrillic"],
});

export const metadata: Metadata = {
    title: "Электросамокаты Kugoo Kirin",
    description:
        "Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Providers>
                    <div className="grid grid-rows-[7.73rem_1fr_1fr]  md:grid-rows-[11.5rem_1fr_1fr] lg:grid-rows-[12rem_1fr_1fr]  2xl:grid-rows-[13.5rem_1fr_1fr]  ">
                        <AppHeader />
                        <main>{children}</main>
                        <AppFooter />
                    </div>
                </Providers>
            </body>
        </html>
    );
}

{
    /* <div className="grid grid-rows-[7.73rem_1fr_32rem]  md:grid-rows-[11.5rem_1fr_52rem] lg:grid-rows-[11.5rem_1fr_46rem]  2xl:grid-rows-[13.5rem_1fr_40.5rem] */
}

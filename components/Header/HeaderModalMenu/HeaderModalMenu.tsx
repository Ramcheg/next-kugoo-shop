import Link from "next/link";
import "./HeaderModalMenuStyle.scss";

import ElectroScooterSVG from "@/public/headerMenu/ElectrikScooter.svg";

export function HeaderModalMenu(): JSX.Element {
    return (
        <nav className="bg-white border border-black  w-[15rem] min-h-[15rem] absolute left-[1.5rem] 2xl:left-[6.5rem] top-14 z-40 ">
            <div className="bg-gray-light rounded-lg w-[14rem] h-[14rem] absolute left-2 top-1 -z-10"></div>
            <ul className="z-40 my-[2rem] mx-[1.25rem] flex flex-col gap-[0.45rem]">
                <li className="del">
                    <h3 className=" 2xl:text-lg text-base font-medium ">
                        <Link
                            href=""
                            className="transition-all delay-100 hover:text-lavander electroScooter"
                        >
                            <div className="flex ml-1 items-center  gap-2 ">
                                <ElectroScooterSVG />
                                Электросамокаты
                            </div>
                        </Link>
                    </h3>
                    <div className="do  flex absolute left-[14.5rem] top-0 z-40 bg-white  gap-[3.8rem] flex-wrap">
                        <div className="is flex-[40%] flex flex-col gap-[0.9rem]">
                            <h4 className="text-base 2xl:text-lg font-medium">
                                Особенности
                            </h4>
                            <ul className="flex flex-col gap-[0.63rem] text-gray-dark">
                                <li>Внедорожный</li>
                                <li>Городской</li>
                                <li>Зимний</li>
                                <li>С сиденьем</li>
                                <li>Без сиденья</li>
                            </ul>
                        </div>
                        <div className="is flex-[40%] flex flex-col gap-[0.9rem]">
                            <h4 className="text-base 2xl:text-lg font-medium">
                                Для кого
                            </h4>
                            <ul className="flex flex-col gap-[0.63rem] text-gray-dark">
                                <li>Для детей и подростков</li>
                                <li>Для взрослых</li>
                                <li>Для пенсионеров</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="2xl:text-lg text-base font-medium ">
                    <Link
                        href=""
                        className="transition-all delay-100 hover:text-lavander electroScooter"
                    >
                        <div className="flex items-center gap-2 ml-1">
                            <ElectroScooterSVG />
                            Электроскутеры
                        </div>
                    </Link>
                </li>
                <li className="2xl:text-lg text-base font-medium ">
                    <Link
                        href=""
                        className="transition-all delay-100 hover:text-lavander electroScooter"
                    >
                        <div className="flex items-center gap-2 ml-1">
                            <ElectroScooterSVG />
                            Электровелосипеды
                        </div>
                    </Link>
                </li>
                <li className="2xl:text-lg text-base font-medium ">
                    <Link
                        href=""
                        className="transition-all delay-100 hover:text-lavander electroScooter"
                    >
                        <div className="flex items-center gap-2 ml-1">
                            <ElectroScooterSVG />
                            Робот-пылесосы
                        </div>
                    </Link>
                </li>
                <li className="2xl:text-lg text-base font-medium ">
                    <Link
                        href=""
                        className="transition-all delay-100 hover:text-lavander electroScooter"
                    >
                        <div className="flex items-center gap-2 ml-1">
                            <ElectroScooterSVG />
                            Весы
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

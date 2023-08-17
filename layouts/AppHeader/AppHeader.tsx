import { SocialIconGroup } from "@/components";

import {
    HeaderFunctionalLinks,
    HeaderPhoneNumber,
    HeaderSearch,
    MobHeader,
    HeaderMenu,
    HeaderBuscketBtn,
    HeaderFavoriteBtn,
    HeaderCompareBtn,
} from "@/components/Header";
import { HeaderOpenMenuBtn } from "@/components/Header/HeaderOpenMenuBtn/HeaderOpenMenuBtn";

import LogoIcon from "@/public/Logo.svg";
import Link from "next/link";

export default function AppHeader(): JSX.Element {
    return (
        <header className="relative">
            <div className="hidden md:block ">
                <div className="container mx-auto flex justify-between items-center my-[0.69rem] 2xl:my-[0.819rem] flex-wrap flex-1">
                    <div className="flex gap-7 items-center ">
                        <HeaderFunctionalLinks className="flex gap-7 " />
                        <SocialIconGroup />
                    </div>
                    <HeaderPhoneNumber widthIcon />
                </div>
                <hr className="border-[#ECF3FF]" />
                <div className="container mx-auto mt-[1.69rem] mb-[2.12rem] ">
                    <div className="flex relative items-center justify-between gap-[1.5rem]">
                        <Link href="/">
                            <LogoIcon className="w-[80px] lg:w-[7.25rem] 2xl:w-[9.4rem] h-[2.6rem] 2xl:h-[3.38rem]" />
                        </Link>
                        <HeaderOpenMenuBtn />
                        <HeaderSearch />
                        <div className="flex gap-[0.5rem] items-center relative">
                            <HeaderCompareBtn />
                            <HeaderFavoriteBtn />
                            <HeaderBuscketBtn />
                        </div>
                    </div>
                </div>
                <div className=" bg-gray-light">
                    <HeaderMenu />
                </div>
            </div>
            <MobHeader />
        </header>
    );
}

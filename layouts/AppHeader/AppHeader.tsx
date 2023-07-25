import { SocialIconGroup, ButtonIcon, Button } from "@/components";

import {
    HeaderFunctionalLinks,
    HeaderPhoneNumber,
    HeaderSearch,
    MobHeader,
    HeaderBasketModal,
    HeaderMenu,
    HeaderModalMenu,
} from "@/components/Header";

import LogoIcon from "@/public/Logo.svg";

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
                        <a href="#" target="_blank">
                            <LogoIcon className="w-[80px] lg:w-[7.25rem] 2xl:w-[9.4rem] h-[2.6rem] 2xl:h-[3.38rem]" />
                        </a>
                        <Button
                            className="gap-3"
                            color="lavander"
                            size="menu"
                            icon="menu"
                        >
                            Каталог
                        </Button>
                        <HeaderSearch />
                        <div className="flex gap-[0.5rem] items-center relative">
                            <ButtonIcon icon="compare" colorIcon="black" />
                            <ButtonIcon icon="heart" colorIcon="black" />
                            <ButtonIcon
                                icon="shopping"
                                iconFill
                                colorIcon="lavander"
                            >
                                Корзина
                            </ButtonIcon>
                            {/* <HeaderBasketModal /> */}
                        </div>
                        {/* <HeaderModalMenu /> */}
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

import { BurgerMenu } from "@/components";
import LogoItem from "@/public/Logo.svg";
import PhoneIcon from "@/public/Phone.svg";

import { HeaderMenu, HeaderSearch } from "..";

export function MobHeader(): JSX.Element {
    return (
        <div className="block md:hidden px-[.94rem] mt-3">
            <div className="flex justify-between">
                <LogoItem className="w-[4.3rem] h-[.875rem] my-3 mx-2" />
                <div className="flex gap-[.94rem] items-center">
                    <a className=" my-3 mx-2" href="tell:+380953507692">
                        <PhoneIcon />
                    </a>

                    <BurgerMenu className="burgerMenu-lavander my-3 mx-2" />
                </div>
            </div>
            <div className="">
                <HeaderSearch isMobSearch />
            </div>
            <div className="w-full hidden">
                <HeaderMenu />
            </div>
        </div>
    );
}

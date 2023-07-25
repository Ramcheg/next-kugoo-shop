import { H } from "@/components";
import {
    FooterApi,
    FooterFormDescribe,
    FooterInformation,
    FooterMobNavigation,
    FooterNavCatalor,
    FooterNavCustomer,
    FooterPolicy,
    FooterSocial,
} from "@/components/Footer";

import { FooterPay } from "@/components/Footer/FooterPay/FooterPay";
import { FooterChat } from "@/components/Footer/FooterChat/FooterChat";

export default function AppFooter(): JSX.Element {
    return (
        <footer className="bg-gray-editible relative pb-16 sm:pb-0">
            <div className="bg-lavander">
                <div className="container mx-auto py-3 lg:py-[1.44rem] px-4 lg:px-0 flex gap-5 lg:gap-24 lg:items-center items-stretch justify-between flex-col lg:flex-row">
                    <H
                        level={3}
                        color="white"
                        className="block w-full px-4 lg:px-0 lg:w-[45%] 2xl:w-[47%]"
                    >
                        Оставьте свою почту и станьте первым, кто получит скидку
                        на новые самокаты
                    </H>
                    <FooterFormDescribe />
                </div>
            </div>
            <div className="container mx-auto hidden md:flex  gap-10 lg:gap-20 xl:gap-32 my-12  ">
                <FooterNavCatalor />
                <FooterNavCustomer />
                <FooterInformation />
            </div>
            <hr className="container mx-auto border-gray-dark/20" />
            <div className="container mx-auto">
                <div className="flex lg:justify-between items-center flex-wrap justify-center">
                    <FooterApi />
                    <FooterSocial />
                </div>
            </div>
            <hr className="container mx-auto border-gray-dark/20" />
            <div className="container mx-auto flex justify-center md:justify-between my-3 md:my-7 items-center">
                <FooterPolicy />
                <div className="hidden md:flex items-center gap-9">
                    <FooterPay />
                    <FooterChat />
                </div>
            </div>
            <div className="container mx-auto block md:hidden fixed bottom-0 z-50">
                <FooterMobNavigation />
            </div>
        </footer>
    );
}

import { FC } from "react";

import { H } from "@/components";
import "./ServiceBannerStyle.scss";
import Image from "next/image";
import RoomIcon from "@mui/icons-material/Room";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SettingsIcon from "@mui/icons-material/Settings";
import womanWithElecticImg from "@/public/ServicePage/woman-with-electric.png";

import "./ServiceBannerStyle.scss";
import { ServiceBannerBtn } from "./ServeceBannerBtn";

export const ServiceBanner: FC = () => {
    return (
        <div className="containerBig max-h-[26rem] 2xl:max-h-[28rem] serviceGradientPage mt-8 rounded-lg overflow-hidden">
            <section className="container mx-auto relative">
                <div className="py-6 md:py-11 relative z-10 w-10/12 2xl:w-8/12">
                    <H color="white" level={1}>
                        Ремонт и обслуживание
                        <br /> товаров Kugoo Kirin
                    </H>
                    <div className="text-sm md:text-lg 2xl:text-xl text-white ">
                        в фирменных сервисых центрах
                    </div>
                    <div className="flex items-center justify-start flex-wrap  mt-5 md:mt-10 gap-3 md:gap-9">
                        <div className="flex items-center gap-8 w-[15rem] 2xl:w-[18rem] text-white">
                            <div className="bg-white/25 p-3 rounded-md">
                                <RoomIcon />
                            </div>
                            <div className="text-sm 2xl:text-base  ">
                                Сервисные центры в Киеве, Днепре и Одессе
                            </div>
                        </div>
                        <div className="flex  items-center gap-8  w-[15rem] 2xl:w-[18rem] text-white">
                            <div className="bg-white/25 p-3 rounded-md  ">
                                <VerifiedUserIcon />
                            </div>
                            <div className="text-sm 2xl:text-base ">
                                Гарантия 14 дней на ремонт
                            </div>
                        </div>
                        <div className="flex items-center gap-8  w-[15rem] 2xl:w-[18rem] text-white">
                            <div className="bg-white/25 p-3 rounded-md">
                                <SettingsIcon />
                            </div>
                            <div className="text-sm 2xl:text-base">
                                Всегда в наличии оригинальные запчасти от
                                производителя
                            </div>
                        </div>
                    </div>
                    <ServiceBannerBtn />
                </div>
                <div className="absolute -right-4 bottom-0">
                    <Image src={womanWithElecticImg} alt="woman" />
                </div>
            </section>
        </div>
    );
};

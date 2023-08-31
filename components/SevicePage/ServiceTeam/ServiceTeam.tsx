import { H, ShopTeam } from "@/components";
import Image from "next/image";
import { FC } from "react";

import scooterMini from "@/public/ServicePage/scooterMini.png";
import manWithMacBook from "@/public/ServicePage/manWithMacBook.png";
import { serviceTeamArr } from "@/components/ShopTeam/teamArr";
export const ServiceTeam: FC = () => {
    return (
        <div>
            <H className="text-center" level={2}>
                Команда сервисного центра
            </H>
            <div className="flex justify-center gap-5  flex-wrap my-8">
                <div className="w-[19rem] md:w-[32rem] 2xl:w-[36rem] flex justify-between items-center gap-2 md:gap-0 py-5 px-4 rounded-lg border border-solid border-gray-light">
                    <div className="md:w-2/12">
                        <Image src={scooterMini} alt="scooter Mini" />
                    </div>
                    <div className="w-10/12 text-xs md:text-sm">
                        Специалисты сервисного центра подготавливают самокаты к
                        отправке вам, проводят техническое обслуживание,
                        тюнингуют и при необходимости ремонтируют их
                    </div>
                </div>
                <div className="w-[19rem] md:w-[32rem] 2xl:w-[36rem] flex justify-between items-center py-5 px-4 gap-2 md:gap-0 rounded-lg border border-solid border-gray-light">
                    <div className="w-2/12">
                        <Image src={manWithMacBook} alt="Man with MacBook" />
                    </div>
                    <div className="w-10/12 text-xs md:text-sm">
                        Консультант сервисного центра сопровождает вас на
                        протяжении всего времени эксплуатации и помогает решить
                        возникающие вопросы.
                    </div>
                </div>
            </div>
            <ShopTeam TeamPersonalArr={serviceTeamArr} />
        </div>
    );
};

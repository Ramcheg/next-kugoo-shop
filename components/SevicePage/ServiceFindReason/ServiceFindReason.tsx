import Image from "next/image";
import { FC } from "react";
import { H } from "@/components/H/H";

import zoomImg from "@/public/ServicePage/zoomScreen.png";
import zoomIcon from "@/public/ServicePage/zoomIcon.png";
import { FakeButton } from "@/components/FakeButton/FakeButton";
import { ServiceFindReasonButton } from "./ServiceFindReasonButton";

export const ServiceFindReason: FC = () => {
    return (
        <div className="bg-[#539DFF] py-7 md:py-16">
            <div className="container mx-auto flex justify-between">
                <div className="relative">
                    <Image src={zoomImg} alt="zoomScreen" />
                    <Image
                        className="absolute -right-3 -top-3"
                        src={zoomIcon}
                        alt="zoomIcon"
                    />
                </div>
                <div className="w-1/2">
                    <FakeButton
                        bgColor="green"
                        textColor="white"
                        isUpperCase={false}
                    >
                        Услуга
                    </FakeButton>
                    <H level={2} color="white" className="mt-6">
                        Определим причину неисправности удаленно или на
                        диагностике!
                    </H>
                    <ServiceFindReasonButton />
                </div>
            </div>
        </div>
    );
};

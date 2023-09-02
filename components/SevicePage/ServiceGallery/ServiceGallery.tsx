import { Gallery, H } from "@/components";
import Image from "next/image";
import { FC } from "react";

import mechanicKeyImg from "@/public/ServicePage/mechanicKey.png";
import {
    serviceGallaryData,
    serviceGallaryMiniData,
} from "@/components/Gallery/GallaryData";

export const ServiceGallery: FC = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between items-center">
                    <div>
                        <H className="text-center sm:text-left" level={2}>
                            Посмотрите
                            <br /> на процесс работы
                        </H>
                    </div>
                    <div className="bg-lavander px-6 py-5  gap-5 items-center rounded-lg hidden sm:flex">
                        <div>
                            <Image
                                alt={"mechanic key image"}
                                src={mechanicKeyImg}
                            />
                        </div>
                        <div className="text-white">
                            <div className="text-gray-editible text-xs">
                                В среднем
                            </div>
                            <div className="text-base md:text-xl font-medium">
                                350 доработок
                            </div>
                            <div className="text-xs">
                                специалисты выполняют за 1 месяц
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerBig">
                <Gallery
                    imgBigData={serviceGallaryData}
                    imgData={serviceGallaryMiniData}
                />
            </div>
        </div>
    );
};

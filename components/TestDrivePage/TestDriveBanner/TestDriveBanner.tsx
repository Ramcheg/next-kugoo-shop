import { Button, H } from "@/components";
import Image from "next/image";
import { FC } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import BoltIcon from "@mui/icons-material/Bolt";
import { TestDriveBannerBtn } from "./TestDriveBannerBtn";
export const TestDriveBanner: FC = () => {
    return (
        <div className=" relative containerBig h-[26rem] 2xl:h-[30rem] bg-testDriveBanner bg-cover bg-right flex items-center rounded-lg overflow-hidden">
            <div className="container mx-auto relative z-20 ">
                <div className="text-white w-full md:w-1/2">
                    <div className="text-xs">
                        <LocationOnIcon /> Восточно-Кругликовская улица, 86{" "}
                        <span className="text-gray-light">
                            Вт - Сб 10:00 - 20:00
                        </span>
                    </div>
                    <H level={1} color="white">
                        Запишитесь на бесплатный тест-драйв электросамокатов
                    </H>
                    <div className="text-lg mt-2">
                        в Киеве без ограничения по времени
                    </div>
                    <div className="flex items-center gap-8 mt-7 flex-wrap">
                        <div className="flex gap-4 w-[14rem] text-white items-start">
                            <div className="p-3 bg-white/25 rounded-lg">
                                <PedalBikeIcon sx={{ fill: "white" }} />
                            </div>
                            <div>Поймете, какая модель вам подходит</div>
                        </div>
                        <div className="flex gap-4 w-[14rem] text-white items-start">
                            <div className="p-3 bg-white/25 rounded-lg">
                                <BoltIcon sx={{ fill: "white" }} />
                            </div>
                            <div>Проверите лучшие самокаты в деле</div>
                        </div>
                    </div>
                    <TestDriveBannerBtn />
                </div>
            </div>
            <div
                style={{
                    background:
                        "linear-gradient(73deg, #6F73EE 17.37%, rgba(111, 115, 238, 0.00) 67.02%)",
                }}
                className="absolute top-0 left-0 bg w-3/4 h-full  z-0"
            ></div>
        </div>
    );
};

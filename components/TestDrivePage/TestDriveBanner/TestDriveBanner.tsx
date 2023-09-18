import { Button, H } from "@/components";
import Image from "next/image";
import { FC } from "react";
// import BgImg from "@/public/testDrivePage/young-woman-riding-electric-scooter.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const TestDriveBanner: FC = () => {
    return (
        <div className=" relative containerBig h-[26rem] 2xl:h-[28rem] bg-testDriveBanner bg-cover bg-right flex items-center">
            <div className="container mx-auto relative z-20 ">
                <div className="text-white w-1/2">
                    <div className="text-xs">
                        <LocationOnIcon /> Восточно-Кругликовская улица, 86{" "}
                        <span className="text-gray-light">
                            Вт - Сб 10:00 - 20:00
                        </span>
                    </div>
                    <H level={1} color="white">
                        Запишитесь на бесплатный тест-драйв электросамокатов
                    </H>
                    <div>в Киеве без ограничения по времени</div>
                    <div>
                        <div>
                            <div>icon</div>
                            <div>Поймете, какая модель вам подходит</div>
                        </div>
                    </div>
                    <Button
                        className="text-lavander"
                        color="white"
                        size="small"
                    >
                        Записаться
                    </Button>
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

// bg-gradient-to-br from-lavander-light from-10% to-white/10 to-75%

import Image from "next/image";
import "./DroneSectionStyle.scss";
import droneImg from "@/public/drone.png";
import { H } from "../H/H";
import { Button } from "../Button/Button";
import { FakeButton } from "../FakeButton/FakeButton";

export function DroneSection(): JSX.Element {
    return (
        <div className="containerBig darkDrone">
            <div className="flex pt-5 md:pt-16">
                <div className="hidden md:block">
                    <Image
                        src={droneImg}
                        alt="drone"
                        width={856}
                        height={421}
                    />
                </div>
                <div className="w-full md:w-2/4 mx-10 md:mx-0 mb-5 md:mb-0">
                    <FakeButton
                        bgColor="red"
                        textColor="white"
                        isUpperCase={false}
                    >
                        Акция
                    </FakeButton>
                    <H color="white" level={2} className="mt-7">
                        Бесплатная доставка электросамокатов по России до 01.09
                    </H>
                    <Button color="white" size="small" className="mt-7">
                        Подробнее
                    </Button>
                </div>
            </div>
        </div>
    );
}

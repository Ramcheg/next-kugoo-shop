import Image from "next/image";
import { H } from "../H/H";
import { ButtonIcon, PayForOneClick } from "..";

import BattarySvg from "@/public/card/battary.svg";
import SpeedometerSvg from "@/public/card/speedometer.svg";
import PowerSvg from "@/public/card/power.svg";
import TimerSvg from "@/public/card/timer.svg";
import { FakeButton } from "../FakeButton/FakeButton";

export function ProductCard(): JSX.Element {
    return (
        <div className="relative transition-all delay-100 overflow-hidden border border-solid rounded-t-xl border-gray-editible ">
            <div className="">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FFront%2Fkuter.jpg?alt=media&token=f5f83638-2d16-4962-a544-c9d57cde6538"
                    alt="skuter"
                    width={221}
                    height={284}
                    className=" 2xl:w-[296px]  mx-auto mt-[1px]  rounded-t-xl"
                />
            </div>
            <div className="flex flex-col items-center mt-3 mx-1 md:mx-4 ">
                <H className="text-center md:text-left" level={4}>
                    Kugoo Kirin M4
                </H>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-4 my-5">
                    <div className="flex gap-2 items-center">
                        <BattarySvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            2000 mAh
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <SpeedometerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            60 км/ч
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <PowerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            1,2 л.с.
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TimerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            5 часов
                        </span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:gap-6 items-center justify-between mb-4">
                    <div>
                        <div className="text-xs 2xl:text-ms text-gray-dark line-through">
                            39 900 ₴
                        </div>
                        <div className="text-xl 2xl:text-2xl font-semibold">
                            29 900 ₴
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <ButtonIcon
                            colorIcon="lavander"
                            icon="shopping"
                            withBorder
                        />
                        <ButtonIcon
                            colorIcon="lavander"
                            icon="heart"
                            withBorder
                        />
                    </div>
                </div>
            </div>
            <PayForOneClick />
            <ButtonIcon
                className="absolute bg-white/20 top-4 right-4"
                colorIcon="white"
                icon="compare"
            />
            <FakeButton
                className="absolute top-6 left-6"
                bgColor="red"
                textColor="white"
                isUpperCase
            >
                хит
            </FakeButton>
        </div>
    );
}

import Image from "next/image";
import { H } from "../H/H";
import { ButtonIcon, PayForOneClick } from "..";

import BattarySvg from "@/public/card/battary.svg";
import SpeedometerSvg from "@/public/card/speedometer.svg";
import PowerSvg from "@/public/card/power.svg";
import TimerSvg from "@/public/card/timer.svg";
import { FakeButton } from "../FakeButton/FakeButton";
import Link from "next/link";
import { IDate } from "@/helpers/getProductsFireType";

export function ProductCard({
    name,
    mainImg,
    price,
    descriptionProduct,
}: IDate): JSX.Element {
    if (!name) {
        return <>Loading</>;
    }
    return (
        <div className="relative transition-all delay-100 overflow-hidden border border-solid rounded-xl border-gray-editible ">
            <div className="">
                <Image
                    src={mainImg}
                    alt="skuter"
                    width={221}
                    height={284}
                    className="md:w-full 2xl:w-[100%]  mx-auto mt-[1px]  rounded-t-xl"
                />
            </div>
            <div className="flex flex-col items-center mt-3 mx-1 md:mx-4 ">
                <Link href="#">
                    <H
                        className="text-center md:text-left hover:text-lavander"
                        level={4}
                    >
                        {name}
                    </H>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-2 md:gap-x-6 gap-y-1 md:gap-y-4 my-5">
                    <div className="flex gap-2 items-center">
                        <BattarySvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {descriptionProduct?.powerBattary}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <SpeedometerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {descriptionProduct.speed}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <PowerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {descriptionProduct.power}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TimerSvg />
                        <span className="text-ms 2xl:text-base text-gray-dark">
                            {descriptionProduct.timeBattary}
                        </span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:gap-6 items-center justify-between mb-4">
                    <div>
                        <div className="text-xs 2xl:text-ms text-gray-dark line-through">
                            39 900 ₴
                        </div>
                        <div className="text-xl 2xl:text-2xl font-semibold">
                            {price}
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

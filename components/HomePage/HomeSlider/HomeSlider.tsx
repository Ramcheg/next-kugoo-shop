"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import scooterImg from "@/public/slider/scooter.png";
import ArrowSvg from "@/public/slider/Arrow.svg";

import { Button } from "@/components/Button/Button";
import { H } from "@/components/H/H";
import Link from "next/link";
import Image from "next/image";

import "./HomeSliderStyle.scss";
import "keen-slider/keen-slider.min.css";

import { FakeButton } from "@/components/FakeButton/FakeButton";

const slideArr = [
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
];

export function HomeSlider(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [progressSlide, setProgressSlide] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progressSlide <= 36) {
                setProgressSlide((timer) => timer + 0.42);
            }
        }, 40);

        return () => {
            clearTimeout(timer);
        };
    }, [progressSlide]);

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    setProgressSlide(0);
                    setCurrentSlide((number) => slider.track.details.rel + 1);

                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 4000);
                }
                slider.on("created", () => {
                    nextTimeout();
                    setLoaded(() => true);
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
                slider.on("destroyed", clearNextTimeout);
            },
        ]
    );

    const createArrowLeft = loaded && instanceRef.current && (
        <div
            onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
            }
            className="p-2  rounded-full border border-solid border-transparent hover:border-gray-editible"
        >
            <ArrowSvg />
        </div>
    );
    const createArrowRight = loaded && instanceRef.current && (
        <div
            onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
            }
            className="rotate-180 p-2 rounded-full border border-solid border-transparent hover:border-gray-editible"
        >
            <ArrowSvg />
        </div>
    );
    return (
        <div className="relative">
            <div className=" keen-slider containerBig mt-8" ref={ref}>
                {slideArr.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="keen-slider__slide firstSlider rounded-lg relative overflow-hidden"
                        >
                            <div className=" pt-10 mb-10 md:pb-[6.44rem]">
                                <div className="ml-2 md:ml-24 w-2/4 z-20 relative">
                                    <div className="inline-block py-[.2rem] px-[.63rem] border border-solid border-white rounded-lg text-white text-sm 2xl:text-base">
                                        Новинка
                                    </div>
                                    <H
                                        level={1}
                                        color="white"
                                        className="mt-10 mb-1"
                                    >
                                        Электросамокаты Kugoo Kirin от
                                        официального дилера
                                    </H>
                                    <div className="text-white text-xs md:text-xl 2xl:text-2xl ">
                                        c бесплатной доставкой по Украине от 1
                                        дня
                                    </div>
                                    <Link href="/catalog">
                                        <Button
                                            className="my-7 hidden md:inline"
                                            color="white"
                                            size="middle"
                                            withBorder
                                            borderHoverOn="white"
                                        >
                                            Перейти в каталог
                                        </Button>
                                    </Link>
                                </div>
                                <div className=" absolute -right-20 md:right-0 bottom-0 z-10 w-fit md:w-[70%] xl:w-auto">
                                    <Image
                                        width={837}
                                        height={415}
                                        alt="scooter"
                                        src={scooterImg}
                                        priority
                                    />
                                    <div className=" absolute left-20 bottom-20 hidden md:block">
                                        <div className="py-3 px-4 rounded-md bg-white/20 inline-flex items-center gap-2">
                                            <div>⚡</div>
                                            <div className="text-white text-sm 2xl:text-base font-medium ">
                                                Тест-драйв и обучение
                                            </div>
                                        </div>
                                        <FakeButton
                                            bgColor="white"
                                            isUpperCase
                                            textColor="lavander"
                                            className="inline-block absolute -bottom-6 right-4"
                                        >
                                            бесплатно
                                        </FakeButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-12 left-28 hidden md:flex items-center gap-3 z-10">
                {createArrowLeft}
                <div className="text-white text-base 2xl:text-xl ">
                    {currentSlide}
                </div>
                <div className="border border-solid rounded-lg border-gray-300 w-9 relative">
                    <div
                        className={` h-[2px] bg-white absolute -top-[1px] rounded-lg -left-[1px] z-20 `}
                        style={{ width: `${progressSlide}px` }}
                    ></div>
                </div>
                <div className="text-white text-base 2xl:text-xl">
                    {slideArr.length}
                </div>
                {createArrowRight}
            </div>
            <div className="dots flex md:hidden justify-center gap-3 mt-2">
                {slideArr.map((item, i) => {
                    return (
                        <button
                            key={i}
                            className={` h-[2px] w-5  rounded-full  ${
                                currentSlide === i + 1
                                    ? "bg-lavander"
                                    : "bg-gray-light"
                            }`}
                            onClick={() => {
                                instanceRef.current?.moveToIdx(i - 1);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

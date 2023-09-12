"use client";

import sertificatImg from "@/public/cooperationPage/sertificat.png";
import Image from "next/image";
import { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import classNames from "classnames";

export const CooperationOfferSlide: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });
    return (
        <div className="relative">
            <div className="w-[28rem] h-[20rem]">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <Image src={sertificatImg} alt="sertificat" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image src={sertificatImg} alt="sertificat" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image src={sertificatImg} alt="sertificat" />
                    </div>
                    <div className="keen-slider__slide">
                        <Image src={sertificatImg} alt="sertificat" />
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <>
                    <div
                        className={classNames(
                            " w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-4",
                            {
                                ["bg-lavander cursor-pointer"]:
                                    currentSlide > 0,
                                ["bg-white"]: currentSlide === 0,
                            }
                        )}
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                    >
                        <KeyboardArrowLeftIcon
                            sx={{
                                fill: currentSlide === 0 ? "#6F73EE" : "white",
                            }}
                        />
                    </div>
                    <div
                        className={classNames(
                            " w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-4",
                            {
                                ["bg-lavander cursor-pointer"]:
                                    currentSlide !==
                                    instanceRef.current.track.details.slides
                                        .length -
                                        1,
                                ["bg-white"]:
                                    currentSlide ===
                                    instanceRef.current.track.details.slides
                                        .length -
                                        1,
                            }
                        )}
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                    >
                        <KeyboardArrowRightIcon
                            sx={{
                                fill:
                                    currentSlide ===
                                    instanceRef.current.track.details.slides
                                        .length -
                                        1
                                        ? "#6F73EE"
                                        : "white",
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

"use client";

import { useState } from "react";
import { H } from "../H/H";
import { BlogItem } from "./BlogItem";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowBtnCircle } from "../ArrowBtnCircle/ArrowBtnCircle";

export function Blog(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 5.5, spacing: 15 },
        breakpoints: {
            "(min-width: 319px)": {
                slides: { origin: "center", spacing: 15, perView: 1.3 },
            },
            "(min-width: 460px)": {
                slides: { origin: "center", spacing: 15, perView: 1.7 },
            },
            "(min-width: 720px)": {
                slides: { origin: "center", spacing: 15, perView: 2.3 },
            },
            "(min-width: 885px)": {
                slides: { origin: "center", spacing: 15, perView: 2.7 },
            },
            "(min-width: 1032px)": {
                slides: { origin: "center", spacing: 15, perView: 3.5 },
            },
            "(min-width: 1328px)": {
                slides: { origin: "center", spacing: 15, perView: 4.5 },
            },
            "(min-width: 1628px)": {
                slides: { origin: "center", spacing: 15, perView: 5.5 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <div className="relative">
            <H level={2}>Новые статьи в блоге</H>
            <div ref={sliderRef} className="mt-5 md:mt-11 keen-slider">
                <div className="keen-slider__slide ">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide ">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide ">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide ">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide ">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide max-w-[240px]">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
                <div className="keen-slider__slide max-w-[240px]">
                    <a href="#">
                        <BlogItem />
                    </a>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <ArrowBtnCircle
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    className="absolute top-1/2 right-10"
                />
            )}
        </div>
    );
}

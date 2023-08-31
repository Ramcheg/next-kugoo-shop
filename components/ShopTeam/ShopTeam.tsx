"use client";

import { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ITeam } from "./teamArr";

interface IShopTeamProps {
    TeamPersonalArr: ITeam[];
}

export const ShopTeam: FC<IShopTeamProps> = ({ TeamPersonalArr }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        mode: "free-snap",
        loop: true,
        slides: {
            origin: "auto",
            perView: "auto",
            spacing: 20,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const renderTeam = (arr: ITeam[]) => {
        return arr.map(({ id, img, name, work }) => {
            return (
                <div
                    className="keen-slider__slide min-w-[15rem] max-w-[20rem]"
                    key={id}
                >
                    <div className="bg-gray-light flex justify-center rounded-t-lg border-b-2 border-b-lavander border-solid h-[20rem]">
                        <Image src={img} alt="team 1" />
                    </div>
                    <div className="text-center text-base md:text-lg font-medium mt-4">
                        {name}
                    </div>
                    <div className="text-center text-xs md:text-sm text-gray-dark">
                        {work}
                    </div>
                </div>
            );
        });
    };

    const rending = renderTeam(TeamPersonalArr);

    return (
        <div ref={sliderRef} className="keen-slider ml-[9vw] max-w-[90vw]">
            {rending}
            {loaded && instanceRef.current && (
                <div
                    className="absolute -translate-y-1/2 top-1/2 right-1/3 rounded-full bg-lavander p-3 shadow-lg shadow-lavander/30 cursor-pointer hover:bg-lavander-light"
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                >
                    <ChevronRightIcon
                        sx={{ fill: "#fff", width: "2rem", height: "2rem" }}
                    />
                </div>
            )}
        </div>
    );
};

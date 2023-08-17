import { ICatalogArr } from "./CatalogTypes";
import Image from "next/image";

import roboCleanerImg from "@/public/catalog/whiteRobotVacuumCleaner.png";
import bikeImg from "@/public/catalog/cyclingBike.png";
import scalesImg from "@/public/catalog/visi.png";
import formatCurrency from "@/helpers/formatCurrency";
import Link from "next/link";

const catalogArr: ICatalogArr[] = [
    {
        name: "Робот-пылесоссы",
        price: 29900,
        img: roboCleanerImg,
        link: "/catalog/robotVacuumCleaners",
    },
    {
        name: "Электровелосипеды",
        price: 34000,
        img: bikeImg,
        link: "/catalog/electricBike",
    },
    { name: "Весы", price: 350, img: scalesImg, link: "/catalog/scales" },
];

const renderItems = catalogArr.map(({ img, name, price, link }, i) => {
    return (
        <Link className="block group" href={link} key={name}>
            <div className="rounded-lg relative overflow-hidden w-full h-full">
                <div className=" transition-all delay-100 bg-black/20 group-hover:bg-black/50 backdrop-blur-md rounded-lg absolute bottom-0 sm:bottom-2  sm:left-3 py-2 px-2 w-full sm:w-11/12">
                    <div className="text-white font-medium text-lg 2xl:text-xl group-hover:text-lavander-light transition-all delay-100">
                        {name}
                    </div>
                    <div className="text-white font-medium text-sm 2xl:text-base group-hover:text-lavander-light transition-all delay-100">
                        {`от ${formatCurrency(price)}`}
                    </div>
                </div>
                <Image
                    src={img}
                    alt={"bgCleanerBot"}
                    width={255}
                    height={255}
                    className="absolute -z-10 top-0 left-0"
                />
            </div>
        </Link>
    );
});

export function Catalog(): JSX.Element {
    return (
        <div className="grid gap-6  auto-rows-[minmax(0,_135px)] sm:auto-rows-[minmax(0,_255px)] grid-cols-[repeat(auto-fit,minmax(0,_140px))] sm:grid-cols-[repeat(auto-fit,minmax(0,_255px))] my-5 sm:my-16 justify-center">
            {renderItems}
        </div>
    );
}

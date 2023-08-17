import { IHeaderMenu } from "./HeaderModalMenuTypes";

import ElectroSamokatSVG from "@/public/headerMenu/ElectrikScooter.svg";
import ElectroScooterSVG from "@/public/headerMenu/Scooter.svg";
import ElectroBikeSVG from "@/public/headerMenu/Bike.svg";
import VacuumClinerSVG from "@/public/headerMenu/VacuumCliner.svg";
import WeighingSVG from "@/public/headerMenu/Weighing.svg";

export const modalMenu: IHeaderMenu[] = [
    {
        name: "Электросамокаты",
        link: "electricSamokat",
        icon: <ElectroSamokatSVG key={"electricSamokat"} />,
        secondLvl: [
            {
                nameSecondLvl: "Особенности",
                itemArr: [
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Внедорожный",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Городской",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Зимний",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "С сиденьем",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Без сиденья",
                    },
                ],
            },
            {
                nameSecondLvl: "Для кого",
                itemArr: [
                    {
                        link: "/catalog",
                        nameSecondItem: "Для детей и подростков",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Для взрослых",
                    },
                    {
                        link: "/catalog/electricSamokat",
                        nameSecondItem: "Для пенсионеров",
                    },
                ],
            },
        ],
    },
    {
        name: "Электроскутеры",
        link: "electricScooter",
        icon: <ElectroScooterSVG key={"electricScooter"} />,
        secondLvl: [
            {
                nameSecondLvl: "Особенности",
                itemArr: [
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Внедорожный",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Городской",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Зимний",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "С сиденьем",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Без сиденья",
                    },
                ],
            },
            {
                nameSecondLvl: "Для кого",
                itemArr: [
                    {
                        link: "/catalog",
                        nameSecondItem: "Для детей и подростков",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Для взрослых",
                    },
                    {
                        link: "/catalog/electricScooter",
                        nameSecondItem: "Для пенсионеров",
                    },
                ],
            },
        ],
    },
    {
        name: "Электровелосипеды",
        link: "electricBike",
        icon: <ElectroBikeSVG key={"electricBike"} />,
        secondLvl: [
            {
                nameSecondLvl: "Особенности",
                itemArr: [
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Внедорожный",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Городской",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Зимний",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "С сиденьем",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Без сиденья",
                    },
                ],
            },
            {
                nameSecondLvl: "Для кого",
                itemArr: [
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Для детей и подростков",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Для взрослых",
                    },
                    {
                        link: "/catalog/electricBike",
                        nameSecondItem: "Для пенсионеров",
                    },
                ],
            },
        ],
    },
    {
        name: "Робот-пылесосы",
        link: "robotVacuumCleaners",
        icon: <VacuumClinerSVG key={"robotVacuumCleaners"} />,
    },
    {
        name: "Весы",
        link: "scales",
        icon: <WeighingSVG key={"scales"} />,
    },
];

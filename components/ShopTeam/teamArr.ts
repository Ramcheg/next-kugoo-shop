import team1 from "@/public/ServicePage/team1.png";
import team2 from "@/public/ServicePage/team2.png";
import team3 from "@/public/ServicePage/team3.png";
import team4 from "@/public/ServicePage/team4.png";
import team5 from "@/public/ServicePage/team5.png";
import { StaticImageData } from "next/image";

export interface ITeam {
    id: string;
    name: string;
    work: string;
    img: StaticImageData;
}

export const serviceTeamArr: ITeam[] = [
    {
        id: "DmitriiNikbtenko",
        name: "Дмитрий Никитенко",
        work: "Руководитель сервисного центра",
        img: team1,
    },
    {
        id: "AnastasiaGorina",
        name: "Анастасия Горина",
        work: "Заместитель директора",
        img: team2,
    },
    {
        id: "YiliaKortish",
        name: "Юлия Кортич",
        work: "Менеджер по продажам",
        img: team3,
    },
    {
        id: "SergeiBoiko",
        name: "Сергей Бойко",
        work: "Мастер по ремонту самокатов",
        img: team4,
    },
    {
        id: "DmitriiNikbtenkov",
        name: "Дмитрий Никитенков",
        work: "Руководитель сервисного центра",
        img: team5,
    },
];

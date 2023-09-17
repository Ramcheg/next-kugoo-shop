import { ReactNode } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
interface IOurSocial {
    name: string;
    folovers: number;
    link: string;
    icon: ReactNode;
}

export const ourSocualArr: IOurSocial[] = [
    {
        folovers: 10602,
        link: "https://www.instagram.com",
        name: "Instagram",
        icon: <InstagramIcon sx={{ fill: "white" }} key={"insta"} />,
    },
    {
        folovers: 3602,
        link: "https://www.youtube.com",
        name: "YouTube",
        icon: <YouTubeIcon sx={{ fill: "white" }} key={"youtube"} />,
    },
    {
        folovers: 780,
        link: "https://web.telegram.org/k/",
        name: "Telegram",
        icon: <TelegramIcon sx={{ fill: "white" }} key={"telegram"} />,
    },
];

import InstagramIcon from "@/public/social/instagram.svg";
import YouTubeIcon from "@/public/social/youTube.svg";
import TelegramIcon from "@/public/social/telegramBlue.svg";
import { IFooterSocial } from "./FooterSocialTypes";
import formatNumber from "@/helpers/formatNumber";
import Link from "next/link";

const footerSocialArr: IFooterSocial[] = [
    {
        name: "Instagram",
        icon: <InstagramIcon key={"icon1"} />,
        countDescribe: 10602,
        link: "https://www.instagram.com",
    },
    {
        name: "YouTube",
        icon: <YouTubeIcon key={"icon2"} />,
        countDescribe: 3603,
        link: "https://www.youtube.com",
    },
    {
        name: "Telegram",
        icon: <TelegramIcon key={"icon3"} />,
        countDescribe: 432,
        link: "https://web.telegram.org",
    },
];

export function FooterSocial(): JSX.Element {
    const renderItem = footerSocialArr.map(
        ({ countDescribe, icon, name, link }) => {
            const formatNum = formatNumber(countDescribe);
            return (
                <Link href={link} key={name}>
                    <div className="transition-all delay-75  py-[.5rem] px-4 bg-white flex items-center gap-3 rounded-lg border border-solid border-gray-light hover:border-lavander-light">
                        {icon}
                        <div>
                            <div className="text-sm 2xl:text-base font-medium">
                                {name}
                            </div>
                            <div className="text-gray-dark text-[.62rem]">
                                {formatNum}
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    );

    return (
        <div className="flex gap-4 flex-wrap my-9 pb-0 md:pb-9 lg:pb-0 md:my-0 justify-center">
            {renderItem}
        </div>
    );
}

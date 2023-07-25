import InstagramIcon from "@/public/social/instagram.svg";
import YouTubeIcon from "@/public/social/youTube.svg";
import TelegramIcon from "@/public/social/telegramBlue.svg";
import { IFooterSocial } from "./FooterSocialTypes";
import formatNumber from "@/helpers/formatNumber";

const footerSocialArr: IFooterSocial[] = [
    {
        name: "Instagram",
        icon: <InstagramIcon key={"icon1"} />,
        countDescribe: 10602,
    },
    {
        name: "YouTube",
        icon: <YouTubeIcon key={"icon2"} />,
        countDescribe: 3603,
    },
    {
        name: "Telegram",
        icon: <TelegramIcon key={"icon3"} />,
        countDescribe: 432,
    },
];

export function FooterSocial(): JSX.Element {
    const renderItem = footerSocialArr.map(({ countDescribe, icon, name }) => {
        const formatNum = formatNumber(countDescribe);
        return (
            <a href="#" key={name}>
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
            </a>
        );
    });

    return (
        <div className="flex gap-4 flex-wrap my-9 pb-0 md:pb-9 lg:pb-0 md:my-0 justify-center">
            {renderItem}
        </div>
    );
}

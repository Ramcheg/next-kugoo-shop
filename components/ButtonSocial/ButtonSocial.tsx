import { IButtonSocialIcon, IIconArr } from "./ButtonSocialProps";
import cn from "classnames";

import "./ButtonSocialStyle.scss";

import ViberIcon from "@/public/socialColored/viber.svg";
import Link from "next/link";
import { Fragment } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
export function ButtonSocial({
    typeIcon,
    className,
    ...props
}: IButtonSocialIcon): JSX.Element {
    const clazz = "h-5 w-5 pt-1";
    const IconArr: IIconArr[] = [
        {
            name: "telegram",
            element: <TelegramIcon fontSize="small" />,
        },
        {
            name: "phone",
            element: <PhoneIcon fontSize="small" />,
        },
        {
            name: "whatsapp",
            element: <WhatsAppIcon fontSize="small" />,
        },
    ];

    const Icon = IconArr.map((item) => {
        if (typeIcon && item.name === typeIcon) {
            return <Fragment key={item.name}>{item.element}</Fragment>;
        }
    });
    const link =
        typeIcon === "telegram"
            ? "tel:+3802232314"
            : typeIcon === "phone"
            ? "https://www.viber.com"
            : "https://www.whatsapp.com";
    return (
        <Link href={link}>
            <button
                className={cn(
                    className,
                    "transition-all delay-100 rounded-lg border border-solid border-gray-light hover:border-transparent py-2 md:py-4 px-5 md:px-7",
                    {
                        ["hover:bg-[#008DE0] telegramSocialIcon"]:
                            typeIcon === "telegram",
                        ["hover:bg-lavander phoneSocialIcon"]:
                            typeIcon === "phone",
                        ["hover:bg-[#75D14A] whatsappSocialIcon"]:
                            typeIcon === "whatsapp",
                    }
                )}
                {...props}
            >
                {Icon}
            </button>
        </Link>
    );
}

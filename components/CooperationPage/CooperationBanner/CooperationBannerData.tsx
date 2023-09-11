import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RedoIcon from "@mui/icons-material/Redo";
import CollectionsIcon from "@mui/icons-material/Collections";
import { ReactNode } from "react";

interface ICooperationBanner {
    id: string;
    descr: string;
    icon: ReactNode;
}

export const cooperationBannerData: ICooperationBanner[] = [
    {
        id: "demping",
        descr: "Отсутствие демпинга — контроль цен и МРЦ",
        icon: <AccountBalanceWalletIcon color="primary" />,
    },
    {
        id: "dostavka",
        descr: "Бесплатная доставка до любой ТК",
        icon: <Inventory2Icon color="primary" />,
    },
    {
        id: "reverse",
        descr: "Беспроблемный возврат и замена брака",
        icon: <RedoIcon color="primary" />,
    },
    {
        id: "media",
        descr: "Готовый медиаконтент для вашего сайта и соцсетей",
        icon: <CollectionsIcon color="primary" />,
    },
];

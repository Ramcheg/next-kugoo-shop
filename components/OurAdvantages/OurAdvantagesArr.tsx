import { ILastServisecItem, IOurAdvantagesItems } from "./OurAdvantagesTypes";

import BusketSVG from "@/public/advantages/Busket.svg";
import BullfaldSVG from "@/public/advantages/Bullfald.svg";
import GuaranteSVG from "@/public/advantages/Guarante.svg";
import DisketSVG from "@/public/advantages/Disketa.svg";
import PresentSVG from "@/public/advantages/Present.svg";

import bikeImg from "@/public/advantages/bike.png";
import servicesImg from "@/public/advantages/drell.png";

export const advntInternetShopArr: IOurAdvantagesItems[] = [
    {
        icon: <BusketSVG />,
        name: "X товаров в каталоге",
        descrtiption:
            "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.",
    },
    {
        icon: <BullfaldSVG />,
        name: "5 способов оплаты",
        descrtiption:
            "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «ПриватБанк».",
    },
    {
        icon: <GuaranteSVG />,
        name: "Полная документация и гарантия 1 год",
        descrtiption:
            "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание. ",
    },
    {
        icon: <DisketSVG />,
        name: "Отправка заказа день в день",
        descrtiption:
            "Отправляем заказы по всей Украине день в день или забирайте товар самостоятельно в магазинах в Днепре, Киеве и Одессе",
    },
    {
        icon: <PresentSVG />,
        name: "Рассрочка без переплат",
        descrtiption:
            "В нашем магазине можно приобрести любой товар в рассрочку.",
    },
];

export const advntServicesArr: IOurAdvantagesItems[] = [
    {
        icon: <BusketSVG />,
        name: "Ремонт от 1 дня",
        descrtiption:
            "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.",
    },
    {
        icon: <BullfaldSVG />,
        name: "Гидроизоляция для долгой службы",
        descrtiption:
            "Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.",
    },
    {
        icon: <GuaranteSVG />,
        name: "Ремонтируем только то, что сломалось",
        descrtiption:
            "Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.",
    },
    {
        icon: <DisketSVG />,
        name: "Даем гарантию 14 дней на ремонт",
        descrtiption: "Гарантия это супер, у нас гарантия от производителя",
    },
    {
        icon: <PresentSVG />,
        name: "Оригинальные запчасти",
        descrtiption:
            "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта. с производителем имеем",
    },
];

export const internetShop: ILastServisecItem = {
    img: bikeImg,
    link: "catalog",
    name: "Больше в каталоге",
};

export const servicesShop: ILastServisecItem = {
    img: servicesImg,
    link: "services",
    name: "Больше в сервисе",
};

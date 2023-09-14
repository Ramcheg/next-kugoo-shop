import { ReactNode } from "react";

import faceMan from "@/public/cooperationPage/Face.png";
import notebook from "@/public/cooperationPage/notebook.png";
import money from "@/public/cooperationPage/money.png";
import prodavech from "@/public/cooperationPage/prodavech.png";
import box from "@/public/cooperationPage/box.png";
import scooterIcon from "@/public/cooperationPage/scooterIcon.png";
import trash from "@/public/cooperationPage/trash.png";
import mail from "@/public/cooperationPage/mail.png";
import { StaticImageData } from "next/image";

export interface ICooperationAlgorytmData {
    id: string;
    name: string;
    icon: StaticImageData;
}

export const firstCooperationAlgData: ICooperationAlgorytmData[] = [
    { id: "castumer", name: "Покупатель", icon: faceMan },
    { id: "zakaz", name: "Делает заказ", icon: notebook },
    { id: "payment", name: "Оплачивает вам", icon: money },
    { id: "prodavech", name: "Продавец (Вы)", icon: prodavech },
];

export const secondCooperationAlgData: ICooperationAlgorytmData[] = [
    { id: "takeTovar", name: "Отправка покупателю", icon: box },
    { id: "tovar", name: "Товар", icon: scooterIcon },
    {
        id: "prodavechObr",
        name: "Поставщик (Мы) обрабатывает заказ",
        icon: trash,
    },
    {
        id: "mailZakaz",
        name: "Заказывает товар на адрес покупателя",
        icon: mail,
    },
];

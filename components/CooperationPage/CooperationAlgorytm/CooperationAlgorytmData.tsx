import { ReactNode } from "react";

import faceMan from "@/public/cooperationPage/Face.png";
import notebook from "@/public/cooperationPage/notebook.png";
import money from "@/public/cooperationPage/money.png";
import prodavech from "@/public/cooperationPage/prodavech.png";
import { StaticImageData } from "next/image";

interface ICooperationAlgorytmData {
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
    { id: "castumer", name: "Покупатель", icon: faceMan },
    { id: "zakaz", name: "Делает заказ", icon: faceMan },
    { id: "payment", name: "Оплачивает вам", icon: faceMan },
    { id: "prodavech", name: "Продавец (Вы)", icon: faceMan },
];

import { StaticImageData } from "next/image";

export interface IOurAdvantagesItems {
    name: string;
    descrtiption: string;
    icon: JSX.Element;
}

export interface ILastServisecItem {
    name: string;
    link: string;
    img: StaticImageData;
}

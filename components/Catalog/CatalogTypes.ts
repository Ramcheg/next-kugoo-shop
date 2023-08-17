import { StaticImageData } from "next/image";

export interface ICatalogArr {
    name: string;
    price: number;
    img: StaticImageData;
    link: string;
}

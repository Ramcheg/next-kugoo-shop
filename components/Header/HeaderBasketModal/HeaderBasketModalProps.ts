import { StaticImageData } from "next/image";

export interface IBasketGoods {
    name: string;
    price: number;
    count: number;
    thumbnail: StaticImageData;
}

export interface IBasketGoodsItem {
    name: string;
    price: number;
    count: number;
    thumbnail: StaticImageData;
    deletedProduct: (id: number) => void;
    id: number;
}

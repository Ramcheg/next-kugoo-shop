import { StaticImageData } from "next/image";

export interface IBasketGoods {
    id: string;
    name: string;
    price: number;
    count: number;
    thumbnail: string;
    sale: string;
}

export interface IBasketGoodsItem extends IBasketGoods {
    deletedProduct: (id: string) => void;
}

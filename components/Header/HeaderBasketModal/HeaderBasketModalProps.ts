import { StaticImageData } from "next/image";

export interface IBasketGoods {
  name: string;
  price: number;
  count: number;
  thumbnail: StaticImageData;
}

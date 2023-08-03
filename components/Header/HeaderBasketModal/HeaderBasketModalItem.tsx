"use client";

import formatCurrency from "@/helpers/formatCurrency";
import { IBasketGoodsItem } from "./HeaderBasketModalProps";
import Image from "next/image";
import Delete from "@/public/Delete.svg";
import { motion } from "framer-motion";
export function HeaderBasketModalItem({
    name,
    price,
    thumbnail,
    count,
    deletedProduct,
    id,
}: IBasketGoodsItem): JSX.Element {
    return (
        <motion.div layout>
            <div className="flex justify-between items-center mx-5">
                <div className="flex gap-3 my-5  ">
                    <Image
                        width={49}
                        height={49}
                        src="/other/thumbnail_Basket.png"
                        alt={`skuter-${name}`}
                    />
                    <div>
                        <p className="text-sm 2xl:text-base font-medium">
                            {name}
                        </p>
                        <div className="flex gap-3 items-center">
                            <p className="text-sm 2xl:text-base">
                                {formatCurrency(price)}
                            </p>
                            <p>{`${count} шт.`}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="cursor-pointer hover:bg-gray-light rounded-full inline-block p-1"
                        onClick={() => deletedProduct(id)}
                    >
                        <Delete />
                    </div>
                </div>
            </div>
            <hr />
        </motion.div>
    );
}

"use client";

import { H, PriceForm } from "@/components";
import { FC } from "react";

import { cooperationBannerData } from "./CooperationBannerData";

export const CooperationBanner: FC = () => {
    return (
        <div className="containerBig bg-gray-light rounded-lg">
            <div className="container mx-auto">
                <div className="flex items-center py-10 gap-6 md:gap-20 md:flex-row flex-col">
                    <div className="w-full md:w-2/3 py-5 pl-3">
                        <H level={1}>
                            Покупайте товары Kugoo по оптовым ценам от
                            официального дилера
                        </H>
                        <div className="text-lg mt-2">
                            Ваша прибыль — до 25% от закупочной стоимости 1
                            единицы товара
                        </div>
                        <div className="hidden md:flex flex-wrap gap-8 md:w-3/4 mt-9">
                            {cooperationBannerData.map(
                                ({ descr, icon, id }) => (
                                    <div
                                        className="flex items-center gap-3"
                                        key={id}
                                    >
                                        <div className="bg-lavander-light/20 rounded-lg p-3">
                                            {icon}
                                        </div>
                                        <div className="w-[10rem] text-sm font-medium">
                                            {descr}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <PriceForm borderColor="none" />
                </div>
            </div>
        </div>
    );
};

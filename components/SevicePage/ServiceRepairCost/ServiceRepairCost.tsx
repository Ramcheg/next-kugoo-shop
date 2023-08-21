"use client";

import { Button, H } from "@/components";
import { FC, useState } from "react";
import {
    ServiceRepairfakeDescr,
    serviceRepairButtonGroup,
    serviceRepairNameProduct,
} from "./ServiceRepairCostArr";
import classNames from "classnames";

export const ServiceRepairCost: FC = () => {
    const [activeName, setActiveName] = useState("KirinM4");

    return (
        <div className="container mx-auto">
            <H className="text-center" level={2}>
                Стоимость ремонта{" "}
            </H>
            <div className="mx-auto text-center w-full md:w-1/2">
                Точную стоимость работ вам озвучит специалист сервисного центра
                после диагностики. Примерные цены на ремонт без учета запчастей
                смотрите ниже.
            </div>
            <div className="mt-4 md:mt-11 flex justify-center gap-5 flex-wrap items-center">
                {serviceRepairButtonGroup.map(({ id, name }) => {
                    return (
                        <Button
                            className="border-transparent"
                            key={id}
                            size="small"
                            color="gray"
                        >
                            {name}
                        </Button>
                    );
                })}
            </div>
            <div className="mt-10 md:mt-24">
                <div className="flex justify-between h-[27rem] gap-7">
                    <div className="w-1/4 bg-gray-light py-4 rounded-lg">
                        {serviceRepairNameProduct.map(({ id, name }) => {
                            return (
                                <div
                                    key={id}
                                    className={classNames(
                                        "transition-all delay-100 hover:bg-white hover:border-l-2 hover:border-solid border-l-2 border-solid  hover:border-lavander font-medium hover:text-lavander text-lg  2xl:text-xl pl-7 py-2",
                                        {
                                            ["bg-white border-l-2 border-solid border-lavander text-lavander select-none"]:
                                                activeName === id,
                                            ["border-transparent  cursor-pointer"]:
                                                activeName !== id,
                                        }
                                    )}
                                >
                                    {name}
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-3/4 border-2 border-solid border-gray-light rounded-lg">
                        {ServiceRepairfakeDescr.map(({ id, content }) => {
                            return (
                                <div
                                    key={id}
                                    className={classNames({
                                        ["block"]: activeName === id,
                                        ["hidden"]: activeName !== id,
                                    })}
                                >
                                    {content.map((item, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center px-6 py-5 border-b-2 border-solid border-gray-light"
                                            >
                                                <div>
                                                    Замена/установка контроллера
                                                </div>
                                                <div className="font-medium">
                                                    от 1500 грн
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

"use client";

import { Button, H } from "@/components";
import { FC, useEffect, useState } from "react";
import {
    serviceRepairButtonGroup,
    serviceRepairElecticScooter,
    serviceRepairElecticWashCleener,
    serviceRepairElectricBike,
    serviceRepairElectricCamocat,
} from "./ServiceRepairCostArr";
import { ServiceRepairNameItem } from "./ServiceRepairNameItem";
import { ServiceRepairCostDescrItem } from "./ServiceRepairCostDescrItem";
import classNames from "classnames";
import { IServiceRepairCost } from "./ServiceRepairCostTypes";
import { motion } from "framer-motion";

export const ServiceRepairCost: FC = () => {
    const [activeName, setActiveName] = useState("KirinM4");
    const [activeType, setActiveType] = useState("electricCamocat");
    const [itemDescr, setItemDescr] = useState<IServiceRepairCost[]>([]);

    useEffect(() => {
        switch (activeType) {
            case "electricCamocat":
                setItemDescr(serviceRepairElectricCamocat);
                break;
            case "electricBike":
                setItemDescr(serviceRepairElectricBike);
                break;
            case "electicWashCleener":
                setItemDescr(serviceRepairElecticWashCleener);
                break;

            case "electicScooter":
                setItemDescr(serviceRepairElecticScooter);
                break;

            default:
                setItemDescr([]);
                break;
        }

        if (itemDescr.length > 0) {
            setActiveName(itemDescr[0].id);
        }
    }, [activeType, itemDescr]);

    const onChangeType = (id: string) => {
        setActiveType(id);
    };

    const onChangeActiveName = (id: string) => {
        setActiveName(id);
    };

    return (
        <div className="container mx-auto">
            <H className="text-center" level={2}>
                Стоимость ремонта
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
                            className={`${
                                activeType === id ? "" : "border-transparent"
                            }`}
                            key={id}
                            size="small"
                            color={activeType === id ? "white" : "gray"}
                            withBorder={activeType === id}
                            isDisabled={activeType === id}
                            isHover={activeType !== id}
                            onClick={() => onChangeType(id)}
                        >
                            {name}
                        </Button>
                    );
                })}
            </div>
            <div className="mt-10 md:mt-24">
                <div className="flex justify-between h-[27rem] gap-7">
                    <div className="w-1/4 bg-gray-light py-4 rounded-lg">
                        {itemDescr.map((item) => {
                            return (
                                <ServiceRepairNameItem
                                    key={item.id}
                                    activeName={activeName}
                                    {...item}
                                    changeActiveDescr={onChangeActiveName}
                                />
                            );
                        })}
                    </div>
                    <div className="w-3/4 border-2 border-solid border-gray-light rounded-lg">
                        {itemDescr.map(({ id, content }) => {
                            return (
                                <ServiceRepairCostDescrItem
                                    key={`${id}-descr`}
                                    id={id}
                                    activeName={activeName}
                                    content={content}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

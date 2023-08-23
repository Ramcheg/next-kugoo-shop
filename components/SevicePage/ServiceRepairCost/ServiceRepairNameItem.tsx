"use client";

import { FC } from "react";
import { IServiceRepairCost } from "./ServiceRepairCostTypes";
import classNames from "classnames";
import { motion } from "framer-motion";

interface IServiceRepairNameItemProps extends IServiceRepairCost {
    activeName: string;
    changeActiveDescr: (id: string) => void;
}

export const ServiceRepairNameItem: FC<IServiceRepairNameItemProps> = ({
    name,
    id,
    activeName,
    changeActiveDescr,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            className={classNames(
                "hover:bg-white hover:border-l-2 hover:border-solid border-l-2 border-solid  hover:border-lavander font-medium hover:text-lavander text-sm md:text-base lg:text-lg  2xl:text-xl pl-1 md:pl-7 py-2",
                {
                    ["bg-white border-l-2 border-solid border-lavander text-lavander select-none"]:
                        activeName === id,
                    ["border-transparent  cursor-pointer"]: activeName !== id,
                }
            )}
            onClick={() => {
                changeActiveDescr(id);
            }}
        >
            {name}
        </motion.div>
    );
};

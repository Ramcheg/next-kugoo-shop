"use client";

import { Button } from "@/components";
import { FC, useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const CatalogTypeSort: FC = () => {
    const [forPriceUp, setForPriceUp] = useState(true);
    const [forMileUp, setForMileUp] = useState(true);
    return (
        <div className="flex gap-3 items-center">
            <div className="text-sm 2xl:text-base font-medium">
                Сортировать:
            </div>
            <Button
                color="white"
                size="small"
                className="flex gap-3 items-center"
                onClick={() => setForPriceUp((price) => !price)}
            >
                <div>По цене</div>
                <div
                    className={`transition-transform delay-100 ${
                        forPriceUp ? "" : "rotate-180"
                    }`}
                >
                    <KeyboardArrowUpIcon />
                </div>
            </Button>
            <Button
                color="white"
                size="small"
                className="flex gap-3 items-center"
                onClick={() => setForMileUp((mile) => !mile)}
            >
                <div>По дальности хода</div>
                <div
                    className={`transition-transform delay-100 ${
                        forMileUp ? "" : "rotate-180"
                    }`}
                >
                    <KeyboardArrowUpIcon />
                </div>
            </Button>
        </div>
    );
};

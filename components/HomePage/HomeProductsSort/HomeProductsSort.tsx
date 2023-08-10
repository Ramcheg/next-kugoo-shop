"use client";

import { Button } from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { filterType, handleHomeFilter } from "../HomeProducts/homeProductSlice";

const productSortArr: { name: string; type: filterType }[] = [
    { name: "Хиты продаж", type: "hit" },
    { name: "Для города", type: "forCity" },
    { name: "Для взрослых", type: "forAdult" },
    { name: "Для детей", type: "forChild" },
];

export function HomeProductsSort(): JSX.Element {
    const { homefilter } = useAppSelector((store) => store.homeProduct);
    const dispatch = useAppDispatch();

    const renderSortButton = productSortArr.map((item, i) => {
        const isActive = item.type === homefilter;
        const handleClickType: filterType =
            item.type !== homefilter ? item.type : "default";
        return (
            <Button
                onClick={() => dispatch(handleHomeFilter(handleClickType))}
                key={item.type}
                color={isActive ? "white" : "gray"}
                withBorder={isActive}
                size="middle"
                isHover={!isActive}
            >
                {item.name}
            </Button>
        );
    });

    return <>{renderSortButton}</>;
}

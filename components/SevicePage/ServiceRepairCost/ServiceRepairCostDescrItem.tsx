import { FC } from "react";
import { IServiceRepairCost } from "./ServiceRepairCostTypes";
import classNames from "classnames";

interface IServiceRepairCostDescrItem extends Omit<IServiceRepairCost, "name"> {
    activeName: string;
}

export const ServiceRepairCostDescrItem: FC<IServiceRepairCostDescrItem> = ({
    content,
    activeName,
    id,
}) => {
    return (
        <div
            className={classNames({
                ["block"]: activeName === id,
                ["hidden"]: activeName !== id,
            })}
        >
            {content.map((item, i) => {
                return (
                    <div
                        key={i}
                        className="transition-all delay-100 flex justify-between items-center px-2  md:px-6 py-5 border-b-2 border-solid border-gray-light text-xs md:text-base"
                    >
                        <div>Замена/установка контроллера {id} </div>
                        <div className="font-medium">от 1500 грн</div>
                    </div>
                );
            })}
        </div>
    );
};

import { H } from "@/components";
import { FC } from "react";

export const CooperationBanner: FC = () => {
    return (
        <div className="containerBig bg-gray-light rounded-lg">
            <div className="container mx-auto">
                <div>
                    <H level={1}>
                        Покупайте товары Kugoo по оптовым ценам от официального
                        дилера
                    </H>
                </div>
            </div>
        </div>
    );
};

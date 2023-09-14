import { H, PriceForm } from "@/components";
import { FakeButton } from "@/components/FakeButton/FakeButton";
import { FC } from "react";

export const CooperationComplitedPlan: FC = () => {
    return (
        <div className="bg-gradient-radial from-lavander-light to-lavander containerBig rounded-lg">
            <div className="container mx-auto py-16">
                <div className="flex justify-center lg:justify-between flex-wrap gap-4 lg:gap-0">
                    <div className=" w-6/12 mt-5">
                        <FakeButton
                            bgColor="green"
                            textColor="white"
                            isUpperCase={false}
                        >
                            Бесплатно
                        </FakeButton>
                        <H level={2} className="mt-4" color="white">
                            Получите готовый план развития бизнеса по продаже
                            товаров Kugoo
                        </H>
                    </div>
                    <div className="">
                        <PriceForm borderColor="white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

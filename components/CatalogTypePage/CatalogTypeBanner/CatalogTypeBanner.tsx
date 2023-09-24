import { H } from "@/components";
import { FC } from "react";

interface CatalogTypeProductBannerProps {
    titleName: string;
}

export const CatalogTypeBanner: FC<CatalogTypeProductBannerProps> = ({
    titleName,
}) => {
    return (
        <div className="relative containerBig h-[12rem] 2xl:h-[12rem] bg-catalogBanner bg-cover bg-right flex items-center rounded-lg overflow-hidden">
            <div className="container mx-auto">
                <H
                    level={2}
                    color="white"
                    className="relative z-10 text-center sm:text-left"
                >
                    {titleName} Kugoo Kirin
                </H>
            </div>
            <div
                style={{
                    background:
                        "linear-gradient(73deg, #6F73EE 17.37%, rgba(111, 115, 238, 0.00) 67.02%)",
                }}
                className="absolute top-0 left-0 bg w-3/4 h-full  z-0"
            ></div>
        </div>
    );
};

import { Breadcrumb, DroneSection } from "@/components";
import { CatalogTypeProductBanner } from "@/components/CatalogTypeProductPage";
import { translateForRuLink } from "@/helpers/translateLinkToRu";
import { FC } from "react";

interface CatalogProductTypeProps {
    productType: string;
}

export const CatalogTypeProductPage: FC<CatalogProductTypeProps> = ({
    productType,
}) => {
    const titleName = translateForRuLink(productType);
    return (
        <>
            <div className="container mx-auto mt-5">
                <Breadcrumb />
            </div>
            <div className="mt-5">
                <CatalogTypeProductBanner
                    titleName={
                        titleName?.translate ? titleName.translate : productType
                    }
                />
            </div>
            <section className="mt-5">
                <DroneSection />
            </section>
        </>
    );
};

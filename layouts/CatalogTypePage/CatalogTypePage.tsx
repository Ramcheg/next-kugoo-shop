import { Breadcrumb, DroneSection } from "@/components";
import { CatalogTypeSort } from "@/components/CatalogTypePage";
import { CatalogTypeBanner } from "@/components/CatalogTypePage";
import { translateForRuLink } from "@/helpers/translateLinkToRu";
import { FC } from "react";

interface CatalogProductTypeProps {
    productType: string;
}

export const CatalogTypePage: FC<CatalogProductTypeProps> = ({
    productType,
}) => {
    const titleName = translateForRuLink(productType);
    return (
        <>
            <div className="container mx-auto mt-5">
                <Breadcrumb />
            </div>
            <div className="mt-5">
                <CatalogTypeBanner
                    titleName={
                        titleName?.translate ? titleName.translate : productType
                    }
                />
            </div>
            <section className="mt-5">
                <DroneSection />
            </section>
            <div className="container mx-auto">
                <div className="flex justify-between mt-6 md:mt-12">
                    <div className="uppercase text-2xl font-medium">фильтр</div>
                    <CatalogTypeSort />
                </div>
                <div>
                    <article className="w-3/4">filters</article>
                    <div>
                        <div>content</div>
                    </div>
                </div>
            </div>
        </>
    );
};

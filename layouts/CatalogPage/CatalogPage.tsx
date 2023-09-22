import {
    AboutUs,
    AdditionallyProduct,
    Blog,
    Breadcrumb,
    Catalog,
} from "@/components";
import { CatalogBanner } from "@/components/CatalogPage";

import { FC } from "react";

export const CatalogPage: FC = () => {
    return (
        <>
            <div className="mt-4 container mx-auto">
                <Breadcrumb />
            </div>
            <div className="mt-4">
                <CatalogBanner />
            </div>
            <section>
                <Catalog />
            </section>
            <section>
                <AboutUs />
            </section>
            <section className="mt-14 md:mt-28">
                <Blog />
            </section>
            <section>
                <div className="container mx-auto mt-6 md:mt-12 md:block hidden">
                    <AdditionallyProduct />
                </div>
            </section>
        </>
    );
};

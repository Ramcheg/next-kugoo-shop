import { CatalogTypeProductPage } from "@/layouts/CatalogTypeProductPage/CatalogTypeProductPage";

interface CatalogTypeProps {
    params: { productType: string };
}

export default function ProductType({
    params: { productType },
}: CatalogTypeProps): JSX.Element {
    return <CatalogTypeProductPage productType={productType} />;
}

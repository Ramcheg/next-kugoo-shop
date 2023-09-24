import { CatalogTypePage } from "@/layouts/CatalogTypePage/CatalogTypePage";

interface CatalogTypeProps {
    params: { productType: string };
}

export default function ProductType({
    params: { productType },
}: CatalogTypeProps): JSX.Element {
    return <CatalogTypePage productType={productType} />;
}

import { Button } from "@/components/Button/Button";

const productSortArr: { name: string }[] = [
    { name: "Хиты продаж" },
    { name: "Для города" },
    { name: "Для взрослых" },
    { name: "Для детей" },
];

export function HomeProductsSort(): JSX.Element {
    const renderSortButton = productSortArr.map((item, i) => {
        return (
            <Button key={`${i + 1}-button`} color="gray" size="middle">
                {item.name}
            </Button>
        );
    });

    return <>{renderSortButton}</>;
}

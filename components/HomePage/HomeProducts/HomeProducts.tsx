import { Button, H, ProductWrapper } from "@/components";
import { HomeProductsSort } from "../HomeProductsSort/HomeProductsSort";
import { IDate } from "@/helpers/getProductsFireType";
import { Suspense } from "react";
import Loading from "@/app/loading";

export async function HomeProducts(): Promise<JSX.Element> {
    const respons = (await fetch(`${process.env.BASE_URL}/product`).then(
        (res) => {
            return res.json();
        }
    )) as IDate[] | [];

    return (
        <>
            <div className="flex justify-center md:justify-between items-center mt-10">
                <H className="hidden md:block" level={2}>
                    Электросамокаты
                </H>
                <div className="flex flex-col sm:flex-row  gap-[.63rem]">
                    <HomeProductsSort />
                </div>
            </div>
            <Suspense fallback={<Loading />}>
                <ProductWrapper products={respons} />
            </Suspense>

            <div className="flex justify-center mt-4 md:mt-8">
                <Button
                    className=" border-gray-dark "
                    color="gray"
                    size="middle"
                >
                    Смотреть все
                </Button>
            </div>
        </>
    );
}

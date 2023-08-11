import { Button, H, ProductWrapper } from "@/components";
import { HomeProductsSort } from "../HomeProductsSort/HomeProductsSort";
import { IDate } from "@/helpers/getProductsFireType";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Link from "next/link";
import { IErrorResponse } from "@/interfaces/errorInterface";

export async function HomeProducts(): Promise<JSX.Element> {
    const respons = (await fetch(`${process.env.BASE_URL}/product`, {
        next: { revalidate: 240 },
    }).then((res) => {
        return res.json();
    })) as IDate[] | [] | IErrorResponse;

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
                {respons instanceof Array ? (
                    <ProductWrapper products={respons} />
                ) : (
                    <h2>Error</h2>
                )}
            </Suspense>

            <div className="flex justify-center mt-4 md:mt-8">
                <Link href={"/catalog/electricSamokat"}>
                    <Button
                        className=" border-gray-dark "
                        color="gray"
                        size="middle"
                    >
                        Смотреть все
                    </Button>
                </Link>
            </div>
        </>
    );
}

import { IProductWithoutFirebase } from "@/helpers/getAllProductsFire";
import { H, ProductCard } from "..";
import { IErrorResponse } from "@/interfaces/errorInterface";
import Loading from "@/app/loading";
import { render } from "react-dom";

export async function AdditionallyProduct() {
    const response = (await fetch(`${process.env.BASE_URL}/product?sold=10`, {
        next: { revalidate: 240 },
    }).then((res) => {
        return res.json();
    })) as IProductWithoutFirebase[] | IErrorResponse[];

    function isProductResponseArray(
        response: IProductWithoutFirebase[] | IErrorResponse[]
    ): response is IProductWithoutFirebase[] {
        return (
            Array.isArray(response) &&
            response.length > 0 &&
            "id" in response[0]
        );
    }

    const renderI = () => {
        if (isProductResponseArray(response)) {
            return response.sort((a, b) => +a.sold - +b.sold).slice(0, 3);
        } else {
            return response;
        }
    };
    const ArrCurrItem = renderI();

    return (
        <div>
            <H className="text-center" level={2}>
                часто покупают
            </H>
            <div className="grid justify-center gap-y-10 gap-x-7  grid-cols-[repeat(auto-fit,minmax(0,_150px))]  sm:grid-cols-[repeat(auto-fit,minmax(150px,_250x))] md:grid-cols-[repeat(auto-fit,minmax(0,_300px))] grid-rows-1 auto-rows-fr mt-12 ">
                {ArrCurrItem.map((item) => {
                    if ("id" in item) {
                        return <ProductCard key={item.id} {...item} />;
                    } else {
                        <Loading />;
                    }
                })}
            </div>
        </div>
    );
}

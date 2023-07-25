import { Button } from "@/components";
import { IBasketGoods } from "./HeaderBasketModalProps";
import thumbnailBasket from "@/public/other/thumbnail_Basket.png";
import formatCurrency from "@/helpers/formatCurrency";
import { HeaderBasketModalItem } from "./HeaderBasketModalItem";

const basketArr: IBasketGoods[] = [
    {
        name: "Kugoo Kirin M4",
        count: 1,
        price: 29000,
        thumbnail: thumbnailBasket,
    },
    { name: "Kugoo Kirin M4", count: 2, price: 1, thumbnail: thumbnailBasket },
    {
        name: "Kugoo Kirin M4",
        count: 1,
        price: 29000,
        thumbnail: thumbnailBasket,
    },
    {
        name: "Kugoo Kirin M4",
        count: 4,
        price: 29000,
        thumbnail: thumbnailBasket,
    },
];

export function HeaderBasketModal(): JSX.Element {
    let allPrice: number = 0;
    function formatGoodsText(count: number): string {
        const wordForms = ["товар", "товара", "товаров"];

        if (count % 10 === 1 && count % 100 !== 11) {
            return `${count} ${wordForms[0]}`;
        }

        if (
            [2, 3, 4].includes(count % 10) &&
            ![12, 13, 14].includes(count % 100)
        ) {
            return `${count} ${wordForms[1]}`;
        }
        return `${count} ${wordForms[2]}`;
    }

    const renderItems = basketArr.map((goods, i) => {
        allPrice += goods.price;
        return <HeaderBasketModalItem key={i} {...goods} />;
    });

    return (
        <div className="absolute w-[21rem] 2xl:w-[24rem] h-[21rem] right-5 2xl:right-15 top-14 ">
            <div>
                <div className=" bg-gray-light  px-[1.25rem] py-4 flex items-center justify-between gap-[5.3rem]">
                    <div className="font-medium text-lg">В вашей корзине</div>
                    <div className="text-sm 2xl:text-base text-gray-dark ">
                        {formatGoodsText(basketArr.length)}
                    </div>
                </div>
                <div className=" h-[13rem] overflow-y-auto bg-white">
                    {renderItems}
                    <div className=""></div>
                </div>
                <div className="flex bg-white gap-[3.44rem] px-[1.25rem] py-4 items-center shadow-[0px_-20px_20px_-20px_rgba(0,0,0,0.16)]">
                    <div>
                        <p className="text-sm 2xl:text-base text-gray-dark">
                            Сумма:
                        </p>
                        <p className="font-medium text-lg 2xl:text-xl">
                            {formatCurrency(allPrice)}
                        </p>
                    </div>
                    <Button color="lavander" size="dropDown">
                        Перейти к корзине
                    </Button>
                </div>
            </div>
        </div>
    );
}

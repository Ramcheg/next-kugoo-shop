import { H } from "@/components";
import { IFooterInformation } from "./FooterInformationTypes";
import toNumberLink from "@/helpers/toNumberLink";

const FotermInformationArr: IFooterInformation[] = [
    {
        name: "Call-центр",
        numberPhone: "+38 (050) 350 76 92",
        timeWork: "Пн-Вс 10:00 - 20:00",
    },
    {
        name: "Сервисный центр",
        numberPhone: "+38 (095) 350 76 92",
        timeWork: "Пн-Вс 10:00 - 20:00",
    },
    {
        name: "Магазин в Днепре ул. Ткацкая, 5 стр. 16",
        numberPhone: "+38 (095) 406 15 87",
    },
    {
        name: "Магазин в Киеве ул. Фрунзе, 2",
        numberPhone: "+38 (050) 505-54-61",
    },
    {
        name: "Магазин в Одессе ул. Ранко, 86",
        numberPhone: "+38 (061) 505 54 611",
    },
];

export function FooterInformation(): JSX.Element {
    const renderItem = FotermInformationArr.map((item, i) => {
        const numberInLink = toNumberLink(item.numberPhone);
        if ("timeWork" in item) {
            return (
                <div key={i} className="flex flex-col gap-2 ">
                    <div className="text-xs 2xl:text-ms">{item.name}</div>
                    <a
                        className="transition-colors delay-100 text-base 2xl:text-lg font-medium hover:text-gray-dark"
                        href={`tell:${numberInLink}`}
                    >
                        {item.numberPhone}
                    </a>
                    <div className="text-xs 2xl:text-ms text-gray-dark">
                        {item.timeWork}
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    key={i}
                    className="flex flex-col-reverse gap-2 row-start-2 row-end-3 "
                >
                    <a
                        className="transition-colors delay-100 text-xs 2xl:text-ms text-gray-dark hover:text-black"
                        href={`tell:${numberInLink}`}
                    >
                        {item.numberPhone}
                    </a>
                    <div className="text-sm 2xl:text-base">{item.name}</div>
                </div>
            );
        }
    });

    return (
        <div className="relative">
            <H className="mb-3" level={4}>
                Контакты
            </H>
            <div className="grid grid-cols-3 grid-rows-2 lg:gap-y-10 gap-y-2 gap-x-2 lg:gap-x-7">
                {renderItem}
            </div>
            <div className="text-lavander text-xs 2xl:text-sm hover:text-lavander-light cursor-pointer absolute top-[.3rem] right-1">
                Заказать звонок
            </div>
        </div>
    );
}

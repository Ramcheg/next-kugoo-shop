import { ReactNode } from "react";
import { IPhoneNumberDetails } from "./PhoneNumberDetailsProps";
import toNumberLink from "@/helpers/toNumberLink";

const phoneNumberArr: IPhoneNumberDetails[] = [
    { nameStructure: "Сервисный центр", numberPhone: "+38 (095) 350 76 92" },
    {
        nameStructure: "Оптовый отдел",
        numberPhone: "+38 (096) 281-64-52",
        workTime: "пн-сб 10:00 - 19:00",
    },
    {
        nameStructure: "Отдел рекламаций и претензий",
        numberPhone: "+38 (050) 350 76 92",
        workTime: "ср-вс с 10:00 до 19:00",
    },
];

export default function PhoneNumberDetails(): JSX.Element {
    const renderItem = phoneNumberArr.map((item, i) => {
        const link = toNumberLink(item.numberPhone);
        let time: ReactNode;
        if ("workTime" in item && item.workTime) {
            time = <div className="text-xs 2xl:text-base">{item.workTime}</div>;
        }

        return (
            <div key={i}>
                <div className="mt-[0.94rem] mx-[1.25rem]">
                    <div className="mb-[0.94rem]">
                        <p className="text-xs 2xl:text-base">
                            {item.nameStructure}
                        </p>
                        <a
                            className="font-bold text-base 2xl:text-lg "
                            href={`tell:+${link}`}
                        >
                            {item.numberPhone}
                        </a>
                        {time ? time : ""}
                    </div>
                </div>
                <hr />
            </div>
        );
    });

    return (
        <div className=" z-20 w-64 2xl:w-72 h-[15.4rem] 2xl:h-[20.1rem] rounded-tr-3xl bg-gray-light absolute right-2 top-3 2xl:top-5">
            {renderItem}
        </div>
    );
}

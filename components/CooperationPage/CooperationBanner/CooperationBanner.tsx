"use client";

import { Button, H, Input, InputPhone } from "@/components";
import { FC, FormEvent, useEffect } from "react";

import Link from "next/link";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";
import { cooperationBannerData } from "./CooperationBannerData";
const fakeData = [{}, {}, {}, {}];

export const CooperationBanner: FC = () => {
    const fakeOpModal = () => {};

    const {
        errorText,
        handleSubmitForm,
        numberPhone,
        setNumberPhone,
        success,
    } = usePostModalNumber(fakeOpModal, "MessagePriceList");

    useEffect(() => {
        if (success) {
            const link = document.createElement("a");
            link.href =
                "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/Files%2FfakePriceList.rar?alt=media&token=1d98a749-4a74-4bd1-a4c1-5a3c38ec3162";
            link.click();
        }
    }, [success]);

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleSubmitForm(event);
    };
    return (
        <div className="containerBig bg-gray-light rounded-lg">
            <div className="container mx-auto">
                <div className="flex items-center py-10 gap-6 md:gap-20 md:flex-row flex-col">
                    <div className="w-full md:w-2/3 py-5 pl-3">
                        <H level={1}>
                            Покупайте товары Kugoo по оптовым ценам от
                            официального дилера
                        </H>
                        <div className="text-lg mt-2">
                            Ваша прибыль — до 25% от закупочной стоимости 1
                            единицы товара
                        </div>
                        <div className="hidden md:flex flex-wrap gap-8 md:w-3/4 mt-9">
                            {cooperationBannerData.map(
                                ({ descr, icon, id }) => (
                                    <div
                                        className="flex items-center gap-3"
                                        key={id}
                                    >
                                        <div className="bg-lavander-light/20 rounded-lg p-3">
                                            {icon}
                                        </div>
                                        <div className="w-[10rem] text-sm font-medium">
                                            {descr}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="bg-lavander rounded-lg max-w-[25rem] py-5">
                        <div className="w-2/3 text-center text-white mx-auto ">
                            <div className="text-lg 2xl:text-xl font-semibold uppercase">
                                Получите прайс-лист с оптовыми ценами
                            </div>
                            <div className="text-sm mt-2">
                                а также рассчитаем вашу прибыль от продажи
                                товаров Kugoo
                            </div>
                        </div>
                        <form onSubmit={(e) => submitForm(e)} action="">
                            <div className="flex flex-col gap-6 px-5 mt-7">
                                <InputPhone
                                    className="text-white 2xl:w-full bg-white/20 border-transparent placeholder:text-white"
                                    onChange={(e) =>
                                        setNumberPhone(e.target.value)
                                    }
                                    value={numberPhone}
                                />
                                <Button
                                    className="border-transparent text-lavander"
                                    typeButton="submit"
                                    color="white"
                                    size="small"
                                >
                                    Скачать прайс-лист
                                </Button>
                                {success && (
                                    <div className="text-center text-white text-xl mt-2">
                                        Спасибо
                                    </div>
                                )}
                                {errorText && (
                                    <div className="text-center  text-xl mt-2 text-red-400">
                                        {errorText}
                                    </div>
                                )}
                                <label className="flex gap-2  items-center">
                                    <Input
                                        inputType="checkbox"
                                        nameInput="policy"
                                        colorChackbox="white"
                                        required
                                    />
                                    <div className="text-white text-xs">
                                        Нажимая на кнопку, вы соглашаетесь на
                                        обработку персональных данных и{" "}
                                        <Link
                                            className="underline"
                                            href="/policy"
                                        >
                                            политикой конфиденциальности
                                        </Link>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

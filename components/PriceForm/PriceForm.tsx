"use client";

import Link from "next/link";
import { FC, FormEvent, useEffect } from "react";
import { Button, Input, InputPhone } from "..";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";

interface IPriceFormProps {
    borderColor: "white" | "none";
}

export const PriceForm: FC<IPriceFormProps> = ({ borderColor }) => {
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
        <div
            className={`bg-lavander rounded-lg mx-auto max-w-[98%] sm:max-w-[25rem] py-5 ${
                borderColor === "white"
                    ? "border border-solid border-gray-light"
                    : ""
            }`}
        >
            <div className="w-2/3 text-center text-white mx-auto ">
                <div className="text-lg 2xl:text-xl font-semibold uppercase">
                    Получите прайс-лист с оптовыми ценами
                </div>
                <div className="text-sm mt-2">
                    а также рассчитаем вашу прибыль от продажи товаров Kugoo
                </div>
            </div>
            <form onSubmit={(e) => submitForm(e)} action="">
                <div className="flex flex-col gap-6 px-5 mt-7">
                    <InputPhone
                        className="text-white 2xl:w-full bg-white/20 border-transparent placeholder:text-white"
                        onChange={(e) => setNumberPhone(e.target.value)}
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
                            checked
                        />
                        <div className="text-white text-xs">
                            Нажимая на кнопку, вы соглашаетесь на обработку
                            персональных данных и{" "}
                            <Link className="underline" href="/policy">
                                политикой конфиденциальности
                            </Link>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    );
};

"use client";

import Image from "next/image";

import managerImg from "@/public/menengerWoman.png";
import Link from "next/link";
import { Button, H, Input, InputPhone, ModalWrapperCenter } from "..";
import { FormEvent, useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import toNumberLink from "@/helpers/toNumberLink";
import { getCurrentDateTime } from "@/helpers/getCurrentTime";

export function ManagerModalPanel({
    onOpenModal,
    openModal,
}: {
    onOpenModal: () => void;
    openModal: boolean;
}): JSX.Element {
    const [numberPhone, setNumberPhone] = useState<string>("");
    const [success, setSucces] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");

    useEffect(() => {
        setErrorText("");
    }, [numberPhone]);

    useEffect(() => {
        if (success) {
            const closeTime = setTimeout(() => {
                setSucces(false);
                onOpenModal();
                setNumberPhone("");
            }, 3000);

            return () => {
                clearTimeout(closeTime);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        setErrorText("");
        e.preventDefault();
        const transformNumber: string = toNumberLink(numberPhone).toString();
        try {
            const colectionStor = collection(db, "ManengerDB");
            const reqStor = query(
                colectionStor,
                where("numberPhone", "==", transformNumber)
            );
            const storArr = await getDocs(reqStor);

            if (storArr.size === 0 && transformNumber.length >= 13) {
                const data = getCurrentDateTime();
                await addDoc(colectionStor, {
                    data,
                    numberPhone: transformNumber,
                });
                setSucces(true);
            } else if (transformNumber.length <= 13) {
                setErrorText(
                    "Ошибка! Проверте правильно ли ввели номер телефона"
                );
            } else {
                setSucces(true);
            }
        } catch {
            setErrorText(
                "Ошибка! Поблемма с отправкой на сервер... приносим свои извинения"
            );
        }
    };

    if (success) {
        return (
            <ModalWrapperCenter openModal={openModal}>
                <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-10">
                    <div className="w-[100%]  m-8">
                        <H level={3}>Менеджер позвонит вам в течение 5 минут</H>
                        <div className="mx-auto text-2xl animate-pulse mt-4 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white">
                            &#10004;
                        </div>
                    </div>
                </div>
            </ModalWrapperCenter>
        );
    }

    return (
        <ModalWrapperCenter openModal={openModal}>
            <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-10">
                <div className="w-[100%] lg:w-[60%] m-8">
                    <H level={3}>Менеджер позвонит вам в течение 5 минут</H>
                    <div className="mt-2">
                        ответит на все вопросы и проконсультирует по продуктам
                        Kugoo
                    </div>
                    <form
                        onSubmit={(e) => handleSubmitForm(e)}
                        action="forEmail"
                        className="mt-6"
                    >
                        <InputPhone
                            onChange={(e) => setNumberPhone(e.target.value)}
                            value={numberPhone}
                        />
                        <Button
                            color="lavander"
                            size="middle"
                            typeButton="submit"
                            className="mt-4"
                        >
                            Позвоните мне
                        </Button>
                        {errorText && (
                            <div className="text-red-400 text-sm">
                                {errorText}
                            </div>
                        )}
                        <label className="flex items-center mt-4 gap-3">
                            <Input
                                isRequired
                                inputType="checkbox"
                                nameInput="policy"
                            />
                            <div className="w-3/4">
                                Нажимая на кнопку, вы соглашаетесь на обработку
                                персональных данных
                                <Link
                                    className="text-lavander-light ml-1"
                                    href={"/policy"}
                                >
                                    политикой конфиденциальности
                                </Link>
                            </div>
                        </label>
                    </form>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src={managerImg}
                        alt="manager"
                        width={406}
                        height={428}
                    />
                </div>
                <div
                    className="absolute right-10 top-6 text-2xl cursor-pointer hover:text-lavander "
                    onClick={() => onOpenModal()}
                >
                    &#10006;
                </div>
            </div>
        </ModalWrapperCenter>
    );
}

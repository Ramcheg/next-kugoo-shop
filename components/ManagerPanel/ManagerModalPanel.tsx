"use client";

import Image from "next/image";

import managerImg from "@/public/menengerWoman.png";
import Link from "next/link";
import { Button, H, Input, ModalWrapperCenter } from "..";

export function ManagerModalPanel({
    onOpenModal,
    openModal,
}: {
    onOpenModal: () => void;
    openModal: boolean;
}): JSX.Element {
    return (
        <ModalWrapperCenter openModal={openModal}>
            <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-10">
                <div className="w-[100%] lg:w-[60%] m-8">
                    <H level={3}>Менеджер позвонит вам в течение 5 минут</H>
                    <div className="mt-2">
                        ответит на все вопросы и проконсультирует по продуктам
                        Kugoo
                    </div>
                    <form action="forEmail" className="mt-6">
                        <Input
                            inputType="tel"
                            placeholderInput="+380 (__) __ - __ - ___"
                            nameInput="phone"
                            className="w-full  2xl:w-2/3"
                        />
                        <Button
                            color="lavander"
                            size="middle"
                            typeButton="submit"
                            className="mt-4"
                        >
                            Позвоните мне
                        </Button>
                        <label className="flex items-center mt-4 gap-3">
                            <Input inputType="checkbox" nameInput="policy" />
                            <div className="w-3/4">
                                Нажимая на кнопку, вы соглашаетесь на обработку
                                персональных данных
                                <Link
                                    className="text-lavander-light"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, H, Input, ModalWrapperCenter } from "..";

export function ModalProduct({
    onOpenModal,
}: {
    onOpenModal: () => void;
}): JSX.Element {
    return (
        <ModalWrapperCenter openModal>
            <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-12">
                <div className="w-[100%] lg:w-[60%] m-8">
                    <H level={3}>
                        Оформите предзаказ на электросамокат Kugoo Kirin M4
                    </H>
                    <div className="mt-2">
                        Сообщим вам, когда товар появится в наличии
                    </div>
                    <form action="forEmail" className="mt-6">
                        <Input
                            inputType="tel"
                            placeholderInput="+380 (__) __ - __ - ___"
                            nameInput="phone"
                            className="w-full lg:w-2/3"
                        />
                        <Button
                            color="orange"
                            size="middle"
                            typeButton="submit"
                            className="mt-4"
                        >
                            Оформить предзаказ
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
                        src="https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FImage%2F347658975-i.webp?alt=media&token=69d817de-d4da-433f-ba37-878cf2a4fdbf"
                        alt="skuter"
                        width={450}
                        height={630}
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

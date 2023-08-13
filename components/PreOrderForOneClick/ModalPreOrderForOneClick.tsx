"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, H, Input, InputPhone, ModalWrapperCenter } from "..";
import { IPoductModalProps } from "@/interfaces/modalInterfaces";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";

export function ModalPreOrderForOneClick({
    product: { mainImg, name, id },
    onOpenModal,
}: {
    onOpenModal: () => void;
    product: IPoductModalProps;
}): JSX.Element {
    const {
        errorText,
        handleSubmitForm,
        numberPhone,
        setNumberPhone,
        success,
    } = usePostModalNumber(onOpenModal, "PreOrderProductDB", name, id);

    if (success) {
        return (
            <ModalWrapperCenter openModal>
                <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-10">
                    <div className="w-[100%]  m-8 text-center">
                        <H level={3}>
                            Спасибо за предзаказ. С вами свяжутся в ближайшее
                            время
                        </H>
                        <div className="mx-auto text-2xl animate-pulse mt-4 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white">
                            &#10004;
                        </div>
                    </div>
                </div>
            </ModalWrapperCenter>
        );
    }

    return (
        <ModalWrapperCenter openModal>
            <div className="flex flex-col lg:flex-row items-center gap-6 m-20 lg:m-12">
                <div className="w-[100%] lg:w-[60%] m-8">
                    <H level={3}>
                        {`Оформите предзаказ на электросамокат ${name}`}
                    </H>
                    <div className="mt-2">
                        Сообщим вам, когда товар появится в наличии
                    </div>
                    <form
                        action="forEmail"
                        className="mt-6"
                        onSubmit={(e) => handleSubmitForm(e)}
                    >
                        <InputPhone
                            onChange={(e) => setNumberPhone(e.target.value)}
                            value={numberPhone}
                        />
                        <div className="text-red-400">{errorText}</div>
                        <Button
                            color="orange"
                            size="middle"
                            typeButton="submit"
                            className="mt-4"
                        >
                            Оформить предзаказ
                        </Button>
                        <label className="flex items-center mt-4 gap-3">
                            <Input
                                inputType="checkbox"
                                nameInput="policy"
                                required
                            />
                            <div className="w-3/4">
                                Нажимая на кнопку, вы соглашаетесь на обработку
                                персональных данных
                                <Link
                                    className="text-lavander-light"
                                    href={"/policy"}
                                >
                                    <span> политикой конфиденциальности</span>
                                </Link>
                            </div>
                        </label>
                    </form>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src={mainImg}
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

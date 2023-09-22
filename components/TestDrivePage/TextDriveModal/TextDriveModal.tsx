"use client";

import { Button, H, Input } from "@/components";
import { InputPhone } from "@/components/InputPhone/InputPhone";
import { ModalWrapperCenter } from "@/components/ModalWrapperCenter/ModalWrapperCenter";
import Image from "next/image";
import { FC } from "react";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";

import photoImg from "@/public/testDrivePage/TestDriveModal.png";
import Link from "next/link";
import { ButtonSocial } from "@/components/ButtonSocial/ButtonSocial";
import CloseIcon from "@mui/icons-material/Close";

interface ITextDriveModalProps {
    isOpen: boolean;
    onChangeMenu: () => void;
}

export const TextDriveModal: FC<ITextDriveModalProps> = ({
    isOpen,
    onChangeMenu,
}) => {
    const {
        errorText,
        handleSubmitForm,
        numberPhone,
        setNumberPhone,
        success,
    } = usePostModalNumber(onChangeMenu, "TestDrive");

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
        <ModalWrapperCenter openModal={isOpen}>
            <div className="flex justify-between p-10 relative">
                <div className="w-full md:w-5/12">
                    <div className="text-black">
                        <H level={3}>
                            Запишитесь на тест-драйв электросамоката
                        </H>
                        <p className="mt-2">и подберите модель для себя</p>
                        <p className="mt-5 text-sm">
                            Менеджер свяжется с вами в течение 5 минут, чтобы
                            согласовать время.
                        </p>
                        <p className="mt-3 sm:mt-6 text-gray-600">
                            Как с вами удобнее связаться?
                        </p>
                    </div>
                    <form onSubmit={handleSubmitForm} className="mt-2">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3">
                                <ButtonSocial typeIcon="phone" />
                                <ButtonSocial typeIcon="whatsapp" />
                                <ButtonSocial typeIcon="telegram" />
                            </div>
                            <InputPhone
                                onChange={(e) => setNumberPhone(e.target.value)}
                                value={numberPhone}
                                className="2xl:w-full"
                            />
                            <Button
                                size="small"
                                color="lavander"
                                typeButton="submit"
                            >
                                Оформить предзаказ
                            </Button>
                            <div className="text-red-400">{errorText}</div>

                            <label>
                                <div className="flex gap-1 md:gap-2">
                                    <Input
                                        inputType="checkbox"
                                        nameInput="policy"
                                        className="mt-3"
                                        required
                                    />
                                    <div className="text-black text-sm/4">
                                        Нажимая на кнопку, вы соглашаетесь на
                                        обработку персональных данных и
                                        <Link
                                            className="text-lavander hover:text-lavander-light"
                                            href={"/policy"}
                                        >
                                            {" "}
                                            политикой конфиденциальности
                                        </Link>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="hidden md:block w-5/12 relative ">
                    <Image
                        className="rounded-lg "
                        src={photoImg}
                        alt="woman on Scooter"
                    />
                    <div className="text-black absolute top-4 right-0 bg-white py-4 px-3 w-[11rem] text-xs text-center rounded-lg">
                        В сентябре{" "}
                        <span className="text-orange-dark">
                            осталось 5 мест
                        </span>{" "}
                        на бесплатный тест-драйв
                    </div>
                </div>
                <div
                    className="absolute right-3 top-3 cursor-pointer "
                    onClick={onChangeMenu}
                >
                    <CloseIcon color="primary" />
                </div>
            </div>
        </ModalWrapperCenter>
    );
};

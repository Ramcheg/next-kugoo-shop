"use client";

import { Button, H, Input, InputPhone, ModalWrapperCenter } from "@/components";
import { ButtonSocial } from "@/components/ButtonSocial/ButtonSocial";
import Link from "next/link";

import { FC, FormEvent, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";
interface IServiceFindReasonModalProps {
    isOpenModal: boolean;
    onOpenModal: () => void;
}

export const ServiceFindReasonModal: FC<IServiceFindReasonModalProps> = ({
    isOpenModal,
    onOpenModal,
}) => {
    const {
        errorText,
        handleSubmitForm,
        numberPhone,
        setNumberPhone,
        success,
    } = usePostModalNumber(onOpenModal, "DiagnosticDB");

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
        <ModalWrapperCenter openModal={isOpenModal}>
            <div className="p-5 sm:p-10 relative">
                <div className="w-3/4">
                    <H level={3}>
                        Запишитесь на диагностику и получите оценку стоимости и
                        сроков ремонта
                    </H>
                    <div className="pt-3 text-xs md:text-base">
                        Оставьте свой номер, менеджер свяжется с вами в течение
                        5 минут, чтобы уточнить проблему.
                    </div>
                </div>
                <div className="mt-7 text-xs text-gray-dark">
                    Как с вами удобнее связаться?
                </div>
                <form className="mt-2" onSubmit={(e) => handleSubmitForm(e)}>
                    <div>
                        <div className="flex justify-between gap-7 flex-col xl:flex-row">
                            <div className="hidden sm:flex gap-4">
                                <ButtonSocial typeIcon="phone" />
                                <ButtonSocial typeIcon="whatsapp" />
                                <ButtonSocial typeIcon="telegram" />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <InputPhone
                                    required
                                    onChange={(e) =>
                                        setNumberPhone(e.target.value)
                                    }
                                    value={numberPhone}
                                />
                                <div className="text-red-400">{errorText}</div>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-10 items-center mt-5 flex-col sm:flex-row">
                            <Button
                                size="small"
                                color="lavander"
                                className="w-1/2"
                                typeButton="submit"
                            >
                                Записаться
                            </Button>
                            <label className="w-1/2 flex flex-row-reverse gap-3 items-baseline ">
                                <p className="text-sm/4">
                                    Нажимая на кнопку, вы соглашаетесь на
                                    обработку персональных данных и{" "}
                                    <Link
                                        className="text-lavander-light"
                                        href={"/policy"}
                                    >
                                        <span>
                                            политикой конфиденциальности
                                        </span>
                                    </Link>
                                </p>
                                <Input
                                    inputType="checkbox"
                                    nameInput="cofident"
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </form>
                <div className="cursor-pointer" onClick={onOpenModal}>
                    <CloseIcon className="transition-all duration-100 hover:fill-lavander absolute right-4 top-4" />
                </div>
            </div>
        </ModalWrapperCenter>
    );
};

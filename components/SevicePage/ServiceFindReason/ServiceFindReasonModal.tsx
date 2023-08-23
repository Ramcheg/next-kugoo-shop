"use client";

import { Button, H, Input, InputPhone, ModalWrapperCenter } from "@/components";
import { ButtonSocial } from "@/components/ButtonSocial/ButtonSocial";

import { FC } from "react";

interface IServiceFindReasonModalProps {
    isOpenModal: boolean;
}

export const ServiceFindReasonModal: FC<IServiceFindReasonModalProps> = ({
    isOpenModal,
}) => {
    return (
        <ModalWrapperCenter openModal={isOpenModal}>
            <div className="p-10 ">
                <H level={3}>
                    Запишитесь на диагностику и получите оценку стоимости и
                    сроков ремонта
                </H>
                <span>
                    Оставьте свой номер, менеджер свяжется с вами в течение 5
                    минут, чтобы уточнить проблему.
                </span>
                <span>Как с вами удобнее связаться?</span>
                <form action="">
                    <div>
                        <div className="flex justify-between gap-7">
                            <div className="flex gap-4">
                                <ButtonSocial typeIcon="phone" />
                                <ButtonSocial typeIcon="whatsapp" />
                                <ButtonSocial typeIcon="telegram" />
                            </div>
                            <div className="flex-1">
                                <InputPhone />
                            </div>
                        </div>
                        <div className="flex gap-7">
                            <Button
                                size="small"
                                color="lavander"
                                className="w-1/2"
                            >
                                Записаться
                            </Button>
                            <label className="w-1/2">
                                <p>
                                    Нажимая на кнопку, вы соглашаетесь на
                                    обработку персональных данных и политикой
                                    конфиденциальности
                                </p>
                                <Input
                                    inputType="checkbox"
                                    nameInput="cofident"
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </ModalWrapperCenter>
    );
};

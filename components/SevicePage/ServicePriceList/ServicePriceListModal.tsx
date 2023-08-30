"use client";
import { FC, useEffect, useState, useId } from "react";
import {
    IServicePriceListItem,
    ServicePriceListBtnNameType,
} from "./ServicePriceListTypes";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";
import { H } from "@/components/H/H";
import { ButtonSocial } from "@/components/ButtonSocial/ButtonSocial";
import { InputPhone } from "@/components/InputPhone/InputPhone";
import { Button, Input, ModalWrapperCenter } from "@/components";
import Link from "next/link";

import CloseIcon from "@mui/icons-material/Close";
import { Autocomplete, Chip, TextField } from "@mui/material";

interface IServicePriceListModalProps {
    type: ServicePriceListBtnNameType;
    onOpenModal: () => void;
    ArrListItems: IServicePriceListItem[];
}

export const ServicePriceListModal: FC<IServicePriceListModalProps> = ({
    onOpenModal,
    type,
    ArrListItems,
}) => {
    const [arrList, SetArrList] = useState<string[]>([]);
    const [productName, SetProductName] = useState("");
    const [idx] = useState(useId());
    const title =
        type === "hidro"
            ? "Закажите гидроизоляцию и катайтесь на своем самокате в любую погоду!"
            : type === "setting"
            ? "Закажите настройку электросамоката перед покупкой"
            : "Закажите «настройку+гидроизоляцию» и сэкономьте до 1 000 руб.";
    const btnName =
        type === "hidro"
            ? "Записаться на диагностику"
            : type === "setting"
            ? "Заказать настройку"
            : "Заказать настройку и гидроизоляцию";

    useEffect(() => {
        let newItem: string[] = [];

        ArrListItems.forEach(({ name }) => {
            newItem.push(name);
        });
        SetArrList(newItem);
    }, [ArrListItems]);
    const {
        errorText,
        handleSubmitForm,
        numberPhone,
        setNumberPhone,
        success,
    } = usePostModalNumber(
        onOpenModal,
        `ServicesDB`,
        productName,
        `${type}:${idx}`
    );

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
        <div className="p-10 relative">
            <H level={3} className="text-center">
                {title}
            </H>
            <p className="text-center text-sm md:text-base">
                Оставьте номер, менеджер свяжется с вами в течение 5 минут
            </p>
            <form onSubmit={handleSubmitForm}>
                <div className="text-xs">Как с вами удобнее связаться?</div>
                <div className="grid grid-rows-2 auto-rows-fr grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 items-center">
                    <div className="">
                        <Autocomplete
                            onChange={(e, newValue) =>
                                SetProductName(newValue ? newValue : "")
                            }
                            disablePortal
                            options={arrList}
                            sx={{ width: "100%" }}
                            renderOption={(props, option) => {
                                return (
                                    <li {...props} key={option}>
                                        {option}
                                    </li>
                                );
                            }}
                            renderTags={(tagValue, getTagProps) => {
                                return tagValue.map((option, index) => (
                                    <Chip
                                        {...getTagProps({ index })}
                                        key={option}
                                        label={option}
                                    />
                                ));
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Выберите модель"
                                    required
                                />
                            )}
                        />
                    </div>
                    <div className=" flex justify-between items-center flex-wrap gap-2">
                        <ButtonSocial typeIcon="phone" />
                        <ButtonSocial typeIcon="whatsapp" />
                        <ButtonSocial typeIcon="telegram" />
                    </div>
                    <div className="">
                        <InputPhone
                            className="2xl:w-full"
                            onChange={(e) => setNumberPhone(e.target.value)}
                            value={numberPhone}
                        />
                        {errorText && (
                            <div className="text-red-400">{errorText}</div>
                        )}
                    </div>
                    <div className="">
                        <Button
                            className="w-full"
                            color="lavander"
                            size="middle"
                            typeButton="submit"
                        >
                            {btnName}
                        </Button>
                    </div>
                </div>
                <label className="flex justify-center  w-full md:w-6/12 mx-auto gap-3 mt-5">
                    <div>
                        <Input
                            inputType="checkbox"
                            nameInput="policy"
                            required
                        />
                    </div>
                    <div>
                        Нажимая на кнопку, вы соглашаетесь на обработку
                        персональных данных и
                        <Link className="text-lavander" href={"/policy"}>
                            {" "}
                            политикой конфиденциальности
                        </Link>
                    </div>
                </label>
            </form>
            <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={onOpenModal}
            >
                <CloseIcon className="hover:fill-lavander" />
            </div>
        </div>
    );
};

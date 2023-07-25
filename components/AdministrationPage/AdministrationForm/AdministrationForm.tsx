"use client";

import { Button } from "@/components";
import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import {
    inputBotArr,
    inputTopArr,
    picturesElectorSamocat,
    thumbnailsElectroSamocat,
} from "./AdministrationFormArr";
import { IProduct, IProductDescription } from "@/interfaces/productInterface";
import { IInputArr, NameIdType } from "./AdministrationFormTypes";
import { AdministrationFormItem } from "./AdministrationFormItem";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export function AdministrationForm(): JSX.Element {
    const [isDescrOpen, setIsDescrOpen] = useState<boolean>(false);
    const [area, setArea] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [succeess, setSucceess] = useState<boolean>(false);
    const [succeessModal, setSucceessModal] = useState<boolean>(false);

    const [fromDescriptionData, setFormDescriptioData] =
        useState<IProductDescription>({
            backlighting: "",
            battary: "",
            brakeSystem: "",
            dimensions: "",
            drive: "",
            equipment: "",
            maxMileage: "",
            maxWeight: "",
            power: "",
            powerBattary: "",
            sizeTire: "",
            speed: "",
            timeBattary: "",
            typeTire: "",
            warranty: "",
            weight: "",
        });
    const [formData, setFormData] = useState<IProduct>({
        aboutProduct: "",
        createdData: Timestamp.fromDate(new Date()),
        descriptionProduct: fromDescriptionData,
        features: [""],
        name: "",
        picture: picturesElectorSamocat,
        mainImg:
            "https://firebasestorage.googleapis.com/v0/b/kugoo-shop.appspot.com/o/ElectroSamokat%2FFront%2F34765898-f.webp?alt=media&token=1ab93e1c-7075-42b4-a04b-d646ddc86083",
        price: "",
        sale: "",
        thumpnail: thumbnailsElectroSamocat,
        featureForProduct: "Внедорожный",
        forWrom: "Для детей и подростков",
        typeTransportare: "Электросамокаты",
    });

    const addInArr = (arg: string, name: NameIdType): void => {
        if (name in formData && name !== "features") {
            setFormData((prevData) => {
                return {
                    ...prevData,
                    [name]: arg,
                };
            });
        } else if (name === "features") {
            const transformInObj = arg.split(",");
            setFormData((prevData) => {
                return {
                    ...prevData,
                    descriptionProduct: fromDescriptionData,
                    ["features"]: transformInObj,
                };
            });
        } else {
            setFormDescriptioData((prevData) => {
                return {
                    ...prevData,
                    [name]: arg,
                };
            });
            setFormData((prevData) => {
                return {
                    ...prevData,
                    descriptionProduct: {
                        ...prevData.descriptionProduct,
                        [name]: arg,
                    },
                };
            });
        }
    };

    function setSucc(e: boolean) {
        setSucceess(e);
    }

    const renderItem = (arr: IInputArr[]): ReactNode => {
        return arr.map((item, i) => {
            return (
                <AdministrationFormItem
                    addInArr={addInArr}
                    key={`${i}-input`}
                    {...item}
                    succeess={succeess}
                    setSucc={setSucc}
                />
            );
        });
    };

    const onOpenDescr = () => {
        setIsDescrOpen((isDescrOpen) => !isDescrOpen);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(false);
        setSucceess(false);
        setSucceessModal(true);
        try {
            await addDoc(collection(db, "Products"), formData);
            setSucceess(true);
            setFormDescriptioData(() => {
                return {
                    backlighting: "",
                    battary: "",
                    brakeSystem: "",
                    dimensions: "",
                    drive: "",
                    equipment: "",
                    maxMileage: "",
                    maxWeight: "",
                    power: "",
                    powerBattary: "",
                    sizeTire: "",
                    speed: "",
                    timeBattary: "",
                    typeTire: "",
                    warranty: "",
                    weight: "",
                };
            });
            setFormData((prevData) => {
                return {
                    ...prevData,
                    aboutProduct: "",
                    createdData: Timestamp.fromDate(new Date()),
                    descriptionProduct: fromDescriptionData,
                    features: [""],
                    name: "",
                    price: "",
                    sale: "",
                };
            });
            setArea("");
        } catch {
            setError(true);
        }
    };

    const topItems = renderItem(inputTopArr);
    const botItems = renderItem(inputBotArr);

    function onChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>): void {
        setArea(e.target.value);
        addInArr(e.target.value, "aboutProduct");
    }

    return (
        <>
            <form
                name="AddProduct"
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
            >
                <div className="my-10 flex gap-5">{topItems}</div>
                <div
                    className="flex text-lavander-light cursor-pointer bg-gray-200 p-4  rounded-lg"
                    onClick={onOpenDescr}
                >
                    {`Описание товара ${isDescrOpen ? "⬆" : "⬇"}`}
                </div>
                <div
                    className={`mt-10  auto-cols-auto grid-cols-2 gap-5 ${
                        isDescrOpen ? "grid" : "hidden"
                    }`}
                >
                    {botItems}

                    <textarea
                        name="description"
                        placeholder="описание товара"
                        className=" px-5 text-xl py-6 col-span-2  border border-solid rounded-lg placeholder:text-xl"
                        value={area}
                        onChange={(e) => onChangeTextarea(e)}
                        required
                    ></textarea>
                </div>
                <Button
                    color="orange"
                    size="middle"
                    typeButton="submit"
                    className="my-10"
                >
                    Отправить
                </Button>
            </form>
            {succeessModal ? (
                <h3 className="text-center text-green-600 text-2xl -mt-6">
                    Успешно оправлено!
                    <span
                        className="cursor-pointer"
                        onClick={() => setSucceessModal(false)}
                    >
                        ❎
                    </span>
                </h3>
            ) : null}
            {error ? (
                <h3 className="text-center text-red-800 text-2xl -mt-6">
                    Ошибка, попробуйте снова через 10 минут
                    <span
                        className="cursor-pointer"
                        onClick={() => setError(false)}
                    >
                        ❎
                    </span>
                </h3>
            ) : null}
        </>
    );
}

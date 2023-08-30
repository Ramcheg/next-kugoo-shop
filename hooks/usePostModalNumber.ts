import { db } from "@/firebase/firebase";
import { getCurrentDateTime } from "@/helpers/getCurrentTime";
import toNumberLink from "@/helpers/toNumberLink";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";

export function usePostModalNumber(
    onOpenModal: () => void,
    firebaseCollection: string,
    product?: string,
    id?: string
) {
    const [numberPhone, setNumberPhone] = useState<string>("");
    const [success, setSucces] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");

    useEffect(() => {
        setErrorText("");
    }, [numberPhone]);

    useEffect(() => {
        if (success) {
            const closeTime = setTimeout(() => {
                onOpenModal();
                setNumberPhone("");
                setSucces(false);
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
            const colectionStor = collection(db, firebaseCollection);
            const reqStor = query(
                colectionStor,
                where("numberPhone", "==", transformNumber)
            );
            const storArr = await getDocs(reqStor);

            if (storArr.size === 0 && transformNumber.length >= 13) {
                const data = getCurrentDateTime();
                if (product) {
                    await addDoc(colectionStor, {
                        data,
                        numberPhone: transformNumber,
                        product: { id, product },
                    });
                } else {
                    await addDoc(colectionStor, {
                        data,
                        numberPhone: transformNumber,
                    });
                }

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

    return {
        handleSubmitForm,
        setNumberPhone,
        numberPhone,
        errorText,
        success,
    };
}

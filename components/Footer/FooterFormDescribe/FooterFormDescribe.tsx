"use client";
import { Button } from "@/components";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { getCurrentDateTime } from "@/helpers/getCurrentTime";

export function FooterFormDescribe(): JSX.Element {
    const [mail, setMail] = useState<string>("");
    const [textMsg, setTextMsg] = useState<string>("");
    const [isErorr, setError] = useState<boolean>(false);

    useEffect(() => {
        if (textMsg) {
            const cleaerMsg = setTimeout(() => {
                setTextMsg("");
            }, 3000);
            return () => {
                clearTimeout(cleaerMsg);
            };
        }
    }, [textMsg]);

    const handleChangeForm = async (e: FormEvent<HTMLFormElement>) => {
        setError(false);
        setTextMsg("");
        e.preventDefault();

        const reg =
            /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ua[a-z][a-z])$/;
        if (reg.test(mail)) {
            try {
                const colectionRef = collection(db, "MailingList");
                const q = query(colectionRef, where("email", "==", mail));
                const compareDate = await getDocs(q);

                if (compareDate.docs.length === 0) {
                    const data = getCurrentDateTime();
                    await addDoc(colectionRef, { email: mail, data });
                    setTextMsg("Спасибо за подписку");

                    setMail("");
                } else {
                    setTextMsg(`Вы уже подписались`);
                    setMail("");
                }
            } catch {
                setError(true);
                setTextMsg("Ошибка при отправке, попробуйте еще через 10мин");
            }
        } else {
            setError(true);
            setTextMsg("Такой почты не существет.");
        }
    };

    return (
        <form
            onSubmit={(e) => handleChangeForm(e)}
            className="flex flex-1 justify-between gap-5 flex-col lg:flex-row relative"
        >
            <input
                type="email"
                placeholder="Введите Ваш email"
                className="px-6 rounded flex-1 py-2 lg:py-4 bg-white/20 text-white 2xl:text-lg  placeholder:text-white placeholder:2xl:text-lg cursor: "
                onChange={(e) => setMail(e.target.value)}
                value={mail}
            />
            <Button color="white" size="small" typeButton="submit" onLavaner>
                Подписаться
            </Button>
            {textMsg && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className={`absolute left-4 -bottom-5  font-semibold ${
                        isErorr ? "text-red-300" : "text-green-300"
                    }`}
                >
                    {textMsg}
                </motion.div>
            )}
        </form>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { H } from "../H/H";
import { QuestionsAndAnswerItem } from "./QuestionsAndAnswerItem";

export interface IQaAArray {
    titleHead: string;
    descrtiption: string;
}

export function QuestionsAndAnswer({
    arrayQaA,
}: {
    arrayQaA: IQaAArray[];
}): JSX.Element {
    const [openDescr, setOpenDescr] = useState<boolean>(false);
    const desctRef = useRef<(HTMLDivElement | null)[]>([]);
    const [QaA, setQaA] = useState<IQaAArray[]>(arrayQaA);

    useEffect(() => {
        console.log("render");
        if (desctRef.current.length > 0) {
            console.log(desctRef.current);
        }
    }, [desctRef.current.length]);

    const onOpenDescription = (count: number) => {
        const currentItemText = desctRef.current[count]?.children[1];
        const currentItemPlus =
            desctRef.current[count]?.children[0].children[1];
        if (currentItemText && currentItemPlus) {
            currentItemText.classList.toggle("QaA-hidden");
            currentItemText.classList.toggle("QaA-active");
            currentItemPlus.classList.toggle("QaA_after-active");
        }
    };

    return (
        <div className="w-[340px] sm:w-[620px] lg:w-[900px] mx-auto text-center">
            <H level={2}>Отвечаем на вопросы покупателей</H>
            <div>
                {QaA.map((item, i) => {
                    return (
                        <QuestionsAndAnswerItem
                            {...item}
                            key={`${i}-item`}
                            isOpen={openDescr}
                            onOpenDescription={() => onOpenDescription(i)}
                            ref={(curentItem) =>
                                (desctRef.current[i] = curentItem)
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

{
    /* <QuestionsAndAnswerItem
key={`${i}-item`}
isOpen={openDescr}
onOpenDescription={() => onOpenDescription(i)}
ref={(curentItem) =>
    (desctRef.current[i] = curentItem)
} */
}

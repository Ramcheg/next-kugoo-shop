"use client";

import { useRef, useState } from "react";
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
    const desctRef = useRef<(HTMLDivElement | null)[]>([]);
    const [QaA, setQaA] = useState<IQaAArray[]>(arrayQaA);

    const onOpenDescription = (count: number) => {
        const currentItemText = desctRef.current[count]?.children[1];
        const currentItemPlus =
            desctRef.current[count]?.children[0].children[1];
        const currentItemTitle =
            desctRef.current[count]?.children[0].children[0];
        if (currentItemText && currentItemPlus && currentItemTitle) {
            currentItemText.classList.toggle("QaA-hidden");
            currentItemText.classList.toggle("QaA-active");
            currentItemPlus.classList.toggle("QaA_after-active");
            currentItemTitle.classList.toggle("QaA_title");
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

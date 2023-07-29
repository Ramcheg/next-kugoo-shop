"use client";

import { useState } from "react";
import { H } from "../H/H";
import { QuestionsAndAnswerItem } from "./QuestionsAndAnswerItem";

const duplicatArr = [{}, {}, {}];

export function QuestionsAndAnswer(): JSX.Element {
    const [openDescr, setOpenDescr] = useState<boolean>(false);

    const onOpenDescription = () => {
        setOpenDescr((prev) => !prev);
    };

    return (
        <div className="w-1/2 mx-auto text-center">
            <H level={2}>Отвечаем на вопросы покупателей</H>
            <div>
                {duplicatArr.map((arr, i) => {
                    return (
                        <QuestionsAndAnswerItem
                            isOpen={openDescr}
                            onClick={onOpenDescription}
                            key={`${i}-item`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

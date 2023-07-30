"use client";

import {
    DetailedHTMLProps,
    ForwardedRef,
    HTMLAttributes,
    forwardRef,
} from "react";
import "./QuestionsAndAnswer.scss";
import { IQaAArray } from "./QuestionsAndAnswer";

interface IQaAProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        IQaAArray {
    isOpen: boolean;
    onOpenDescription: () => void;
}

export const QuestionsAndAnswerItem = forwardRef(
    function QuestionsAndAnswerItem(
        {
            isOpen,
            onOpenDescription,
            descrtiption,
            titleHead,
            ...props
        }: IQaAProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element {
        return (
            <div {...props}>
                <div className="my-7" ref={ref}>
                    <div
                        className="flex justify-between gap-6"
                        onClick={onOpenDescription}
                    >
                        <div className="cursor-pointer text-base 2xl:text-lg font-medium">
                            {titleHead}
                        </div>

                        <div className={"QaA_after"}></div>
                    </div>
                    <div
                        className={`w-[90%] mt-4  text-left text-sm/5 2xl:text-base/5  transition-all delay-100 QaA-hidden`}
                    >
                        {descrtiption}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
);

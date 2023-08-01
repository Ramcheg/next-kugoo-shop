"use client";

import { useState } from "react";
import { ManagerModalPanel } from "./ManagerModalPanel";
import useOpenModal from "@/hooks/useOpenModal";

export function ManagerPanel(): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();
    return (
        <div className="w-[11rem] 2xl:w-[13rem]">
            <div className="text-xs 2xl:text-sm ">
                Менеджер ответит на любой ваш вопрос o продуктах Kugoo
            </div>
            <div
                className="transition-all delay-100 text-lavander font-medium text-xs 2xl:text-sm mt-1 cursor-pointer hover:scale-y-110"
                onClick={onOpenModal}
            >
                Задать вопрос
            </div>
            <ManagerModalPanel
                onOpenModal={onOpenModal}
                openModal={openModal}
            />
        </div>
    );
}

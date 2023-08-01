"use client";

import useOpenModal from "@/hooks/useOpenModal";
import { ManagerModalPanel } from "../ManagerPanel/ManagerModalPanel";

export function CallUsBtn(): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();
    return (
        <>
            <div
                className="transition-colors delay-100 hover:text-lavander cursor-pointer "
                onClick={onOpenModal}
            >
                Заказать звонок
            </div>
            <ManagerModalPanel
                openModal={openModal}
                onOpenModal={onOpenModal}
            />
        </>
    );
}

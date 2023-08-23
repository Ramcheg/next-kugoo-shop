"use client";

import { Button } from "@/components";
import useOpenModal from "@/hooks/useOpenModal";
import { FC } from "react";
import { ServiceFindReasonModal } from "./ServiceFindReasonModal";

export const ServiceFindReasonButton: FC = () => {
    const { onOpenModal, openModal } = useOpenModal();
    return (
        <>
            <Button
                size="small"
                color="white"
                className="border-transparent text-lavander mt-6"
                onClick={() => onOpenModal()}
            >
                Записаться на диагностику
            </Button>
            {openModal ? (
                <ServiceFindReasonModal isOpenModal={openModal} />
            ) : null}
        </>
    );
};

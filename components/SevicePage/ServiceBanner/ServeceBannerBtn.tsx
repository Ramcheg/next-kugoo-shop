"use client";
import { Button } from "@/components";
import useOpenModal from "@/hooks/useOpenModal";
import { FC } from "react";
import { ServiceFindReasonModal } from "../ServiceFindReason/ServiceFindReasonModal";

export const ServiceBannerBtn: FC = () => {
    const { onOpenModal, openModal } = useOpenModal();
    return (
        <>
            <Button
                className="text-orange-editible border-transparent mt-5 md:mt-10"
                size="small"
                color="white"
                onClick={() => onOpenModal()}
            >
                Записаться
            </Button>
            {openModal ? (
                <ServiceFindReasonModal
                    onOpenModal={onOpenModal}
                    isOpenModal={openModal}
                />
            ) : null}
        </>
    );
};

"use client";

import { Button } from "..";
import useOpenModal from "@/hooks/useOpenModal";
import { ModalPreOrderForOneClick } from "./ModalPreOrderForOneClick";
import { IPoductModalProps } from "@/interfaces/modalInterfaces";

export function PreOrderForOneClick({
    product: { id, mainImg, name },
}: {
    product: IPoductModalProps;
}): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();

    return (
        <>
            <Button
                onClick={() => {
                    onOpenModal();
                }}
                className="w-full"
                color="orange"
                size="small"
            >
                Оформить предзаказ
            </Button>
            {openModal ? (
                <ModalPreOrderForOneClick
                    product={{ mainImg, name, id }}
                    onOpenModal={onOpenModal}
                />
            ) : null}
        </>
    );
}

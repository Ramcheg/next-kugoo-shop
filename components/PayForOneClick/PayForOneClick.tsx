"use client";

import { Button } from "..";
import useOpenModal from "@/hooks/useOpenModal";
import { ModalPayForOneClick } from "./ModalPayForOneClick";
import { IPoductModalProps } from "@/interfaces/modalInterfaces";

export function PayForOneClick({
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
                color="lavander"
                size="small"
            >
                Купить в 1 клик
            </Button>
            {openModal ? (
                <ModalPayForOneClick
                    product={{ id, mainImg, name }}
                    onOpenModal={onOpenModal}
                />
            ) : null}
        </>
    );
}

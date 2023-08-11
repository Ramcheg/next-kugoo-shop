"use client";

import { Button, ModalProduct } from "..";
import useOpenModal from "@/hooks/useOpenModal";

export function PayForOneClick(): JSX.Element {
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
            {openModal ? <ModalProduct onOpenModal={onOpenModal} /> : null}
        </>
    );
}

"use client";

import { useState } from "react";
import { Button, ModalProduct } from "..";

export function PayForOneClick(): JSX.Element {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal((modal) => !modal);
    };

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

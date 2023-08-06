"use client";

import useOpenModal from "@/hooks/useOpenModal";
import { ManagerModalPanel } from "../ManagerPanel/ManagerModalPanel";
import { ComponentProps } from "react";
import classNames from "classnames";

interface ICallUsBtn extends ComponentProps<"div"> {}

export function CallUsBtn({ className, ...props }: ICallUsBtn): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();
    return (
        <>
            <div
                className={classNames(
                    "transition-colors delay-100 hover:text-lavander cursor-pointer",
                    className
                )}
                onClick={onOpenModal}
                {...props}
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

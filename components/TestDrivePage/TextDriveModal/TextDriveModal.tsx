import { ModalWrapperCenter } from "@/components/ModalWrapperCenter/ModalWrapperCenter";
import { FC } from "react";

interface ITextDriveModalProps {
    isOpen: boolean;
}

export const TextDriveModal: FC<ITextDriveModalProps> = ({ isOpen }) => {
    return (
        <ModalWrapperCenter openModal={isOpen}>
            <h1>Hello</h1>
        </ModalWrapperCenter>
    );
};

import { useState } from "react";

interface IUseOpenModalType {
    openModal: boolean;
    onOpenModal: () => void;
}

const useOpenModal = (): IUseOpenModalType => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal((modal) => !modal);
    };

    return { openModal, onOpenModal };
};

export default useOpenModal;

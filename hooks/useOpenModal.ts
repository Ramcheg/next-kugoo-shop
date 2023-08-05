import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IUseOpenModalType {
    openModal: boolean;
    onOpenModal: () => void;
}

const useOpenModal = (): IUseOpenModalType => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const path = usePathname();

    const onOpenModal = () => {
        setOpenModal((modal) => !modal);
    };

    useEffect(() => {
        setOpenModal(false);
    }, [path]);

    return { openModal, onOpenModal };
};

export default useOpenModal;

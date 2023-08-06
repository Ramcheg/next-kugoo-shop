"use client";

import { IPhoneNumber } from "./HeaderPhoneNumberProps";
import PulusIcon from "@/public/PlusTell.svg";
import "./HeaderPhoneNumber.scss";
import PhoneNumberDetails from "./PhoneNumberDetails/PhoneNumberDetails";
import useOpenModal from "@/hooks/useOpenModal";

export function HeaderPhoneNumber({
    widthIcon,
    ...props
}: IPhoneNumber): JSX.Element {
    const { onOpenModal, openModal } = useOpenModal();

    return (
        <div
            className="inline-flex gap-[0.56rem] items-center relative"
            {...props}
        >
            <a
                className="text-black text-xs 2xl:text-base font-bold"
                href="tel:+380953507692"
            >
                +38 (095) 350-76-92
            </a>
            {widthIcon ? (
                <PulusIcon
                    className={`plusIcon 2xl:w-[1.6rem] w-5 2xl:h-[1.6rem] h-5 cursor-pointer ${
                        openModal ? "plusIcon-active" : ""
                    }`}
                    onClick={onOpenModal}
                />
            ) : (
                ""
            )}
            <PhoneNumberDetails openModal={openModal} />
        </div>
    );
}

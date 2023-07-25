import { IPhoneNumber } from "./HeaderPhoneNumberProps";
import PulusIcon from "@/public/PlusTell.svg";
import "./HeaderPhoneNumber.scss";
import PhoneNumberDetails from "./PhoneNumberDetails/PhoneNumberDetails";

export function HeaderPhoneNumber({
    widthIcon,
    ...props
}: IPhoneNumber): JSX.Element {
    return (
        <div
            className="inline-flex gap-[0.56rem] items-center relative"
            {...props}
        >
            <a
                className="text-black text-xs 2xl:text-base font-bold"
                href="tell:+380953507692"
            >
                +38 (095) 350 76 92
            </a>
            {widthIcon ? (
                <PulusIcon className="plusIcon 2xl:w-[1.6rem] w-5 2xl:h-[1.6rem] h-5 cursor-pointer" />
            ) : (
                ""
            )}
            {/* <PhoneNumberDetails /> */}
        </div>
    );
}

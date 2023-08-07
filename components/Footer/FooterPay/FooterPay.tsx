import GooglePayIcon from "@/public/payIcon/GooglePay.svg";
import ApplePayIcon from "@/public/payIcon/ApplePay.svg";
import VisaIcon from "@/public/payIcon/Visa.svg";
import MasterCardIcon from "@/public/payIcon/masterCard.svg";
import MaestroIcon from "@/public/payIcon/maestro.svg";
import { IFooterPay } from "./FooterPayTypes";

const footerPayArr: IFooterPay[] = [
    { name: "googlePay", icon: <GooglePayIcon key={"policy1"} /> },
    { name: "applePay", icon: <ApplePayIcon key={"policy2"} /> },
    { name: "visa", icon: <VisaIcon key={"policy3"} /> },
    { name: "masterCard", icon: <MasterCardIcon key={"policy4"} /> },
    { name: "maestroCard", icon: <MaestroIcon key={"policy5"} /> },
];

export function FooterPay(): JSX.Element {
    const renderItems = footerPayArr.map(({ name, icon }) => {
        return (
            <div
                key={name}
                className="transition-all delay-75 py-[.47rem] px-[.3rem] bg-white border border-solid rounded border-gray-light"
            >
                {icon}
            </div>
        );
    });

    return <div className="flex gap-1">{renderItems}</div>;
}

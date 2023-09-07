import { FC } from "react";
import { serviceAdressArr } from "./ServiceAdressArr";
import { H } from "@/components";
import toNumberLink from "@/helpers/toNumberLink";

import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WarningIcon from "@mui/icons-material/Warning";

export const ServiceAdress: FC = () => {
    const renderDataAdr = serviceAdressArr.map(
        ({ adress, cityName, number, timeWork, control, id }) => {
            return (
                <div className="w-[20rem]" key={id}>
                    <address>
                        <H level={4}>{cityName}</H>
                        <div className="flex gap-3 mt-5">
                            <div>
                                <PlaceIcon color="primary" />
                            </div>
                            <div className="text-sm 2xl:text-base">
                                <div className=" font-medium">{adress}</div>
                                <div className="text-gray-dark ">
                                    {timeWork}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <div>
                                <LocalPhoneIcon color="primary" />
                            </div>
                            <div>
                                <a
                                    className="font-medium text-base 2xl:text-lg"
                                    href={`tel:${toNumberLink(number)}`}
                                >
                                    {number}
                                </a>
                            </div>
                        </div>
                        {control && (
                            <div className="flex gap-3 mt-5 items-center">
                                <div>
                                    <WarningIcon color="primary" />
                                </div>
                                <div className="text-sm 2xl:text-base">
                                    При себе иметь паспорт для прохождения через
                                    пропускной пункт
                                </div>
                            </div>
                        )}
                    </address>
                </div>
            );
        }
    );

    return (
        <div className="bg-gray-light rounded-lg">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center md:justify-between py-5 md:py-11 gap-5 w-[98%] md:w-full mx-auto">
                    {renderDataAdr}
                </div>
            </div>
        </div>
    );
};

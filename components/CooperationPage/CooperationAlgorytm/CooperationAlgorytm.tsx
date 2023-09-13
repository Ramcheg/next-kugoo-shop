import { H } from "@/components";
import Image from "next/image";
import { FC } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
    firstCooperationAlgData,
    secondCooperationAlgData,
} from "./CooperationAlgorytmData";
const fakeArr = [{}, {}, {}, {}];

export const CooperationAlgorytm: FC = () => {
    return (
        <div className="container mx-auto">
            <div className="w-4/5 mx-auto">
                <H className="text-center" level={2}>
                    Покупайте товар тогда, когда получите на него заказ и оплату
                    от своего клиента
                </H>
                <p className="text-center mt-3">
                    За 4 года разработали удобную схему дропшипинга
                </p>
            </div>
            <div className="flex justify-center gap-40 mt-12">
                {firstCooperationAlgData.map(({ icon, id, name }, i) => (
                    <div key={id}>
                        <div className="rounded-full w-[50px] h-[50px] bg-gray-light relative">
                            <Image className="" src={icon} alt={id} />
                            <ArrowRightAltIcon
                                color="primary"
                                className={
                                    i === fakeArr.length - 1
                                        ? "absolute left-1/2 -translate-x-1/2 -bottom-28 rotate-90"
                                        : "absolute top-1/2 -translate-y-1/2 -right-24"
                                }
                                sx={{ fontSize: "3rem" }}
                            />
                        </div>
                        <div className="font-medium text-center mt-4">
                            {name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-40 mt-28">
                {secondCooperationAlgData.map(({ icon, id, name }, i) => (
                    <div key={id}>
                        <div className="rounded-full px-6 py-6 bg-gray-light relative">
                            <Image src={icon} alt={id} />
                            <ArrowRightAltIcon
                                color="primary"
                                className={
                                    i === fakeArr.length - 1
                                        ? "hidden absolute"
                                        : "absolute top-1/2 -translate-y-1/2 -right-24 -rotate-180"
                                }
                                sx={{
                                    fontSize:
                                        i === fakeArr.length - 1
                                            ? "0rem"
                                            : "3rem",
                                }}
                            />
                        </div>
                        <div className="font-medium text-center mt-4">
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

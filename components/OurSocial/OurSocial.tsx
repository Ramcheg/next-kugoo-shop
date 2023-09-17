"use client";

import Link from "next/link";
import { FC } from "react";
import formatNumber from "@/helpers/formatNumber";
import { ourSocualArr } from "./OurSocialData";
import classNames from "classnames";

export const OurSocial: FC = () => {
    return (
        <div className="bg-gray-light rounded-lg w-[19rem] sm:w-[23rem]">
            <nav className="py-7 px-8">
                <ul className="flex flex-col gap-2">
                    {ourSocualArr.map(({ folovers, icon, link, name }) => (
                        <li key={name}>
                            <Link href={link}>
                                <div
                                    className={classNames(
                                        "rounded-lg flex justify-between items-center gap-5 px-4 py-3 text-white",
                                        {
                                            ["bg-gradient-to-tr from-[#FFC107] from-10% via-[#F44336] via-45% to-[#9C27B0] to-95%"]:
                                                name === "Instagram",
                                            ["bg-[#E53935]"]:
                                                name === "YouTube",
                                            ["bg-[#039BE5]"]:
                                                name === "Telegram",
                                        }
                                    )}
                                >
                                    <div>{icon}</div>
                                    <div className="flex-1">Instagram</div>
                                    <div>{formatNumber(folovers)}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

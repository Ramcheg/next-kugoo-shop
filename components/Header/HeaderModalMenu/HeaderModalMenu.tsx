import Link from "next/link";
import "./HeaderModalMenuStyle.scss";

import { modalMenu } from "./HeaderModalMenuArr";

export function HeaderModalMenu(): JSX.Element {
    const renderTreeMenu = modalMenu.map(({ icon, link, name, secondLvl }) => {
        return (
            <li className="del" key={link}>
                <h3 className=" 2xl:text-lg text-base font-medium ">
                    <Link
                        href={`/catalog/${link}`}
                        className={`transition-all delay-100 hover:text-lavander hoverLavanderTitle font-medium`}
                    >
                        <div className="flex ml-1 items-center  gap-2 ">
                            {icon}
                            {name}
                        </div>
                    </Link>
                </h3>
                {secondLvl ? (
                    <div className="do  flex absolute left-[14.5rem] top-0 z-40 bg-white  gap-[3.8rem] flex-wrap ">
                        {secondLvl.map(({ itemArr, nameSecondLvl }) => {
                            return (
                                <div
                                    className="is flex-[40%] flex flex-col gap-[0.9rem]"
                                    key={nameSecondLvl}
                                >
                                    <h4 className="text-base 2xl:text-lg font-medium">
                                        {nameSecondLvl}
                                    </h4>
                                    <ul className="flex flex-col gap-[0.63rem] text-gray-dark">
                                        {itemArr.map(
                                            ({ link, nameSecondItem }) => {
                                                return (
                                                    <Link
                                                        key={nameSecondItem}
                                                        href={`${link}?sort=${nameSecondItem}`}
                                                        className="transition-all delay-100 hover:text-lavander"
                                                    >
                                                        {nameSecondItem}
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </li>
        );
    });
    return (
        <nav className="bg-white border border-black  w-[15rem] min-h-[15rem] absolute left-[2.2rem] 2xl:left-[8rem] top-14 z-40 ">
            <div className="bg-gray-light rounded-lg w-[14rem] h-[14rem] absolute left-2 top-1 -z-10"></div>
            <ul className="z-40 my-[2rem] mx-[1.25rem] flex flex-col gap-[0.45rem]">
                {renderTreeMenu}
            </ul>
        </nav>
    );
}

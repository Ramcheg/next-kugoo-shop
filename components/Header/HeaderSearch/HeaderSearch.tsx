"use client";

import { Button } from "@/components";
import SearchIcon from "@/public/Search.svg";

import "./HeaderSearchStyle.scss";

interface ISearch {
    isMobSearch?: boolean;
}

export function HeaderSearch({ isMobSearch }: ISearch): JSX.Element {
    if (isMobSearch) {
        return (
            <div className="relative">
                <input
                    className="w-full h-[2.18rem]  block text-sm border bg-gray-light  border-lavander-light pl-[.63rem] pr-[1.9rem] placeholder:text-gray-dark placeholder:text-sm outline-none"
                    type="search"
                    placeholder="Искать самокат KUGO"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 icon-black" />
            </div>
        );
    }

    return (
        <div className="flex flex-1 relative h-10 2xl:h-[2.9rem]">
            <div className=" absolute left-[2px] 2xl:left-[4px] top-[50%] translate-y-[-50%]">
                <Button color="gray" size="dropDown" icon="dropDown">
                    Везде
                </Button>
            </div>
            <input
                className="w-full  block text-xs 2xl:text-base border-2 rounded-md h-full border-lavander-light pl-[6.25rem] 2xl:pl-[8.1rem] pr-10 2xl:pr-[3.25rem] placeholder:text-gray-dark placeholder:text-xs 2xl:placeholder:text-base outline-purple-600 "
                type="search"
                placeholder="Искать самокат KUGO"
            />
            <div className="absolute right-[-1px]  top-[50%] translate-y-[-50%]">
                <Button color="lavander" size="icon">
                    <SearchIcon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                </Button>
            </div>
        </div>
    );
}

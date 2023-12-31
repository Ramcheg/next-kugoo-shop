"use client";

import { Button } from "@/components";
import SearchIcon from "@/public/Search.svg";

import "./HeaderSearchStyle.scss";
import { useState, KeyboardEvent } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ISearch {
    isMobSearch?: boolean;
}

export function HeaderSearch({ isMobSearch }: ISearch): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [request, setRequest] = useState();
    const router = useRouter();

    // async function requestion() {
    //     const q = query(
    //         collection(db, "Products"),
    //         where("name", ">=", search)
    //     );

    //     try {
    //         const data = await getDocs(q);
    //         console.log(data);
    //         data.forEach((document) => {
    //             console.log(document.data());
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    const onHandleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            router.push(`/catalog/search?name=${search}`);
        }
    };

    if (isMobSearch) {
        return (
            <div className="relative">
                <input
                    className="w-full h-[2.18rem]  block text-sm border bg-gray-light  border-lavander-light pl-[.63rem] pr-[1.9rem] placeholder:text-gray-dark placeholder:text-sm outline-none"
                    type="search"
                    placeholder="Искать самокат KUGO"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => onHandleKeyPress(e)}
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 icon-black" />
            </div>
        );
    }

    return (
        <div className="flex flex-1 relative h-10 2xl:h-[2.9rem]">
            <input
                className="w-full  block text-xs 2xl:text-base border-2 rounded-md h-full border-lavander-light pl-[1.25rem]  pr-10 2xl:pr-[3.25rem] placeholder:text-gray-dark placeholder:text-xs 2xl:placeholder:text-base outline-purple-600 "
                type="search"
                placeholder="Искать самокат KUGO"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => onHandleKeyPress(e)}
            />
            <div className="absolute right-[-1px]  top-[50%] translate-y-[-50%]">
                <Button color="lavander" size="icon">
                    <Link href={`/catalog/search?name=${search}`}>
                        <SearchIcon className="w-[1.1rem] h-[1.1rem] 2xl:w-5 2xl:h-5" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}

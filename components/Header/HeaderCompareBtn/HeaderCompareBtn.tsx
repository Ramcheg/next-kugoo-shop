"use client";

import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import { useAppSelector } from "@/store/store";
import Link from "next/link";

export function HeaderCompareBtn(): JSX.Element {
    const { compareArr } = useAppSelector((store) => store.productCard);
    return (
        <Link href={"/compare"}>
            <ButtonIcon
                icon="compare"
                colorIcon="black"
                bandage={compareArr.length}
            />
        </Link>
    );
}

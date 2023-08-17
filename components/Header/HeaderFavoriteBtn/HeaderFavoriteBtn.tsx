"use client";

import { ButtonIcon } from "@/components";
import { useAppSelector } from "@/store/store";
import Link from "next/link";

export function HeaderFavoriteBtn(): JSX.Element {
    const { favoriteArr } = useAppSelector((store) => store.productCard);

    return (
        <Link href={"/favorites"}>
            <ButtonIcon
                icon="heart"
                iconFill={favoriteArr.length > 0}
                colorIcon="black"
                bandage={favoriteArr.length}
            />
        </Link>
    );
}

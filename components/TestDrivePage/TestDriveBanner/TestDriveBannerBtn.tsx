"use client";

import { Button } from "@/components";
import { FC, useState } from "react";
import { TextDriveModal } from "../TextDriveModal/TextDriveModal";

export const TestDriveBannerBtn: FC = () => {
    const [openMenu, SetOpenMenu] = useState(true);

    const onChangeMenu = () => {
        SetOpenMenu((openMenu) => !openMenu);
    };
    return (
        <>
            <Button
                className="text-lavander mt-10"
                color="white"
                size="small"
                onClick={() => SetOpenMenu(true)}
            >
                Записаться
            </Button>
            {openMenu && (
                <TextDriveModal onChangeMenu={onChangeMenu} isOpen={openMenu} />
            )}
        </>
    );
};

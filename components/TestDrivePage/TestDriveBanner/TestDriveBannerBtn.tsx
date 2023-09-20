"use client";

import { Button } from "@/components";
import { FC, useState } from "react";
import { TextDriveModal } from "../TextDriveModal/TextDriveModal";
import { usePostModalNumber } from "@/hooks/usePostModalNumber";

export const TestDriveBannerBtn: FC = () => {
    const [click, setClick] = useState(false);
    const {} = usePostModalNumber();
    return (
        <>
            <Button
                className="text-lavander mt-10"
                color="white"
                size="small"
                onClick={() => setClick(true)}
            >
                Записаться
            </Button>
            <TextDriveModal isOpen={click} />
        </>
    );
};

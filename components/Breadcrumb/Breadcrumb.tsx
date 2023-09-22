"use client";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";

import {} from "next/router";
import { translateForRuLink } from "@/helpers/translateLinkToRu";
export const Breadcrumb: FC = () => {
    const pathArr = usePathname()
        .split("/")
        .filter((path, index) => index === 0 || path[0] !== "");

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {pathArr.map((item, i) => {
                    const ruLinkName = translateForRuLink(item);
                    const link = pathArr.slice(0, i + 1).join("/");
                    if (i === 0) {
                        return (
                            <Link
                                key={"home"}
                                href="/"
                                className="flex items-center"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Главная
                            </Link>
                        );
                    } else if (i === pathArr.length - 1) {
                        return (
                            <Typography
                                key={
                                    typeof item === "string" ? item : `item${i}`
                                }
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "500",
                                    userSelect: "none",
                                }}
                                color="primary"
                            >
                                {ruLinkName?.translate || item}
                            </Typography>
                        );
                    } else {
                        return (
                            <Link
                                key={
                                    typeof item === "string" ? item : `item${i}`
                                }
                                href={link}
                                className="flex items-center"
                            >
                                {ruLinkName?.translate || item}
                            </Link>
                        );
                    }
                })}
            </Breadcrumbs>
        </div>
    );
};

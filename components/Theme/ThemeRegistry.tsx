"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { Jost } from "next/font/google";

const jost = Jost({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["cyrillic"],
});

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: jost.style.fontFamily,
    },
    palette: {
        primary: {
            main: "#6F73EE",
        },
    },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}

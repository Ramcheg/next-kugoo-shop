"use client";

import Loading from "@/app/loading";
import store, { persistor } from "@/store/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeRegistry from "../Theme/ThemeRegistry";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import { styled } from "@mui/material";
export function Providers({ children }: { children: ReactNode }): JSX.Element {
    const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
        "&.notistack-MuiContent-info": {
            backgroundColor: "#6F73EE",
        },
    }));
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loading />}>
                <SessionProvider>
                    <ThemeRegistry>
                        <SnackbarProvider
                            dense
                            maxSnack={3}
                            autoHideDuration={2000}
                            Components={{
                                info: StyledMaterialDesignContent,
                            }}
                        >
                            {children}
                        </SnackbarProvider>
                    </ThemeRegistry>
                </SessionProvider>
            </PersistGate>
        </Provider>
    );
}

"use client";

import store from "@/store/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: ReactNode }): JSX.Element {
    return (
        <Provider store={store}>
            <SessionProvider>{children}</SessionProvider>
        </Provider>
    );
}

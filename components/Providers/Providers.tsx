"use client";

import Loading from "@/app/loading";
import store, { persistor } from "@/store/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export function Providers({ children }: { children: ReactNode }): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loading />}>
                <SessionProvider>{children}</SessionProvider>
            </PersistGate>
        </Provider>
    );
}

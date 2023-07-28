import { ReactNode } from "react";

export function ModalWrapperCenter({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <div className="fixed z-40 bg-white/50 h-full w-full top-0 left-0">
            <div className="absolute z-50 left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-md">
                {children}
            </div>
        </div>
    );
}

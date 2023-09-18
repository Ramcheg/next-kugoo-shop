import { Breadcrumb } from "@/components";
import { TestDriveBanner } from "@/components/TestDrivePage";
import { FC } from "react";

export const TestDrivePage: FC = () => {
    return (
        <>
            <nav className="mt-5 container mx-auto">
                <Breadcrumb />
            </nav>

            <section className="mt-5">
                <TestDriveBanner />
            </section>
        </>
    );
};

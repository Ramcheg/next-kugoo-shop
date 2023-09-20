import { Breadcrumb } from "@/components";
import { TestDriveBanner, TestDriveContent } from "@/components/TestDrivePage";
import {
    learningYouData,
    scooterModelData,
} from "@/components/TestDrivePage/TestDriveContent/TestDriveContentData";
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
            <section className="mt-5 md:mt-10">
                <div>
                    <TestDriveContent
                        data={scooterModelData}
                        imgPosition="left"
                    />
                </div>
                <div className="mt-5 md:mt-14">
                    <TestDriveContent
                        data={learningYouData}
                        imgPosition="right"
                    />
                </div>
            </section>
        </>
    );
};

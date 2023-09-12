import {
    CooperationAlgorytm,
    CooperationBanner,
    CooperationOffer,
} from "@/components/CooperationPage";
import { FC } from "react";

export const CooperationPage: FC = () => {
    return (
        <>
            <section className="mt-4 md:mt-8">
                <CooperationBanner />
            </section>
            <section className="mt-4 md:mt-8">
                <CooperationOffer />
            </section>
            <section className="mt-6 md:mt-10">
                <CooperationAlgorytm />
            </section>
        </>
    );
};

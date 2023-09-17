import { QuestionsAndAnswer } from "@/components";
import {
    CooperationAlgorytm,
    CooperationBanner,
    CooperationComplitedPlan,
    CooperationIndividual,
    CooperationOffer,
    CooperationSocial,
} from "@/components/CooperationPage";
import { QaAHome } from "@/components/QuestionsAndAnswer/QuestionsAndAnswerArr";
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
            <section className="hidden md:block mt-6 md:mt-10">
                <CooperationAlgorytm />
            </section>
            <section className="mt-6 md:mt-10">
                <CooperationComplitedPlan />
            </section>
            <section className="mt-4 md:mt-8">
                <CooperationSocial />
            </section>
            <section className="mt-12 md:mt-24">
                <QuestionsAndAnswer arrayQaA={QaAHome} />
            </section>
            <section className="mt-12 md:mt-24">
                <CooperationIndividual />
            </section>
        </>
    );
};

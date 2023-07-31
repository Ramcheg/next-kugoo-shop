import {
    AdditionallyProduct,
    BigVideo,
    Blog,
    ContainerServices,
    DroneSection,
    OurAdvantages,
    ProductCard,
    QuestionsAndAnswer,
} from "@/components";
import {
    HomeSlider,
    HomeCreditList,
    HomeProducts,
    HomePopularCategories,
    HomeAboutAs,
} from "@/components/HomePage";
import { QaAHome } from "@/components/QuestionsAndAnswer/QuestionsAndAnswerArr";

export default function HomePage(): JSX.Element {
    return (
        <>
            <HomeSlider />
            <div className="container mx-auto ">
                <section className="flex gap-5 md:gap-0 flex-col md:flex-row justify-between items-center my-[1.88rem] ">
                    <HomeCreditList />
                </section>
                <section className="my-[3rem]">
                    <HomeProducts />
                </section>
                <section className="flex gap-7 flex-col md:flex-row justify-between my-14 md:my-28">
                    <ContainerServices typeComp="model" />
                    <ContainerServices typeComp="services" />
                </section>
            </div>
            <section>
                <DroneSection />
            </section>
            <div className="mx-auto container">
                <section>
                    <HomePopularCategories />
                </section>
            </div>
            <div className="containerBig bg-gray-light rounded-md py-6">
                <div className="container mx-auto">
                    <section>
                        <HomeAboutAs />
                    </section>
                </div>
            </div>
            <section className="container mx-auto my-5 md:my-16">
                <OurAdvantages />
            </section>
            <div className="containerBig rounded-lg overflow-hidden h-[320px] md:h-[630px] mt-10 md:mt-24">
                {/* <BigVideo /> */}
            </div>
            <div className="containerBig mt-8 md:mt-20">
                <section>
                    <Blog />
                </section>
            </div>
            <div className="mt-10 md:mt-28">
                <section>
                    <QuestionsAndAnswer arrayQaA={QaAHome} />
                </section>
            </div>
            <div className="container mx-auto mt-6 md:mt-12 md:block hidden">
                <AdditionallyProduct />
            </div>
        </>
    );
}

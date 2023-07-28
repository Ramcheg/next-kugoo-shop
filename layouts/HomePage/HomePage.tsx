import {
    ContainerServices,
    DroneSection,
    OurAdvantages,
    ProductCard,
} from "@/components";
import {
    HomeSlider,
    HomeCreditList,
    HomeProducts,
    HomePopularCategories,
    HomeAboutAs,
} from "@/components/HomePage";

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
            <section className="container mx-auto my-10 md:my-24">
                <OurAdvantages />
            </section>
        </>
    );
}

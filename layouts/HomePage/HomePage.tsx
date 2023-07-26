import { ContainerServices, ProductCard } from "@/components";
import {
    HomeSlider,
    HomeCreditList,
    HomeProducts,
} from "@/components/HomePage";

export default function HomePage(): JSX.Element {
    return (
        <>
            <HomeSlider />
            <div className="container mx-auto ">
                <div className="flex gap-5 md:gap-0 flex-col md:flex-row justify-between items-center my-[1.88rem] ">
                    <HomeCreditList />
                </div>
                <div className="my-[3rem]">
                    <HomeProducts />
                </div>
                <div className="flex gap-7 flex-col md:flex-row justify-between my-14 md:my-28">
                    <ContainerServices typeComp="model" />
                    <ContainerServices typeComp="services" />
                </div>
            </div>
        </>
    );
}

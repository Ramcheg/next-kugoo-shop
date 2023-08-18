import { Button, H } from "@/components";
import "./ServicePageStyle.scss";
import Image from "next/image";

import womanWithElecticImg from "@/public/ServicePage/woman-with-electric.png";

export default function ServicePage(): JSX.Element {
    return (
        <>
            <div className="containerBig  h-[26rem] serviceGradientPage mt-8 rounded-lg">
                <div className="container mx-auto relative">
                    <div className="py-6 md:py-11 text-white">
                        <H color="white" level={1}>
                            Ремонт и обслуживание
                            <br /> товаров Kugoo Kirin
                        </H>
                        <div className="text-lg 2xl:text-xl">
                            в фирменных сервисых центрах
                        </div>
                        <div className="flex mt-5 md:mt-10">
                            <div>
                                <div>icon</div>
                                <div>name</div>
                            </div>
                            <div>
                                <div>icon</div>
                                <div>name</div>
                            </div>
                            <div>
                                <div>icon</div>
                                <div>name</div>
                            </div>
                        </div>
                        <Button
                            className="text-orange-editible border-transparent mt-5 md:mt-10"
                            size="menu"
                            color="white"
                        >
                            Записаться
                        </Button>
                    </div>
                    <div className="absolute right-0 bottom-0">
                        <Image src={womanWithElecticImg} alt="woman" />
                    </div>
                </div>
            </div>
        </>
    );
}

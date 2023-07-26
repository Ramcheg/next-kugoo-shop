import Image from "next/image";
import { H } from "..";

import changesModelImg from "@/public/changesModel.png";
import servisesImg from "@/public/servises.png";

type ContainerServicesType = "model" | "services";

export function ContainerServices({
    typeComp,
}: {
    typeComp: ContainerServicesType;
}): JSX.Element {
    switch (typeComp) {
        case "model":
            return (
                <div className="bg-gray-light relative py-10 pl-8 w-full md:w-1/2 rounded-lg overflow-hidden">
                    <div className="w-[90%] md:w-[60%] relative z-10">
                        <H className="text-left" level={3}>
                            Подбор модели электросамоката
                        </H>
                        <div className="my-4">
                            Пройдите тест и выберите электросамокат по своим
                            критериям
                        </div>
                        <a
                            href="#"
                            className="transition-all delay-100 text-lavander text-ms 2xl:text-base hover:text-gray-dark"
                        >
                            Подобрать модель →
                        </a>
                    </div>
                    <div className="absolute right-0 top-0 -z-1">
                        <Image
                            alt="Scuter"
                            src={changesModelImg}
                            width={248}
                            height={235}
                        />
                    </div>
                </div>
            );

        case "services":
            return (
                <div className="bg-gray-light relative w-full md:w-1/2 py-10 pl-8 rounded-lg overflow-hidden">
                    <div className="w-[60%] relative z-10">
                        <H className="text-left" level={3}>
                            Сервисное обслуживание
                        </H>
                        <div className="my-4">
                            Крупнейший сервисный центр в России для продуктов
                            Kugoo
                        </div>
                        <a
                            href="#"
                            className="transition-all delay-100 text-lavander text-ms 2xl:text-base hover:text-gray-dark"
                        >
                            Подобрать модель →
                        </a>
                    </div>
                    <div className="absolute right-0 top-0 -z-1">
                        <Image
                            alt="Scuter"
                            src={servisesImg}
                            width={234}
                            height={235}
                        />
                    </div>
                </div>
            );

        default:
            break;
    }

    return <h1></h1>;
}

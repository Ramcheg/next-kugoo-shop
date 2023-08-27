import { H } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import batteryChargingImg from "@/public/ServicePage/battery-charging-big.png";
import scooterImg from "@/public/ServicePage/scooter.png";

export const ServiceHidro: FC = () => {
    return (
        <div className="containerBig ">
            <div className=" flex gap-4 md:gap-14 flex-wrap-reverse justify-center ">
                <div className="w-1/2 lg:w-auto">
                    <Image
                        className="rounded-lg overflow-hidden"
                        src={batteryChargingImg}
                        alt="batteryCharging"
                        width={703}
                        height={392}
                    />
                </div>
                <div className="w-[30rem]">
                    <H level={3}>Сделаем гидроизоляцию электросамоката</H>
                    <div className="text-xs md:text-sm 2xl:text-base mt-2">
                        <p className="text-sm md:text-base 2xl:text-lg">
                            которая позволит вам кататься в любую погоду
                        </p>
                        <p className="mt-6">
                            Гидроизоляция – это защита от проникновения воды.
                            Электросамокат изнутри покрывается специальным
                            веществом, которое предотвращает попадание любой
                            влаги.
                        </p>
                        <p className="text-sm md:text-base 2xl:text-lg mt-5">
                            Что дает гидроизоляция:
                        </p>
                        <ul className="mt-4 list-image-triangle list-inside">
                            <li className="mt-2">
                                Возможность выезжать в дождь или после дождя
                            </li>
                            <li className="mt-2">
                                Можно ездить в любое время года
                            </li>
                            <li className="mt-2">
                                Защита от влаги, пыли и грязи продлит срок
                                беспроблемного использования.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Подробнее про гидроизоляцию прочитайте в{" "}
                            <Link className="text-lavander" href={"/blog"}>
                                нашей статье
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-row-reverse  gap-4 md:gap-14 flex-wrap-reverse justify-center it  ">
                <div className="w-1/2 lg:w-auto">
                    <Image
                        className="rounded-lg overflow-hidden"
                        src={scooterImg}
                        alt="batteryCharging"
                        width={703}
                        height={392}
                    />
                </div>
                <div className="w-[30rem]">
                    <H level={3}>
                        Продлим срок службы вашего самоката в 2 раза
                    </H>
                    <div className="text-xs md:text-sm 2xl:text-base mt-2">
                        <p className="text-sm md:text-base 2xl:text-lg">
                            благодаря настройкам от специалистов с опытом 7+ лет
                        </p>
                        <p className="mt-6">
                            Перед продажей каждый покупатель может заказать у
                            нас дополнительную услугу – настройка самоката. Для
                            разных моделей Kugoo настройка может отличаться.
                        </p>
                        <p className="text-sm md:text-base 2xl:text-lg mt-5">
                            Что входит в настройку:
                        </p>
                        <ul className="mt-4 list-image-triangle list-inside">
                            <li className="mt-2">
                                Регулировка натяжения тормозного троса
                            </li>
                            <li className="mt-2">
                                Регулировка положения тормозной ручки
                            </li>
                            <li className="mt-2">
                                Регулировка тормозных механизмов
                            </li>
                            <li className="mt-2">Протяжка всех соединений</li>
                            <li className="mt-2">И еще более 35 работ.</li>
                        </ul>
                        <p className="mt-4">
                            Подробнее про настройку прочитайте в{" "}
                            <Link className="text-lavander" href={"/blog"}>
                                нашей статье
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

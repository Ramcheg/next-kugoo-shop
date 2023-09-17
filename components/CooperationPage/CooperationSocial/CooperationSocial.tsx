import { H, OurSocial } from "@/components";
import Link from "next/link";
import { FC } from "react";

export const CooperationSocial: FC = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center md:justify-between items-start flex-wrap gap-2 md:gap-0">
                <div className="w-1/2 mt-4">
                    <H level={2}>
                        Общаемся с клиентами, чтобы знать пожелания и предлагать
                        лучший ассортимент и сервис
                    </H>
                    <p className="text-lg">
                        И еще приняли активное участие в выставке «Велокульт
                        2023»
                    </p>
                    <Link
                        className="text-sm font-medium text-lavander hover:text-lavander-light"
                        href={"/blog"}
                    >
                        Смотреть как это было ➡
                    </Link>
                </div>
                <div>
                    <OurSocial />
                </div>
            </div>
        </div>
    );
};

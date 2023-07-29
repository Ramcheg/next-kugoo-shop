import { H } from "..";
import Image from "next/image";
import blog1 from "@/public/blog/blog1.png";
import CalendarSVG from "@/public/blog/Calendar.svg";
import EyeSVG from "@/public/blog/Eye.svg";
export function BlogItem(): JSX.Element {
    return (
        <div className="bg-gray-light  overflow-hidden rounded-lg group">
            <div className="">
                <Image src={blog1} width={355} height={189} alt="Img blog 1" />
            </div>
            <div className="my-6 ml-5">
                <H
                    level={4}
                    transform="normal"
                    className="group-hover:text-lavander transition-all delay-100"
                >
                    Как правильно заряжать электросамокат
                </H>
                <div className=" text-sm 2xl:text-base mt-2">
                    Один из первых вопросов, который волнует после покупки
                    электросамоката.
                </div>
                <div className="flex gap-6 mt-5">
                    <div className="flex gap-2 items-center justify-center">
                        <div>
                            <CalendarSVG />
                        </div>
                        <div>01.09.2021</div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <div>
                            <EyeSVG />
                        </div>
                        <div>53</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

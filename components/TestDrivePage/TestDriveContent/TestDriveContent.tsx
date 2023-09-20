import { FC } from "react";
import { ITestDriveContentData } from "./TestDriveContentData";
import Image from "next/image";
import { H } from "@/components";

interface ITestDriveContentProps {
    data: ITestDriveContentData;
    imgPosition: "left" | "right";
}

export const TestDriveContent: FC<ITestDriveContentProps> = ({
    data: { img, subtitle, title },
    imgPosition,
}) => {
    return (
        <div className="container mx-auto">
            <div
                className={`flex justify-center  items-center flex-wrap gap-4 md:gap-7  ${
                    imgPosition === "left" ? "" : "flex-row-reverse"
                }`}
            >
                <div className="w-[96%] md:w-1/2">
                    <H level={3}>{title}</H>
                    <div className="mt-5 text-lg font-medium">
                        {subtitle.name}
                    </div>
                    <ul className="list-image-triangle list-inside mt-4 text-lg font-medium">
                        {subtitle.content.map((item, i) => (
                            <li key={`item ${i + 1}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <Image
                        className="w-[19rem] lg:w-[27rem] h-[15rem] lg:h-[25rem] rounded-lg"
                        src={img}
                        alt={subtitle.name}
                    />
                </div>
            </div>
        </div>
    );
};

import { StaticImageData } from "next/image";
import scooterImg from "@/public/testDrivePage/E-Scooters.png";
import scooterThumbImg from "@/public/testDrivePage/E-Scooters_Thumb.png";

export interface ITestDriveContentData {
    title: string;
    subtitle: {
        name: string;
        content: string[][];
    };
    img: StaticImageData;
}

export const scooterModelData: ITestDriveContentData = {
    title: "Определите максимально подходящую вам модель не теоретически, а на практике",
    subtitle: {
        name: "Тест-драйв поможет:",
        content: [
            ["Понять подходит ли вам конкретная модель;"],
            ["Испытать самокат в «реальной жизни»;"],
            ["Оценить удобство хранения и эксплуатации;"],
            ["Узнать реальные характеристики и возможности модели."],
        ],
    },
    img: scooterImg,
};

export const learningYouData: ITestDriveContentData = {
    title: "Научим правильной и безопасной езде в городе вас или вашего ребенка",
    subtitle: {
        name: "На обучении специалист расскажет:",
        content: [
            ["Как подготовить самокат к поездке;"],
            ["Как «завести» самокат;"],
            [
                "Как вести себя во время поездки и обезопасить себя и окружающих;",
            ],
            ["Как складывать и раскладывать электросамокат;"],
            ["Как ухаживать за своим девайсом."],
        ],
    },
    img: scooterThumbImg,
};

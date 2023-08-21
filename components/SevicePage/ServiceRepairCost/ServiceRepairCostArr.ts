import { IServiceName } from "./ServiceRepairCostTypes";

export const serviceRepairButtonGroup: IServiceName[] = [
    { name: "Электросамокаты", id: "electicCamocat" },
    { name: "Электровелосипеды", id: "electricBike" },
    { name: "Робот-пылесосы", id: "electicWashCleener" },
    { name: "Электроскутеры", id: "electicScooter" },
];

export const serviceRepairNameProduct: IServiceName[] = [
    { name: "Kugoo Kirin M4", id: "KirinM4" },
    { name: "Kugoo Kirin S2", id: "KirinS2" },
    { name: "Kugoo Kirin M5", id: "KirinM5" },
    { name: "Kugoo Kirin M7", id: "KirinM7" },
    { name: "Kugoo Kirin M8", id: "KirinM8" },
];

export const ServiceRepairfakeDescr: { id: string; content: {}[] }[] = [
    { id: "KirinM4", content: [{}, {}, {}, {}, {}] },
    { id: "KirinS2", content: [{}, {}, {}, {}, {}] },
    { id: "KirinM5", content: [{}, {}, {}, {}, {}] },
    { id: "KirinM7", content: [{}, {}, {}, {}, {}] },
    { id: "KirinM8", content: [{}, {}, {}, {}, {}] },
];

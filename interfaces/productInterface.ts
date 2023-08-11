import { Timestamp } from "firebase/firestore";

export interface IProductDescription {
    weight: string;
    power: string;
    speed: string;
    maxMileage: string;
    battary: string;
    powerBattary: string;
    timeBattary: string;
    maxWeight: string;
    sizeTire: string;
    typeTire: string;
    dimensions: string;
    backlighting: string;
    drive: string;
    brakeSystem: string;
    equipment: string;
    warranty: string;
}

export interface IProduct {
    name: string;
    picture: string | string[];
    thumpnail: string | string[];
    createdData: Timestamp;
    price: string;
    sale: string;
    aboutProduct: string;
    descriptionProduct: IProductDescription;
    features: string[];
    featureForProduct: string;
    forWrom: string;
    typeTransportare: string;
    mainImg: string;
    sold: string;
    typeTransportareEN: string;
    amount: boolean;
}

export type NameIdType =
    | "weight"
    | "power"
    | "speed"
    | "maxMileage"
    | "battary"
    | "powerBattary"
    | "timeBattary"
    | "maxWeight"
    | "powerBattary"
    | "sizeTire"
    | "typeTire"
    | "dimensions"
    | "backlighting"
    | "drive"
    | "brakeSystem"
    | "equipment"
    | "warranty"
    | "name"
    | "price"
    | "sale"
    | "features"
    | "forWrom"
    | "featureForProduct"
    | "aboutProduct"
    | "typeTransportare";

export interface IInputArr {
    name: string;
    type?: "text";
    placeholder?: string;
    nameId: NameIdType;
    select?: string[];
}

// export interface IInputTopArr extends IInputArr {
//     nameId: NameTopIdType;
// }

// export interface IInputBotArr extends IInputArr {
//     nameId: NameBotIdType;
// }

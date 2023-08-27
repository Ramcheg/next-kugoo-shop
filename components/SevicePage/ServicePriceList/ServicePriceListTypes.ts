export type ServicePriceListBtnNameType =
    | "hidro"
    | "setting"
    | "hidroAndSetting";

export interface IServicePriceListBtn {
    name: string;
    id: ServicePriceListBtnNameType;
}

export interface IServicePriceListItem {
    id: string;
    name: string;
    price: string;
}

export interface IServiceName {
    name: string;
    id: string;
}

export interface IServiceRepairCost extends IServiceName {
    content: {}[];
}

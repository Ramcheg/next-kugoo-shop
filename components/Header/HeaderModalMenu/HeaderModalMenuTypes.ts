import { ReactNode } from "react";

interface ISocondLvlUnderLink {
    nameSecondItem: string;
    link: string;
}

interface ISecondLvlMenu {
    nameSecondLvl: string;
    itemArr: ISocondLvlUnderLink[];
}

export interface IHeaderMenu {
    name: string;
    link: string;
    icon: ReactNode;
    secondLvl?: ISecondLvlMenu[];
}

import { localStorageNameType } from "@/interfaces/localStorageTypes";

export interface ILocalStorageBtnProps {
    getLocalStorage: (localStorName: localStorageNameType) => void;
    isItemInLocalStor: boolean;
}

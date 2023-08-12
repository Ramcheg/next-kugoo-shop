import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasketGoods } from "../Header/HeaderBasketModal/HeaderBasketModalProps";
import { localStorageNameType } from "@/interfaces/localStorageTypes";

interface IinitProductSlice {
    basketArr: IBasketGoods[];
    compareArr: IBasketGoods[];
    favoriteArr: IBasketGoods[];
}

const initialState: IinitProductSlice = {
    basketArr: [],
    compareArr: [],
    favoriteArr: [],
};

const productCardSlice = createSlice({
    name: "productCardLocalStor",
    initialState,
    reducers: {
        initLocalStorArr: (
            state,
            action: PayloadAction<{
                arr: IBasketGoods[];
                localStorType: localStorageNameType;
            }>
        ) => {
            switch (action.payload.localStorType) {
                case "basket":
                    state.basketArr = action.payload.arr;
                    break;
                case "compare":
                    state.compareArr = action.payload.arr;
                    break;
                case "favorite":
                    state.favoriteArr = action.payload.arr;
                    break;
                default:
                    break;
            }
        },
    },
});

const { actions, reducer } = productCardSlice;

export const { initLocalStorArr } = actions;

export default reducer;

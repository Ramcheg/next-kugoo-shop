import { IProductWithoutFirebase } from "@/helpers/getAllProductsFire";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

interface IHomeProductState {
    filter: string;
    electricScooterArr: IProductWithoutFirebase[];
}

const initialState: IHomeProductState = {
    filter: "default",
    electricScooterArr: [],
};

export const homeProductSlice = createSlice({
    name: "homeProduct",
    initialState,
    reducers: {
        handleFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        addProduct: (
            state,
            action: PayloadAction<IProductWithoutFirebase[]>
        ) => {
            state.electricScooterArr = action.payload;
        },
    },
});

export const selectFilterHomeProduct = createSelector(
    (state) => initialState.filter,
    (state) => initialState.electricScooterArr,
    (filter, itemArr) => {}
);

const { actions, reducer } = homeProductSlice;

export const { handleFilter, addProduct } = actions;

export default reducer;

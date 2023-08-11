import { IProductWithoutFirebase } from "@/helpers/getAllProductsFire";
import { RootState } from "@/store/store";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

export type filterType =
    | "default"
    | "hit"
    | "forCity"
    | "forAdult"
    | "forChild";

interface IHomeProductState {
    homefilter: filterType;
    electricScooterArr: IProductWithoutFirebase[];
    loading: "loading" | "success";
}

const initialState: IHomeProductState = {
    homefilter: "default",
    electricScooterArr: [],
    loading: "loading",
};

export const homeProductSlice = createSlice({
    name: "homeProduct",
    initialState,
    reducers: {
        handleHomeFilter: (state, action: PayloadAction<filterType>) => {
            state.homefilter = action.payload;
        },
        addProduct: (
            state,
            action: PayloadAction<IProductWithoutFirebase[]>
        ) => {
            state.electricScooterArr = action.payload;
            state.loading = "success";
        },
    },
});

export const selectFilterHomeProduct = createSelector(
    (state: RootState) => state.homeProduct.electricScooterArr,
    (state: RootState) => state.homeProduct.homefilter,
    (itemArr, filter) => {
        let filteredArr = [...itemArr];
        switch (filter) {
            case "hit":
                filteredArr = filteredArr.filter((item) => +item.sold > 5);
                break;
            case "forAdult":
                filteredArr = filteredArr.filter(
                    (item) => item.forWrom === "Для взрослых"
                );
                break;
            case "forChild":
                filteredArr = filteredArr.filter(
                    (item) => item.forWrom === "Для детей и подростков"
                );
                break;
            case "forCity":
                filteredArr = filteredArr.filter(
                    (item) => item.featureForProduct === "Городской"
                );
                break;
            case "default":
                filteredArr;
            default:
                break;
        }

        return filteredArr;
    }
);

const { actions, reducer } = homeProductSlice;

export const { handleHomeFilter, addProduct } = actions;

export default reducer;

import { configureStore } from "@reduxjs/toolkit";
import homeProduct from "@/components/HomePage/HomeProducts/homeProductSlice";
import productCard from "@/components/ProductCard/ProductCardSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        homeProduct,
        productCard,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

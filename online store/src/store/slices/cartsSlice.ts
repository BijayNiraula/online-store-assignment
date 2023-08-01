import { createSlice } from "@reduxjs/toolkit";
import { CartsProduct } from "../../models";
import { readLocalStorage, writeLocalStorage } from "../utilities/localStorageUtilities";
interface InitialState {
    cartsProducts: CartsProduct[] | []
}

const initialState: InitialState = {
    cartsProducts: readLocalStorage("carts")
};

const cartsSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        add: (state, action) => {
            const updatedCartsProducts: CartsProduct[] = [...state.cartsProducts, action.payload];
            writeLocalStorage("carts", updatedCartsProducts)
            state.cartsProducts = updatedCartsProducts;
        },
        remove: (state, action) => {
            const updatedCartsProducts: CartsProduct[] = state.cartsProducts.filter((product: CartsProduct) => product.id != action.payload);
            writeLocalStorage("carts", updatedCartsProducts)
            state.cartsProducts = updatedCartsProducts;
        }
    }
})
export const { add, remove } = cartsSlice.actions;
export default cartsSlice.reducer;
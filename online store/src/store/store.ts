import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/cartsSlice";
const store = configureStore({
    reducer: {
        carts: cartsReducer
    }
});

export default store;
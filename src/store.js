import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice'
import cartsReducer from "./slices/cartsSlice";
import usersReducer from "./slices/usersSlice"
import authReducer from "./slices/authSlice"
import categoriesReducer from "./slices/categoriesSlice"

export const store = configureStore({
    reducer: {
        product: productsReducer,
        cart: cartsReducer,
        user: usersReducer,
        auth: authReducer,
        category: categoriesReducer
    },
});
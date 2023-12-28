import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductReducer.jsx";

export const store = configureStore({
    reducer: {
        products : productReducer
        }

})
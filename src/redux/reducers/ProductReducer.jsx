import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, getById, removeById, update} from "../services/ProductService.jsx";
const initialState = {
    list :[],
    newProduct : {
        title: "",
        price: "",
        description: ""
    }
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    extraReducers : builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state,{payload}) => {
            state.list.push(payload);
        })
        builder.addCase(getById.fulfilled, (state,{payload}) => {
            state.newProduct = (payload);
        })
        builder.addCase(removeById.fulfilled, (state,{payload}) => {
            state.list.splice(payload)
        })
        builder.addCase(update.fulfilled, (state,{payload}) => {
            
            
            if (updatedItemIndex !== -1) {
              state.list[updatedItemIndex] = payload;
            } else {
              console.error(`Item with ID ${payload.id} not found in the list.`);
            }
        })
    }
})
export default productSlice.reducer;
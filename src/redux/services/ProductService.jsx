import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let response = await axios.get('http://localhost:3000/products');
        return response.data;
    }
)
export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        let response = await axios.post('http://localhost:3000/products',newProduct);
        return response.data;
    }
)

export const getById = createAsyncThunk(
    'products/getById',
    async (id) => {
        let response = await axios.get('http://localhost:3000/products/' +id);
        return response.data;
    }
)
export const removeById = createAsyncThunk(
    'products/remove',
    async (id  ) => {
        let response = await axios.delete('http://localhost:3000/products/' + id);
        return response.data;
    }
)
export const update = createAsyncThunk(
    'products/update',
    async (newProduct) => {
        let response = await axios.put('http://localhost:3000/products/'+newProduct.id,newProduct);

        return response.data;
    }
)

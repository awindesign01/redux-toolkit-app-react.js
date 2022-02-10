import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncProducts = createAsyncThunk(
	"products/getAsyncProducts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("http://localhost:8000/datas");
			return res.data;
		} catch (error) {
			return rejectWithValue("error", [], error);
		}
	},
);

export const ProductsSlice = createSlice({
	name: "products",
	initialState: {
		loading: false,
		error: null,
		productsData: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		// todo comment: extraReducers => get reducers async
		builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
			return { ...state, loading: false, error: null, productsData: action.payload };
		});
		builder.addCase(getAsyncProducts.pending, (state, action) => {
			return { ...state, loading: true, error: null, productsData: [] };
		});
		builder.addCase(getAsyncProducts.rejected, (state, action) => {
			return { ...state, loading: false, error: action.error, productsData: [] };
		});
	},
});

export default ProductsSlice.reducer;

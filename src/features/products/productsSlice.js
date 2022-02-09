import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncProducts = createAsyncThunk(
	"products/getAsyncProducts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("https://fakestoreapi.com/products");
			return res.data;
		} catch (error) {
			return rejectWithValue("error", error);
		}
	},
);

export const ProductsSlice = createSlice({
	name: "products",
	initialState: {
		productsData: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		// todo comment: extraReducers => get reducers async
		builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
			state.productsData.push(action.payload);
		});
		builder.addCase(getAsyncProducts.pending, (state, action) => {
			state.productsData = [];
			state.loading = true;
			state.error = null;
		});
		builder.addCase(getAsyncProducts.rejected, (state, action) => {
			state.productsData = [];
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default ProductsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncProducts = createAsyncThunk(
	"products/getAsyncProducts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("https://fakestoreapi.com/products");
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
		addToCart: [],
	},
	// todo comment: extraReducers => get reducers async
	extraReducers: (builder) => {
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
	// todo comment: reducers => get reducers sync
	reducers: {
		addToCart: (state, { payload }) => {
			state.addToCart.push({ ...payload, quantity: 1 });
		},
	},
});

export const { addToCart } = ProductsSlice.actions;
export default ProductsSlice.reducer;

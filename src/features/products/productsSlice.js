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
		addToCart: [],
	},
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
	reducers: {
		// todo comment: reducers => get reducers sync
		addToCart: (state, { payload }) => {
			state.addToCart.push({ ...payload, quantity: 1 });
		},
		incrementProduct: (state, { payload }) => {
			console.log(payload);
			// state.addToCart.quantity += 1;
		},
		decrementProduct: (state, { payload }) => {
			console.log(payload);
		},
	},
});

export const { addToCart, incrementProduct, decrementProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;

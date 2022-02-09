import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../features/products/productsSlice";

const store = configureStore({
	reducer: {
		productsData: ProductsSlice,
	},
});
export default store;

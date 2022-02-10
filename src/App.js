import "./App.css";
import Index from "./layout/index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/ui_homePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAsyncProducts } from "./features/products/productsSlice";
import NotFound from "./pages/404-notFound";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAsyncProducts());
	}, []);
	return (
		<div className="App mx-auto w-full xl:w-[1240px] h-full bg-main-color">
			<Index>
				<main className="mx-auto w-[90%] sm:w-full">
					<Routes>
						<Route index path="/" element={<HomePage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</Index>
		</div>
	);
}

export default App;

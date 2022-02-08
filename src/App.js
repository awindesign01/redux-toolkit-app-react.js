import "./App.css";
import Index from "./layout/index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/ui_homePage";
import ShopPage from "./pages/ui_shopPage";
import SupportPage from "./pages/ui_supportPage";

function App() {
	return (
		<div className="App mx-auto w-full xl:w-[1240px] h-full bg-main-color">
			<Index>
				<main className="mx-auto w-[90%] sm:w-full">
					<Routes>
						<Route index path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/support" element={<SupportPage />} />
					</Routes>
				</main>
			</Index>
		</div>
	);
}

export default App;

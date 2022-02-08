import "./App.css";
import Index from "./layout/index";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/ui_homePage";

function App() {
	return (
		<div className="App mx-auto w-full xl:w-[1240px] h-full bg-main-color">
			<Index>
				<Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
			</Index>
		</div>
	);
}

export default App;

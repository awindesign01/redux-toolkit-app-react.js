import Banner from "../components/ui_banner";
import LandingPageShop from "../components/ui_landingPageShop";
import Products from "../components/ui_products";

const HomePage = () => {
	return (
		<section className="w-full h-auto">
			<Banner />
			<LandingPageShop />
			<Products />
		</section>
	);
};

export default HomePage;

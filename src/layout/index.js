import React from "react";
import Footer from "./ui_footer";
import Header from "./ui_header";
import MenuPhone from "./ui_menuPhone";

const Index = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<MenuPhone />
			<Footer />
		</>
	);
};

export default Index;

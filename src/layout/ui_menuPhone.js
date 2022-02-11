import { FiHome, FiShoppingBag, FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuPhoneData = [
	{ name: "Home", path: "/", IconName: FiHome, exact: "true" },
	{ name: "Cart", path: "/cart", IconName: FiShoppingBag },
	{ name: "Support", path: "/support", IconName: FiHeart },
];
const activeStyle = {
	transitionProperty: "all",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	color: "rgba(238, 156, 167, 2)",
	backgroundColor: "rgba(238, 156, 167, 0.2)",
};

const MenuPhone = () => {
	const Ui_IconMenuPhone = (path, exact, IconName, name) => {
		return (
			<>
				<NavLink
					to={path}
					exact={exact}
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					className="NavLink pt-1 rounded-lg w-full h-full text-gray-500 flex flex-col justify-center items-center"
				>
					<IconName className="text-2xl" />
					<p className="text-sm">{name}</p>
				</NavLink>
			</>
		);
	};
	return (
		<header className="header__menuPhone sm:hidden fixed bottom-0 left-0 p-1 w-full h-16 bg-white z-50">
			<nav className="mx-auto w-[90%] h-full flex justify-center items-center">
				<ul className="w-full h-full flex justify-between items-center">
					{menuPhoneData.map(({ name, path, IconName, exact }) => (
						<li
							className="rounded-lg w-16 h-12 flex flex-col justify-between items-center"
							key={path}
						>
							{Ui_IconMenuPhone(path, exact, IconName, name)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default MenuPhone;

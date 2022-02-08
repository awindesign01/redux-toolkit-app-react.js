import { FiHome, FiShoppingBag,FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuData = [
	{ name: "Home", path: "/", IconName: FiHome, exact: "true" },
	{ name: "Shop", path: "/shop", IconName: FiShoppingBag },
	{ name: "Support", path: "/support", IconName: FiHeart },
];
const activeStyle = {
	transitionProperty: "all",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	color: "rgba(238, 156, 167, 2)",
	backgroundColor: "rgba(238, 156, 167, 0.15)",
};

const Header = () => {
	return (
		<header className="shadow-lg xl:rounded-xl p-1 w-full h-16 bg-gradient-to-r from-color-pink-2 via-white ">
			<nav className="mx-auto w-[90%] h-full flex">
				<div className="w-1/2 h-full flex justify-start items-center">
					<div className="w-2/5 sm:w1/5 h-[60%] grid place-items-center">
						<h1 className="text-md sm:text-sm xl:text-lg text-left text-gray-500 leading-5 sm:leading-none">
							Awin <span className="text-color-pink-1 font-bold tracking-wider">D</span>esign
						</h1>
					</div>
					<div className="hidden sm:block mx-2 w-[1px] h-[50%] bg-gray-500 bg-opacity-50"></div>
					<div className="hidden sm:block w-4/5 h-[60%]">
						<ul className="flex w-auto h-full">
							{menuData.map(({ name, path, IconName, exact }) => (
								<li classname="w-auto h-full">
									<NavLink
										to={path}
										exact={exact}
										style={({ isActive }) => (isActive ? activeStyle : undefined)}
										className="NavLink pt-1 mr-2 border-b-2 border-solid border-transparent rounded-lg w-20 h-full text-gray-500 flex flex-row justify-center items-center"
									>
										<IconName className="mr-1 text-lg" />
										<p className="mt-1 text-sm">{name}</p>
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-1/2 h-full flex justify-end items-center">
					<button className="rounded-lg w-24 sm:w-28 h-3/4 bg-gradient-to-r from-color-pink-1 to-color-pink-2 text-white font-bold tracking-wider">
						Sign Up
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;

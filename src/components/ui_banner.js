import { FaArrowDown } from "react-icons/fa";
import banner from "../assets/banner.png";

const Banner = () => {
	return (
		<div className="rounded-xl shadow-lg shadow-color-pink-2 p-1 mx-auto mt-4 w-full sm:w-[90%] xl:w-full h-[80vh] sm:h-[85vh] bg-gradient-to-r from-color-primary-2 to-color-pink-1">
			<div className="w-full h-[90%] sm:flex">
				<div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center items-center font-bold tracking-wider">
					<h1 className="my-1 text-3xl lg:text-4xl xl:text-5xl text-white">Your Welcome To</h1>
					<p className="my-1 text-sm lg:text-base text-white text-opacity-70">redux toolkit app</p>
					<p className="my-1 text-sm lg:text-base text-white text-opacity-70">
						programmer: ali donyaee 😁
					</p>
				</div>
				<div className="w-full sm:w-1/2 h-1/2 sm:h-full grid place-items-center">
					<img src={banner} alt="banner" className="w-[80%] sm:w-full"/>
				</div>
			</div>
			<div className="w-full h-[10%] grid place-items-center">
				<div className="w-10 h-10 rounded-full animate-bounce grid place-items-center">
					<FaArrowDown className="text-2xl text-white" />
				</div>
			</div>
		</div>
	);
};

export default Banner;

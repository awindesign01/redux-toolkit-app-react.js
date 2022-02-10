import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="p-1 mx-auto mt-4 w-full sm:w-[90%] xl:w-full h-[80vh] sm:h-[85vh] flex flex-col justify-center items-center">
			<h1 className="text-4xl sm:text-5xl text-gray-700">page not found 🤔</h1>
			<Link to="/">
				<p className="mt-2 text-gray-500">go back to page home ←</p>
			</Link>
		</div>
	);
};

export default NotFound;

// import { useDispatch, useSelector } from "react-redux";

const Products = () => {
	// const { productsData, loading, error } = useSelector((state) => state);
	// if (loading) return <p>loading ...</p>;
	// if (error) return <p>{error}</p>;

	return (
		<div className="mb-4 w-full h-auto flex flex-row flex-wrap justify-between">
			<div className="shadow-lg rounded-lg p-1 w-[48%] h-60 bg-white">
				<div className="w-full h-[70%] bg-red-400">
					<img src="" alt="" />
				</div>
				<div className="p-1 w-full h-[30%] bg-blue-500 flex flex-wrap">
					<h1 className="w-full">name product</h1>
					<p className="w-1/2">$ price</p>
					<p className="w-1/2 text-center">rate: 3.9</p>
				</div>
			</div>
		</div>
	);
};

export default Products;

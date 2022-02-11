import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/products/productsSlice";

const Products = () => {
	const { productsData, loading, error } = useSelector((state) => state.productsData);
	const dispatch = useDispatch();

	if (loading) return <p>loading ...</p>;
	if (error) return <p className="text-center">{error}</p>;

	return (
		<div className="mb-4 mx-auto w-full sm:w-[90%] xl:w-full h-auto grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4 xl:gap-4">
			{productsData.map((i) => (
				<div
					className="relative mb-4 mx-auto shadow-lg rounded-lg pb-1 w-full h-60 bg-white after:contents-[''] after:bg-color-pink-1 after:w-[105%] after:h-3 after:block overflow-hidden transition-all transform hover:-translate-y-3 hover:shadow-color-pink-2 hover:cursor-pointer"
					key={i.id}
					onClick={() => dispatch(addToCart(i))}
				>
					<div className="w-full h-[70%] grid place-items-center">
						<img src={i.image} alt={i.title} className="w-1/2 sm:w-1/3 object-cover" />
					</div>
					<div className="p-1 w-full h-[30%] flex flex-wrap">
						<h1 className="w-full truncate text-gray-700">{i.title}</h1>
						<p className="w-1/3 text-[10px] sm:text-xs xl:text-base text-red-400">$ {i.price}</p>
						<p className="w-1/3 text-[10px] sm:text-xs xl:text-base text-gray-400">
							rate : {i.rating.rate}
						</p>
						<p className="w-1/3 text-[10px] sm:text-xs xl:text-sm text-gray-400">
							count : {i.rating.count}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;

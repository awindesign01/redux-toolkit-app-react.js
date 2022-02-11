import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { decrementProduct, incrementProduct } from "../features/products/productsSlice";

const ProductsDetails = () => {
	const { addToCart } = useSelector((state) => state.productsData);
	const dispatch = useDispatch();
	return (
		<>
			{addToCart.length === 0 ? (
				<div className="rounded-lg bg-color-pink-2 px-2 my-4 w-full h-16 flex justify-start items-center text-gray-700">
					your have no products
				</div>
			) : (
				<div className="border rounded-lg bg-white p-1 mx-auto my-4 w-full sm:w-[90%] xl:w-full h-auto">
					{addToCart.map((i) => (
						<div className="border-b-2 pb-2 mb-2 w-full h-full sm:flex" key={i.id}>
							<div className="w-full sm:w-1/2 h-44 sm:h-full font-bold tracking-wider grid place-items-center">
								<img src={i.image} alt={i.title} className="w-1/3" />
							</div>
							<div className="p-1 w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-around sm:justify-center text-gray-800">
								<div className="w-full h-auto">
									<h1 className="my-2 text-2xl lg:text-3xl font-bold tracking-wider">{i.title}</h1>
									<p className="text-sm text-gray-500">{i.description}</p>
								</div>
								<div className="w-full h-auto flex flex-row justify-between items-center">
									<div className="w-[30%] h-auto">
										<p className="text-3xl text-color-pink-1">$ {i.price}</p>
									</div>
									<div className="w-[30%] h-auto">
										<p className="text-gray-400">rates : {i.rating.rate}</p>
									</div>
									<div className="w-[30%] h-auto flex justify-between items-center text-white">
										<button
											className="rounded-lg w-10 h-10 bg-color-primary-2 transition-all hover:bg-purple-500 grid place-items-center"
											onClick={() => dispatch(incrementProduct(i.quantity))}
										>
											<FaPlus />
										</button>
										<p className="text-gray-700">{addToCart.length}</p>
										<button
											className="rounded-lg w-10 h-10 bg-color-pink-1 transition-all hover:bg-purple-500 grid place-items-center"
											onClick={() => dispatch(decrementProduct(i.quantity))}
										>
											{addToCart.length <= 1 ? <FaTrash /> : <FaMinus />}
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ProductsDetails;

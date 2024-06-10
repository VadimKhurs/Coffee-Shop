import leaf from "assets/images/Leaf.svg";
import rightLeaf from "assets/images/LeafRight.svg";
import offers from "assets/images/offers.png";
import OffersNav from "./OffersNav";
import OffersProducts from "./OffersProducts";

const Offers = () => {
	return (
		<div className="w-full lg:px-[180px] px-5 mt-[80px] relative">
			<img
				src={leaf}
				alt="leaf"
				className="absolute bottom-[-180px] left-0 rotate-[20deg]"
			/>
			<img
				src={rightLeaf}
				alt="leaf"
				className="absolute top-[-180px] right-0"
			/>
			<div className="w-full bg-primary rounded-[30px] h-[570px] flex justify-center py-8 relative">
				<img
					src={offers}
					alt="offers"
					className="absolute top-[50px] left-0"
				/>
				<img
					src={offers}
					alt="offers"
					className="absolute top-[50px] right-0 rotate-180"
				/>
				<span className="text-white font-semibold text-[35px] text-center">Special Offers</span>
				<div className="bg-white w-[85%] rounded-[20px] absolute top-[130px] lg:h-[570px] shadow-xl lg:px-[100px] px-5 lg:py-[50px] py-5 flex flex-col lg:gap-[60px] gap-5">
					<OffersNav />
					<OffersProducts />
				</div>
			</div>
		</div>
	);
};

export default Offers;

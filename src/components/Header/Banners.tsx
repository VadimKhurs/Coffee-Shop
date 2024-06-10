import banner from "assets/images/HeadBanner.png";
import { ArrowForwardOutline } from "react-ionicons";
import leafIcon from "assets/images/leafIcon.svg";

const Banners = () => {
	return (
		<div className="w-full h-[440px] flex lg:flex-row flex-col items-center gap-7 mt-10 lg:bg-transparent bg-primary lg:rounded-[20px] rounded-t-[20px]">
			<div
				className="flex flex-col gap-3 lg:w-[70%] w-full lg:rounded-[20px] rounded-t-[20px] bg-center bg-cover h-full lg:p-16 px-5 py-16"
				style={{ backgroundImage: `url(${banner})` }}
			>
				<span className="text-primary font-semibold text-[45px] z-50">
					Top Quality Equipments
				</span>
				<span className="text-primary font-medium text-[25px] z-50">
					and Coffee supplements
				</span>
				<div className="flex mt-3 items-center gap-2 cursor-pointer z-50 w-fit">
					<span className="text-primary font-medium">View Products</span>
					<ArrowForwardOutline cssClasses={"!text-primary"} />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-3 bg-primary rounded-[20px] h-full lg:w-[30%] w-full lg:pb-0 pb-5">
				<div className="flex items-center">
					<span className="text-white font-semibold text-[40px]">Eric Cafe</span>
					<img
						src={leafIcon}
						alt="leafIcon"
						className="rotate-90"
					/>
				</div>
				<span className="text-center text-navlinks">
					The most complete cafe equipment store
				</span>
				<div className="mt-3 cursor-pointer flex items-center justify-center gap-3 rounded-full bg-secondaryBtn w-[230px] h-[50px]">
					<span className="text-white font-medium">View Products</span>
					<ArrowForwardOutline cssClasses={"!text-white"} />
				</div>
			</div>
		</div>
	);
};

export default Banners;

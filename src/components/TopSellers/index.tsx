import { initialTopSellers } from "@/data";
import goldBean from "assets/images/goldBean.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import dp3 from "assets/images/dp3.png";
import { ArrowForwardOutline } from "react-ionicons";

const TopSellers = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const items = isMobile ? [...Array(2)] : [...Array(10)];
	const [cats, setCats] = useState(initialTopSellers);

	const activeCat = (title: string) => {
		setCats((prevCats) => prevCats.map((item) => ({ ...item, active: item.title === title })));
	};

	return (
		<div className="w-full lg:px-[180px] px-5 flex flex-col gap-12">
			<div className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-8 w-full">
				<div className="flex items-center gap-2">
					<img
						src={goldBean}
						alt="goldBean"
					/>
					<div className="flex flex-col gap-1">
						<span className="text-primary font-semibold text-[20px]">Top Sellers</span>
						<span className="text-primary font-medium">
							Be Quick! these ones run out fast.
						</span>
					</div>
				</div>
				<div className="w-full lg:w-[75%] flex items-center justify-between bg-catBorder lg:rounded-[20px] rounded-[8px] lg:h-[70px] lg:py-0 py-4 lg:px-8 px-5 overflow-x-auto lg:gap-0 gap-5">
					{cats.map((cat) => (
						<div
							key={cat.title}
							onClick={() => activeCat(cat.title)}
							className={`cursor-pointer text-primary font-medium p-2 rounded-[12px] whitespace-nowrap ${
								cat.active ? "bg-white" : "bg-transparent"
							}`}
						>
							{cat.title}
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center gap-[30px] flex-wrap">
				{items.map((index: number) => (
					<div
						key={index}
						className="lg:w-[280px] w-[80%] rounded-[20px] border-[1.5px] border-catBorder flex flex-col px-8 pt-8 pb-4 relative cursor-pointer"
					>
						<div className="absolute text-[15px] font-medium top-4 left-4 text-white rounded-[30px] py-[2px] px-3 flex items-center justify-center bg-primary">
							20%
						</div>
						<img
							src={dp3}
							alt="Product-Image"
							className="w-[47%] my-0 mx-auto"
						/>
						<div className="flex items-center justify-between w-full mt-8">
							<div className="flex flex-col">
								<span className="text-primary font-medium text-[17px]">Boxilian Beans</span>
								<span className="text-disabledText text-[15px]">Coffee beans</span>
							</div>
							<div className="flex flex-col">
								<span className="text-disabledText font-semibold line-through">$290</span>
								<span className="text-secondary font-semibold">$240</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex items-center justify-center">
				<div className="px-4 py-3 bg-secondary flex items-center gap-2 rounded-full cursor-pointer z-50">
					<span className="text-white font-medium text-[15px]">View More</span>
					<ArrowForwardOutline cssClasses={"!text-white"} />
				</div>
			</div>
		</div>
	);
};

export default TopSellers;

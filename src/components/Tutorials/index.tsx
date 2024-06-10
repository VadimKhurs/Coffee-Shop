import { tutorialsList } from "@/data";
import leaf from "assets/images/Leaf.svg";
import leafRight from "assets/images/LeafRight.svg";
import tutorials from "assets/images/tutorials.png";
import { ArrowForwardOutline } from "react-ionicons";

const Tutorials = () => {
	return (
		<div className="w-full lg:px-[180px] px-5 mt-[80px] relative lg:mb-[100px] mb-[110vh]">
			<img
				src={leaf}
				alt="leaf"
				className="absolute bottom-[-180px] left-0 rotate-[20deg]"
			/>
			<img
				src={leafRight}
				alt="leaf"
				className="absolute top-[-180px] right-0"
			/>
			<div className="w-full bg-primary rounded-[30px] h-[426px] flex justify-center py-8 relative">
				<img
					src={tutorials}
					alt="offers"
					className="absolute top-0 left-0"
				/>
				<img
					src={tutorials}
					alt="offers"
					className="absolute top-[-30px] right-0 rotate-180"
				/>
				<span className="text-white font-semibold text-[35px] text-center">
					Eric Cafe Tutorials
				</span>
				<div className="lg:w-[90%] w-full absolute top-[130px] lg:px-[100px] px-5 lg:py-[50px] flex lg:flex-row flex-col items-center justify-between lg:gap-[64px] gap-5 overflow-x-auto">
					{tutorialsList.map((tutorial) => (
						<div
							className="w-full bg-white rounded-[20px] shadow-xl flex flex-col px-3 py-4 mb-5"
							key={tutorial.date}
						>
							<img
								src={tutorial.image}
								className="rounded-[12px]"
								alt="Tutorial"
							/>
							<span className="font-medium text-[15px] text-primary leading-[26px] mt-3">
								{tutorial.title}
							</span>
							<div className="flex items-center justify-between w-full mt-4">
								<span className="text-disabledText text-sm">{tutorial.date}</span>
								<div className="flex items-center gap-2 cursor-pointer">
									<span className="text-secondary text-sm">Read more</span>
									<ArrowForwardOutline cssClasses={"!text-secondary"} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full lg:flex hidden items-center justify-center mt-[180px]">
				<div className="px-4 py-3 bg-secondary flex items-center gap-2 rounded-full cursor-pointer">
					<span className="text-white font-medium text-[15px]">View More</span>
					<ArrowForwardOutline cssClasses={"!text-white"} />
				</div>
			</div>
		</div>
	);
};

export default Tutorials;

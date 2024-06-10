import Marquee from "react-fast-marquee";
import logo from "assets/images/logo.png";

const AdsBar = () => {
	return (
		<div className="w-full h-[52px] bg-adsBar flex items-center overflow-x-auto lg:mt-0 mt-[150px]">
			<Marquee autoFill>
				<div className="flex items-center gap-1 px-8">
					<img
						src={logo}
						alt="logo"
					/>
					<span className="text-adsLogo font-semibold whitespace-nowrap">Eric Cafe</span>
				</div>
			</Marquee>
		</div>
	);
};

export default AdsBar;

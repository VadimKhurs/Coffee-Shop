import leaf from "assets/images/Leaf.svg";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import Banners from "./Banners";

const Header = () => {
	return (
		<div className="w-full bg-headerBg lg:px-[100px] px-5 pt-6 pb-12 relative">
			<TopNav />
			<Navbar />
			<Banners />
			<img
				src={leaf}
				alt="leaf"
				className="absolute bottom-0 left-0"
			/>
		</div>
	);
};

export default Header;

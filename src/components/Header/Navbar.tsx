import { navItems } from "@/data";
import instagram from "assets/images/instagram.svg";

const Navbar = () => {
	return (
		<div className="w-full lg:flex hidden items-center justify-between pl-6 pr-3 bg-primary rounded-full h-[60px] mt-7">
			<div className="flex items-center gap-10">
				{navItems.map((item) => (
					<a
						href={item.path}
						key={item.title}
						className="text-navlinks text-[14px]"
					>
						{item.title}
					</a>
				))}
			</div>
			<img
				src={instagram}
				alt="instagram-link"
				className="cursor-pointer"
			/>
		</div>
	);
};

export default Navbar;

import leafIcon from "assets/images/leafIcon.svg";
import paypal from "assets/images/paypal.png";
import stripe from "assets/images/stripe.webp";
import phone from "assets/images/phone.png";
import loc from "assets/images/loc.png";
import { LogoFacebook, LogoInstagram, LogoWhatsapp } from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full bg-primary py-8 flex flex-col items-center justify-center gap-8">
				<div className="flex items-center">
					<span className="text-white font-semibold text-[40px]">Eric Cafe</span>
					<img
						src={leafIcon}
						alt="leafIcon"
						className="rotate-90"
					/>
				</div>
				<span className="text-center lg:max-w-[450px] max-w-[90%] text-white text-[15px]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse optio consequatur.
				</span>
				<div className="flex lg:flex-row flex-col items-center lg:gap-14 gap-8">
					<a
						href="#"
						className="text-white"
					>
						Services
					</a>
					<a
						href="#"
						className="text-white"
					>
						Terms & Conditions
					</a>
					<a
						href="#"
						className="text-white"
					>
						Blog
					</a>
					<a
						href="#"
						className="text-white"
					>
						Tutorial
					</a>
					<a
						href="#"
						className="text-white"
					>
						Special Offers
					</a>
					<a
						href="#"
						className="text-white"
					>
						Contact
					</a>
				</div>
				<div className="w-full lg:w-[60%] bg-white opacity-10 h-[1px] my-0 mx-auto"></div>
				<div className="flex lg:w-[60%] w-full my-0 mx-auto lg:flex-row flex-col items-center justify-between">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-3">
							<img
								src={phone}
								alt="phone"
							/>
							<span className="text-white font-medium text-[15px]">+1-27631546</span>
						</div>
						<div className="flex items-center gap-3">
							<img
								src={loc}
								alt="location"
							/>
							<span className="text-white font-medium text-[15px]">
								Canada , Vancouver , British Colombia
							</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<img
							src={stripe}
							alt="stripe"
							className="w-[150px]"
						/>
						<img
							src={paypal}
							alt="paypal"
							className="w-[200px]"
						/>
					</div>
				</div>
			</div>
			<div className="w-full bg-darkFooter h-[57px] flex items-center justify-between lg:px-[100px] px-5">
				<span className="text-white text-[15px] z-50">
					All rights are resrved by Eric's Cafe. 2024
				</span>
				<div className="flex items-center gap-4 z-50">
					<LogoInstagram cssClasses={"cursor-pointer !fill-white"} />
					<LogoWhatsapp cssClasses={"cursor-pointer !fill-white"} />
					<LogoFacebook cssClasses={"cursor-pointer !fill-white"} />
				</div>
			</div>
		</div>
	);
};

export default Footer;

const Advertisement = () => {
	return (
		<div className="w-full flex lg:flex-row flex-col justify-between lg:px-[180px] px-5 gap-5 mt-[230px] lg:mb-[120px] mb-16">
			{[...Array(4)].map(() => (
				<div className="grid place-items-center w-full rounded-[24px] bg-primary h-[160px]">
					<span className="text-white font-semibold text-[20px]">Advertisement</span>
				</div>
			))}
		</div>
	);
};

export default Advertisement;

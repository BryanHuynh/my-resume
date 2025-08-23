import pfp from "../assets/PFP.png";

export const HeroCard = () => {
	return (
		<>
			<div className="items-center mb-10 flex flex-col">
				<img src={pfp} className="w-64 md:w-64" alt="Profile Picture" />
				<span className="text-3xl md:text-6xl">Hello! I am Bryan.</span>
				<span className="text-2xl md:text-6xl text-gray-400"> A full stack developer</span>
			</div>
		</>
	);
};

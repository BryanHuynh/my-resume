import pfp from "../assets/PFP.png";

export const HeroCard = () => {
	return (
		<>
			<div className="justify-items-center mb-10">
				<img src={pfp} alt="Profile Picture" />
                <h1> Hello! I am Bryan.</h1>
                <h1 className="text-gray-400"> A full stack developer</h1>
            </div>

		</>
	);
};

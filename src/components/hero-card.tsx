import { useEffect, useState } from "react";
import pfp from "../assets/PFP.png";
import openForWork from "../assets/open-for-work.png";
import { OpenForWorkFetch } from "../services/open-for-work-fetch";
import { EmailElement } from "./email/email-element";

export const HeroCard = () => {
	const [openForWorkFlag, setOpenForWorkFlag] = useState(false);

	useEffect(() => {
		async function fetchOpenForWork() {
			const flag = await OpenForWorkFetch.fetch();
			setOpenForWorkFlag(flag);
		}
		fetchOpenForWork();
	}, []);

	return (
		<>
			<div className="items-center mb-10 flex flex-col">
				<div className="relative">
					<img src={pfp} className="w-32 md:w-64" alt="Profile Picture" />
					<img
						style={{ display: openForWorkFlag ? "block" : "none" }}
						src={openForWork}
						className="w-32 h-full md:w-64 absolute top-0 right-0"
						alt="Profile Picture"
					/>
				</div>
				<span className="text-3xl md:text-6xl">Hello! I am Bryan.</span>
				<span className="text-2xl md:text-6xl text-gray-400"> A full stack developer</span>
				<EmailElement />
			</div>
		</>
	);
};

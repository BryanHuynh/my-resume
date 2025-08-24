import useState from "react";
import type { WorkExperience } from "../../services/work-experience-fetch";

type ExperienceCardProps = {
	key: number;
	experience: WorkExperience;
};

export const ExperienceCard = ({ key, experience }: ExperienceCardProps) => {
	const [expanded, setExpanded] = useState(false);
	const visableItemsCount = 2;

	const items = experience.description.split("\n");
	const visibleItems = expanded ? items : items.slice(0, visableItemsCount);

	function getTimePeriodString(start_date: Date, end_date: Date | undefined): string {
		let timePeriodString: string = `${start_date.toLocaleString("default", {
			month: "short",
		})}  ${start_date.getFullYear()} - `;
		if (end_date) {
			timePeriodString += `${end_date.toLocaleString("default", {
				month: "short",
			})}  ${end_date.getFullYear()}  `;
		} else {
			timePeriodString += "Present  ";
		}

		return timePeriodString;
	}

	return (
		<div key={key} className="flex flex-col md:flex-row gap-4">
			<div className="self-center md:self-start ">
				<img
					className="w-24 md:w-32"
					src={experience.icon}
					alt={`${experience.company} icon`}
				/>
			</div>
			<div className="flex flex-col w-full justify-start">
				<div className="self-start">
					<span className="text-xl md:text-2xl font-bold">{experience.title}</span>
				</div>
				<div className="self-start">
					<span className="text-md md:text-lg">{`${experience.company} · ${experience.permanency}`}</span>
				</div>
				<div className="self-start">
					<span className="text-sm text-gray-500">
						{getTimePeriodString(experience.start_date, experience.end_date)}
					</span>
				</div>
				<div className="self-start">
					<span className="text-sm text-gray-500">{experience.location}</span>
				</div>
				<div className="text-left">
					<ul className="list-disc pl-5 space-y-1 relative">
						{visibleItems.map((line, i) => (
							<li key={i}>{line}</li>
						))}

						{!expanded && items.length > visableItemsCount && (
							<div
								className="absolute w-full h-full bottom-0 left-0 !cursor-progress bg-gradient-to-t from-white to-transparent"
								onClick={() => setExpanded(!expanded)}
							/>
						)}

						{items.length > visableItemsCount && (
							<button
								onClick={() => setExpanded(!expanded)}
								className="text-gray-60 !bg-transparent border-none p-0 hover:underline relative !cursor-progress"
							>
								{expanded ? "Show less" : "Show more"}
							</button>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

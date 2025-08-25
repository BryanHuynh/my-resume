import { useEffect, useState } from "react";
import { WorkExperienceService, type WorkExperience } from "../../services/work-experience-fetch";
import { ExperienceCard } from "./experience-card";

export const ExperiencePanel = () => {
	const [experiences, setExperiences] = useState<WorkExperience[]>([]);
	useEffect(() => {
		async function fetchExperiences() {
			const experiences = await WorkExperienceService.fetch();
			setExperiences(experiences);
		}
		fetchExperiences();
	}, []);

	return (
		<div className="flex flex-col w-full mt-10 gap-5 md:gap-10">
			<span className="text-4xl md:text-5xl">Work Experience</span>
			<div className="flex flex-col p-2 w-h h-fit gap-10">
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} experience={experience} />
				))}
			</div>
		</div>
	);
};

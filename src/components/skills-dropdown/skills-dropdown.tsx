import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import { SkillsFetch } from "../../services/skills-fetch";
import { SkillLabel } from "../skills-banner/skill-label";
import { RandomColorGenerator } from "../../utils/random-color-generator";

export const SkillsDropdown = () => {
	const [open, setOpen] = useState(true);
	const [skills, setSkills] = useState<string[]>([]);

	useEffect(() => {
		async function loadSkills() {
			const skills = await SkillsFetch.fetchSkills();
			setSkills(skills);
		}
		loadSkills();
	}, []);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div className="justify-self-center flex flex-col items-center gap-4 min-w-full">
			<button className="flex items-center gap-2 hover:scale-110" onClick={handleToggle}>
				{open ? (
					<ChevronDownIcon className="w-5 h-5" />
				) : (
					<ChevronRightIcon className="w-5 h-5" />
				)}
			</button>
			<div className="border-gray-400 border-2 min-w-full rounded" style={{ display: open ? "flex" : "none" }}>
				<div className=" min-w-full flex flex-wrap justify-center items-center gap-0 content-start">
					{skills.map((skill, index) => (
						<SkillLabel
							key={index}
							skill={skill}
							color={RandomColorGenerator.generate()}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

import { useEffect, useState } from "react";
import { SkillsFetch } from "../services/skills-fetch";
import { Skill } from "./skill";
import { RandomColorGenerator } from "../utils/random-color-generator";

export const SkillsCard = () => {
	const [skills, setSkills] = useState<string[]>();

	useEffect(() => {
		async function loadSkills() {
			const skills = await SkillsFetch.fetchSkills();
			console.log(skills);
			setSkills(skills);
		}
		loadSkills();
	}, []);

	return (
		<div className="flex">
			{skills?.map((skill, index) => (
				<Skill key={index} skill={skill} color={RandomColorGenerator.generate()} />
			))}
		</div>
	);
};

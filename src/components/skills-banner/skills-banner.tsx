import { useEffect, useState } from "react";
import { SkillsFetch } from "../../services/skills-fetch";
import { SkillLabel } from "./skill-label";
import { RandomColorGenerator } from "../../utils/random-color-generator";
import "./skills-banner.css";

export const SkillsBanner = () => {
	const [skills, setSkills] = useState<string[]>();

	useEffect(() => {
		async function loadSkills() {
			const skills = await SkillsFetch.fetchSkills();
			setSkills(skills);
		}
		loadSkills();
	}, []);

	return (
		<div
			className="w-80 md:w-auto
			overflow-hidden whitespace-nowrap py-2           
			[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
			[mask-repeat:no-repeat]
			[mask-size:100%_100%]"
		>
			<div className="animate-marquee flex x-max">
				{skills?.concat(skills).map((skill, index) => (
					<SkillLabel key={index} skill={skill} color={RandomColorGenerator.generate()} />
				))}
			</div>
			<div className="flex x-max animate-marquee-reverse ">
				{skills?.concat(skills).map((skill, index) => (
					<SkillLabel key={index} skill={skill} color={RandomColorGenerator.generate()} />
				))}
				
			</div>
		</div>
	);
};

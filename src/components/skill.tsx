type SkillProps = {
	skill: string;
	color: string;
	key?: number;
};

export const Skill = ({ skill, color, key = 0 }: SkillProps) => {
    
	return (
		<div className={`rounded-lg p-2.5 px-5 m-2 bg-${color}-200`} key={key}>
			<span className={`text-${color}-500`}>{skill}</span>
		</div>
	);
};

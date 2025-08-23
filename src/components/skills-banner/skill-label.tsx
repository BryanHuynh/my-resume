type SkillLabelProps = {
	skill: string;
	color: string;
	key?: number;
};

export const SkillLabel = ({ skill, color, key = 0 }: SkillLabelProps) => {
    
	return (
		<div className={`rounded-lg p-2.5 px-5 m-2 bg-blue-200`} key={key}>
			<span className={`text-blue-500 text-lg font-semibold`}>{skill}</span>
		</div>
	);
};

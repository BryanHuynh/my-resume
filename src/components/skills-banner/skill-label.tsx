type SkillLabelProps = {
	skill: string;
	color: string;
	key?: number;
};

const colorMap: Record<string, { bg: string; text: string }> = {
	red: { bg: "bg-red-200", text: "text-red-700" },
	blue: { bg: "bg-blue-200", text: "text-blue-700" },
	green: { bg: "bg-green-200", text: "text-green-700" },
	yellow: { bg: "bg-yellow-200", text: "text-yellow-700" },
	indigo: { bg: "bg-indigo-200", text: "text-indigo-700" },
	purple: { bg: "bg-purple-200", text: "text-purple-700" },
	pink: { bg: "bg-pink-200", text: "text-pink-700" },
	orange: { bg: "bg-orange-200", text: "text-orange-700" },
};

export const SkillLabel = ({ skill, color, key = 0 }: SkillLabelProps) => {
	const classes = colorMap[color] || { bg: "bg-gray-200", text: "text-gray-500" };

	return (
		<div className={`rounded-lg p-1 px-2.5 md:p-2.5 md:px-5 m-2 ${classes.bg} hover:scale-110`} key={key}>
			<span className={`${classes.text} text-xs md:text-xl font-semibold }`}>{skill}</span>
		</div>
	);
};

type SkillLabelProps = {
	skill: string;
	color: string;
	key?: number;
	size?: 'sm' | 'md' | 'lg';
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



export const SkillLabel = ({ skill, color, key = 0, size = 'md' }: SkillLabelProps) => {
	const classes = colorMap[color] || { bg: "bg-gray-200", text: "text-gray-500" };

	const sizeMap: Record<'sm' | 'md' | 'lg', { container: string; text: string }> = {
		sm: { container: 'p-1 px-2', text: 'text-xs' },
		md: { container: 'p-2 px-4', text: 'text-sm' },
		lg: { container: 'p-2.5 px-5', text: 'text-xl' },
	};
	const sizing = sizeMap[size] || sizeMap.md;

	return (
		<div className={`rounded-lg h-fit ${sizing.container} m-2 ${classes.bg} hover:scale-110`} key={key}>
			<span className={`${classes.text} ${sizing.text} font-semibold capitalize`}>{skill}</span>
		</div>
	);
};

export const SkillsFetch = {
	fetchSkills(): Promise<string[]> {
		return Promise.resolve([
			"React",
			"Javascript",
			"Typescript",
			"NodeJS",
			"Material UI",
			"Java",
			"Python",
			"Springboot",
		]);
	},
};

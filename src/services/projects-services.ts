export type ProjectType = {
	name: string;
	image_src: string;
	skills: string[];
	url: string;
	short_description?: string;
	long_description?: string;
};

export const ProjectService = {
	fetch(): Promise<ProjectType[]> {
		return Promise.resolve([
			{
				name: "Leetcode Discord Bot",
				image_src:
					"https://cdn.dribbble.com/userupload/13167768/file/original-08e29755d8f12fdb9ef53d5b88bfeef0.jpg?resize=752x&vertical=center",
				skills: ["typescript", "postgresSQL", "discord.js", "node.js", "github actions"],
				url: "https://github.com/BryanHuynh/LeetCodeDiscordBot",
			},
		]);
	},
};

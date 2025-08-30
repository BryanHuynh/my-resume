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
			{
				name: "Leetcode Discord Bot",
				image_src:
					"https://cdn.dribbble.com/userupload/13167768/file/original-08e29755d8f12fdb9ef53d5b88bfeef0.jpg?resize=752x&vertical=center",
				skills: ["typescript", "postgresSQL", "discord.js", "node.js", "github actions"],
				url: "https://github.com/BryanHuynh/LeetCodeDiscordBot",
				short_description: "A Discord bot that showcases your accepted LeetCode solutions directly in your server.",
				long_description: "A bot designed specifically for competitive programming groups. It allows discord member to link their public leetcode account to their discord account. Upon Successfully completing a problem on Leetcode profile, it will notify the user if they would like to share said solution to the reset of the server. Upon Sharing it will create a public thread on an assigned channel to allow for collaboration and discussion about their solution" 
			},
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

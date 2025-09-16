export type ProjectType = {
	name: string;
	image_src: string;
	skills: string[];
	repo_uri: string;
	website_link?: string;
	short_description?: string;
	long_description?: string;
};

export const ProjectService = {
	fetch(): Promise<ProjectType[]> {
		return Promise.resolve([
			{
				name: "Speedrun Charts",
				image_src:
					"https://raw.githubusercontent.com/BryanHuynh/Speedrun-Charts-v2/refs/heads/main/public/SpeedrunCharts.png",
				skills: [
					"Typescript",
					"React",
					"Material UI",
					"MUI x Charts",
					"Vercel",
					"Client-Side Rendering",
				],
				repo_uri: "https://github.com/BryanHuynh/Speedrun-Charts-v2",
				website_link: "https://speedrun-charts-v2.vercel.app/",
				short_description:
					"A tool to show progressions of players and WR breaks of different game speedruns and categories.",
			},
			{
				name: "Leetcode Discord Bot",
				image_src:
					"https://raw.githubusercontent.com/BryanHuynh/LeetCodeDiscordBot/refs/heads/master/assets/Banner.png",
				skills: ["typescript", "postgresSQL", "discord.js", "node.js", "github actions"],
				repo_uri: "https://github.com/BryanHuynh/LeetCodeDiscordBot",
				website_link: "https://top.gg/bot/1387318923904553051",
				short_description:
					"A Discord bot that showcases your accepted LeetCode solutions directly in your server.",
				long_description:
					"A bot designed specifically for competitive programming groups. It allows discord member to link their public leetcode account to their discord account. Upon Successfully completing a problem on Leetcode profile, it will notify the user if they would like to share said solution to the reset of the server. Upon Sharing it will create a public thread on an assigned channel to allow for collaboration and discussion about their solution",
			},
			{
				name: "Twitch Streamer Network Analysis",
				image_src: "https://img.youtube.com/vi/Qiqc9CuubFE/maxresdefault.jpg",
				skills: [
					"Python3",
					"dotenv",
					"Twitch API's",
					"Web Scraping",
					"Pandas",
					"Graphi",
					"Numpy",
					"Data Cleaning/Transformation",
					"File I/O",
					"Recursive Automation",
					"VirtualEnv",
					"Data Analysis",
					"Network Science",
				],
				repo_uri: "https://github.com/BryanHuynh/Twitch-Streamer-Network",
				website_link: "https://www.youtube.com/watch?v=Qiqc9CuubFE",
				short_description:
					"Analysis of different social network on Twitch between streamers",
				long_description:
					"Twitch being one of the largest streaming platforms with millions of viewers and thousands of content creators. Twitch has a variety of different content streamers that are split up into different categories. These categories include Games, IRL(In Real Life), Music, etc. We have collected data about users and streamer follow data to identify how followers of one twitch streamer are connected to another twitch streamer. With this data, our goal is to analyze the probability of which genre is most likely to share users. We used a variety of tools to visualize the twitch streamers and the users that connect to each of them.",
			},
		]);
	},
};

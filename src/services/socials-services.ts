export type Socials = {
	github: string;
	linkedin: string;
};
export const SocialService = {
	async fetch(): Promise<Socials> {
		return {
			github: "https://github.com/bryanhuynh",
			linkedin: "https://www.linkedin.com/in/bryan-huynh42/",
		};
	},
};

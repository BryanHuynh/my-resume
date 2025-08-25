/* eslint-disable @typescript-eslint/no-explicit-any */
export type GithubEvent = {
	message: string;
	repo: string;
	repo_url: string;
	url: string;
	sha: string;
	date: string;
};

export const GitHubService = {
	async fetchEvents(username: string): Promise<GithubEvent[]> {
		const url = `https://api.github.com/users/${username}/events`;
		const response: never[] = await fetch(url).then((response) => response.json());
		const events: GithubEvent[] = response
			.filter((event: any) => event["type"] === "PushEvent")
			.flatMap((event: any) =>
				event["payload"]["commits"].map((commit: any) => ({
					message: commit.message,
					repo_url: `https://github.com/${event.repo.name}`,
					url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
					sha: commit.sha,
					repo: event["repo"]["name"],
					date: event["created_at"],
				}))
			);
		return events;
	},
};

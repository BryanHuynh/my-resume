type Event = {
	type: string;
	repo: string;
	commits: Commit[];
};

type Commit = {
	sha: string;
	message: string;
	url: string;
};

export const GitHubService = {
	async fetchEvents(username: string) {
		const url = `https://api.github.com/users/${username}/events`;
		const response: never[] = await fetch(url).then((response) => response.json());
		const events: Event[] = response
			.filter((event) => event["type"] === "PushEvent")
			.map((event) => {
				return {
					type: event["type"],
					repo: event["repo"]["name"],
					commits:
						(event["payload"]["commits"] as Commit[]).map((commit) => ({
							sha: commit.sha,
							message: commit.message,
							url: commit.url,
						})) || [],
				};
			});
		console.log(events);
	},
};

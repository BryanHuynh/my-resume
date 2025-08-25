import { useEffect, useState } from "react";
import { GitHubService, type GithubEvent } from "../../services/gh-service";
import { GitHubCommit } from "./gh-commit";

export const GitHubPanel = () => {
	const [events, setEvents] = useState<GithubEvent[]>([]);
	useEffect(() => {
		async function fetchEvents() {
			setEvents(await GitHubService.fetchEvents("BryanHuynh"));
		}
		fetchEvents();
	}, []);

	return (
		<div className="w-full mt-10 gap-5 md:gap-10 px-10">
			<span className="text-2xl md:text-3xl">Commit History</span>
			<div className="w-full h-64 border-gray-300 border-2 overflow-x-auto p-2">
				<table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th>Repo</th>
							<th>Commit Message</th>
							<th>Date</th>
							<th>Sha</th>
						</tr>
					</thead>
					<tbody>
						{events.map((event, i) => (
							<GitHubCommit key={i} event={event} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

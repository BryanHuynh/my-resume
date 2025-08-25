import type { GithubEvent } from "../../services/gh-service";

type GitHubCommitProps = {
	key: number;
	event: GithubEvent;
};
export const GitHubCommit = ({ key, event }: GitHubCommitProps) => {
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				<a className="!cursor-pointer" target="_blank" href={event.repo_url}>
					{event.repo}
				</a>
			</th>
			<td className="px-6 py-4">{event.message}</td>
			<td className="px-6 py-4">{new Date(event.date).toUTCString()}</td>
			<td className="px-6 py-4">
				<a className="!cursor-pointer" target="_blank" href={event.url}>
					{event.sha.substring(0, 7)}
				</a>
			</td>
		</tr>
	);
};

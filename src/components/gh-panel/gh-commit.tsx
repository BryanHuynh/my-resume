import type { GithubEvent } from "../../services/gh-service";

type GitHubCommitProps = {
	key: number;
	event: GithubEvent;
};
export const GitHubCommit = ({ key, event }: GitHubCommitProps) => {
	return (
		<tr
			key={key}
			className="bg-white border-b border-gray-200"
		>
			<th
				scope="row"
				className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
				<a className="!cursor-pointer text-wrap md:text-nowrap text-xs md:text-md" target="_blank" href={event.repo_url}>
					{event.repo}
				</a>
			</th>
			<td className="px-2 py-4 text-xs md:text-md text-wrap">{event.message}</td>
			<td className="px-2 py-4 text-xs md:text-md">{new Date(event.date).toUTCString()}</td>
			<td className="px-2 py-4 text-xs md:text-md">
				<a className="!cursor-pointer" target="_blank" href={event.url}>
					{event.sha.substring(0, 7)}
				</a>
			</td>
		</tr>
	);
};

import { useEffect } from "react";
import { GitHubService } from "../../services/gh-service";

export const GitHubPanel = () => {
	useEffect(() => {
		async function fetchEvents() {
			await GitHubService.fetchEvents("BryanHuynh");
		}
		fetchEvents();
	}, []);

	return (
		<div>
			<span>Commit History</span>
		</div>
	);
};

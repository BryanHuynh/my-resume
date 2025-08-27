import { useEffect, useState } from "react";
import { ProjectService, type ProjectType } from "../../services/projects-services";
import { Project } from "./project";

export const ProjectsPanel = () => {
	const [projects, setProjects] = useState<ProjectType[]>([]);

	useEffect(() => {
		async function fetchProjects() {
			const res = await ProjectService.fetch();
			console.log(res);
			setProjects(res);
		}
		fetchProjects();
	}, []);

	return (
		<div className="w-full h-96">
			<span className="text-2xl md:text-3xl">Projects</span>
			<div className="grid grid-cols-2 gap-4 mt-5">
				{projects.map((project) => (
					<div className="w-full min-h-124 border-gray-950 border-2">
						<Project project={project}></Project>
					</div>
				))}
			</div>
		</div>
	);
};

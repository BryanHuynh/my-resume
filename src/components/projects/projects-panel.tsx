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
			<div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:mt-5">
				{projects.map((project) => (
					<div className="w-full min-h-124 ">
						<Project project={project}></Project>
					</div>
				))}
			</div>
		</div>
	);
};

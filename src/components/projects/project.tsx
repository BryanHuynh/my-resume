import type { ProjectType } from "../../services/projects-services";

type ProjectProps = {
	project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
	return (
		<div>
            <img src={project.image_src} alt={project.name} />
			<span>{project.name}</span>
		</div>
	);
};

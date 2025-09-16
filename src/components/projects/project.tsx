import type { ProjectType } from "../../services/projects-services";
import { SkillLabel } from "../skills-banner/skill-label";
import { RandomColorGenerator } from "../../utils/random-color-generator";
import { useMemo, useState } from "react";

type ProjectProps = {
	project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
	const [expandLongDesc, setExpandLongDesc] = useState<boolean>(false);

	const skillsDom = useMemo(() => {
		return (
			<div className="flex flex-wrap mt-1">
				{project.skills.map((skill, i) => (
					<SkillLabel
						key={i}
						skill={skill}
						color={RandomColorGenerator.generate()}
						size={"sm"}
					/>
				))}
			</div>
		);
	}, [project.skills]);

	return (
		<div className="flex flex-col p-3">
			<a
				href={project.repo_uri}
				target="_blank"
				rel="noreferrer"
				className="w-fit hover:underline"
			>
				<span className="text-lg md:text-2xl font-semibold">{project.name}</span>
			</a>

			{project.image_src && (
				<img
					src={project.image_src}
					alt={project.name}
					className="w-full h-40 md:h-56 object-cover border border-gray-200"
					loading="lazy"
				/>
			)}

			{project.skills?.length ? skillsDom : null}

			{project.short_description && (
				<p className="text-sm md:text-base text-gray-700">{project.short_description}</p>
			)}
			{project.long_description && expandLongDesc && (
				<p className="text-sm md:text-base text-gray-700">{project.long_description}</p>
			)}
			<div className="flex flex-row justify-center gap-5">
				{project.long_description && (
					<div className="mt-2">
						<button
							onClick={() => setExpandLongDesc(!expandLongDesc)}
							className="text-gray-60 !bg-transparent border-none p-0 hover:underline relative !cursor-pointer"
						>
							{expandLongDesc ? "Show less" : "Show more"}
						</button>
					</div>
				)}

				<div className="mt-2">
					<a
						href={project.repo_uri}
						target="_blank"
						rel="noreferrer"
						className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
					>
						View Repo →
					</a>
				</div>
				{project.website_link && (
					<div className="mt-2">
						<a
							href={project.website_link}
							target="_blank"
							rel="noreferrer"
							className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
						>
							View Site →
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

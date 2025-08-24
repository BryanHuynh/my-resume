export type WorkExperience = {
	title: string;
	company: string;
	permanency: string;
	start_date: Date;
	end_date?: Date;
	location: string;
	description: string;
	icon: string;
};

export const WorkExperienceService = {
	fetch(): Promise<WorkExperience[]> {
		return Promise.resolve([
			{
				title: "Technology Analyst",
				company: "Morgan Stanley",
				permanency: "Permanent Full Time",
				start_date: new Date("September 2023"),
				end_date: new Date("March 2025"),
				location: "Calgary Alberta Canada (Hybrid)",
				description: `Refactored legacy internal systems to improve code maintainability, reliability, and performance using Java, Spring Boot, and JUnit 
                Collaborated with analytics teams to write and enhance SQL scripts that generated large-scale, data-rich reports for business units 
                Identified and resolved multiple critical library vulnerabilities, unblocking development across teams and contributing to firm-wide security compliance
                Assisted in validation and documentation efforts for mass data migration from legacy systems to modernized infrastructure
                Operated within Unix-based virtual machines for development, debugging, and deployment workflows
                Participated in the Technology Analyst Program (TAP), building a foundation in full-stack development, software architecture, and secure coding practices
                Contributed to an Agile delivery process, using Git, Bitbucket, and CI/CD tooling to collaborate on sprint-based deliverablesRefactored legacy internal systems to improve code maintainability, reliability, and performance using Java, Spring Boot, and JUnit Collaborated with analytics teams to write and enhance SQL scripts that generated large-scale, data-rich reports for business units Identified and resolved multiple critical library vulnerabilities, unblocking development across teams and contributing to firm-wide security compliance Assisted in validation and documentation efforts for mass data migration from legacy systems to modernized infrastructure Operated within Unix-based virtual machines for development, debugging, and deployment workflows Participated in the Technology Analyst Program (TAP), building a foundation in full-stack development, 
                software architecture, and secure coding practices Contributed to an Agile delivery process, using Git, Bitbucket, and CI/CD tooling to collaborate on sprint-based deliverables`,
				icon: "https://media.licdn.com/dms/image/v2/C560BAQFtDpMvYgbIwA/company-logo_200_200/company-logo_200_200/0/1677778128461/morgan_stanley_logo?e=1758758400&v=beta&t=7O0ftRdOLiAomWe_bxG6QiCW_hc-uoke2ozSiUSo7mk",
			} as WorkExperience,
			{
				title: "Web Developer",
				company: "BGC Engineering Inc.",
				permanency: "Co-op",
				start_date: new Date("January 2022"),
				end_date: new Date("August 2022"),
				location: "Calgary Alberta Canada (Remote)",
				description: `Developed and maintained features for Cambio, a geotechnical web platform, using React (TypeScript) and .NET (C#)
                Built a working prototype for a 2D topological graph, showcasing new spatial data visualization capabilities to stakeholders
                Integrated front-end components with structured data via Entity Framework and SQL databases
                Collaborated with cross-functional teams to deliver performant, production-ready features in a fast-paced environment`,
				icon: "https://media.licdn.com/dms/image/v2/C560BAQFBDHd48f0tzA/company-logo_100_100/company-logo_100_100/0/1630657196920/bgc_engineeringcom_logo?e=1758758400&v=beta&t=fjmAkzV6_pFnBMBiNA0M0LeNIFfN884HwQH18XdLGiU",
			} as WorkExperience,
		]);
	},
};

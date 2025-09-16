import "./App.css";
import { ExperiencePanel } from "./components/experience-card/experience-panel";
import { GitHubPanel } from "./components/gh-panel/gh-panel";
import { HeroCard } from "./components/hero-card";
import { ProjectsPanel } from "./components/projects/projects-panel";
import { ResumePreview } from "./components/resume-preview/resume-preview";
import { SkillsBanner } from "./components/skills-banner/skills-banner";
import { SkillsDropdown } from "./components/skills-dropdown/skills-dropdown";
import { Socials } from "./socials/socials";

function App() {
	return (
		<>
			<div className="container flex flex-col gap-5">
				<HeroCard></HeroCard>
				<Socials />
				<SkillsBanner></SkillsBanner>
				<SkillsDropdown></SkillsDropdown>
				<ExperiencePanel></ExperiencePanel>
				<ResumePreview></ResumePreview>
				<ProjectsPanel></ProjectsPanel>
			</div>
		</>
	);
}

export default App;

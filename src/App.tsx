import "./App.css";
import { ExperiencePanel } from "./components/experience-card/experience-panel";
import { GitHubPanel } from "./components/gh-panel/gh-panel";
import { HeroCard } from "./components/hero-card";
import { SkillsBanner } from "./components/skills-banner/skills-banner";
import { SkillsDropdown } from "./components/skills-dropdown/skills-dropdown";
import { Socials } from "./socials/socials";

function App() {
	return (
		<>
			<div className="container">
				<HeroCard></HeroCard>
				<Socials />
				<SkillsBanner></SkillsBanner>
				<SkillsDropdown></SkillsDropdown>
				<ExperiencePanel></ExperiencePanel>
				<GitHubPanel></GitHubPanel>
			</div>
		</>
	);
}

export default App;

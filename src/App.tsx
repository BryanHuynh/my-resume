import "./App.css";
import { ExperiencePanel } from "./components/experience-card/experience-panel";
import { HeroCard } from "./components/hero-card";
import { SkillsBanner } from "./components/skills-banner/skills-banner";
import { SkillsDropdown } from "./components/skills-dropdown/skills-dropdown";

function App() {
	return (
		<>
			<div className="container">
				<HeroCard></HeroCard>
				<SkillsBanner></SkillsBanner>
				<SkillsDropdown></SkillsDropdown>
				<ExperiencePanel></ExperiencePanel>
			</div>
		</>
	);
}

export default App;

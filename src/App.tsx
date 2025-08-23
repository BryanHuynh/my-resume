import "./App.css";
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
			</div>
		</>
	);
}

export default App;

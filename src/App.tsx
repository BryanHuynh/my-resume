import "./App.css";
import { HeroCard } from "./components/hero-card";
import { SkillsBanner } from "./components/skills-banner/skills-banner";

function App() {
	return (
		<>
			<div className="container">
				<HeroCard></HeroCard>
				<SkillsBanner></SkillsBanner>
			</div>
		</>
	);
}

export default App;

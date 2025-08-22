export const RandomColorGenerator = {
	generate(): string {
		const colors = ["red", "green", "blue", "yellow", "indigo", "purple", "pink"];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	},
};

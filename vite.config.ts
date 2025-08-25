import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	server: {
		host: true,
		port: 3000,
	},
	plugins: [tailwindcss()],
	base: "/my-resume",
});

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialService } from "../services/socials-services";
import { useEffect, useState } from "react";
import type { Socials as SocialsType } from "../services/socials-services";

export const Socials = () => {
	const [socials, setSocials] = useState<SocialsType>();
	useEffect(() => {
		const fetchSocials = async () => {
			const res = await SocialService.fetch();
			setSocials(res);
		};
		fetchSocials();
	}, []);
	return (
		<nav className="flex gap-4 justify-center">
			<a
				href={socials?.github}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-gray-400"
			>
				<FaGithub size={35} />
			</a>

			<a
				href={socials?.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-gray-400"
			>
				<FaLinkedin size={35} />
			</a>
		</nav>
	);
};

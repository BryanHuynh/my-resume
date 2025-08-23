import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

export const SkillsDropdown = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div className="justify-self-center">
			<button className="flex items-center gap-2 hover:scale-110" onClick={handleToggle}>
				{open ? (
					<ChevronDownIcon className="w-5 h-5" />
				) : (
					<ChevronRightIcon className="w-5 h-5" />
				)}
			</button>
		</div>
	);
};

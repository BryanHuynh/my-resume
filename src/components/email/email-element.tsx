import { useEffect, useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { EmailService } from "../../services/email-service";

export const EmailElement = () => {
	const [copied, setCopied] = useState(false);
	const [email, setEmail] = useState<string>();

	useEffect(() => {
		async function fetchEmail() {
			setEmail(await EmailService.fetch());
		}
		fetchEmail();
	}, []);

	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);

			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<div>
			{email && (
				<span
					onClick={() => handleCopy(email)}
					className="mt-3 text-md md:text-lg text-gray-400 flex flex-row gap-1 items-center cursor-pointer"
				>
					{email}
					<ClipboardDocumentIcon className="w-5 h-5" />
				</span>
			)}
			{copied && <div className="mt-2 text-green-600 text-sm">✅ Copied to clipboard!</div>}
		</div>
	);
};

import { useEffect, useState } from "react";
import { ResumeService } from "../../services/resume-service";

export const ResumePreview = () => {
	const [resume, setResume] = useState<string | null>();

	useEffect(() => {
		async function fetchResume() {
			setResume(await ResumeService.fetch());
		}
		fetchResume();
	}, []);

	return (
		<>
			{resume && (
				<div className="">
					<span className="block md:hidden text-2xl md:text-3xl">Resume</span>
					<iframe
						className="hidden md:block"
						src={`${resume}/preview`}
						width="100%"
						height="600px"
					/>
					<div className="flex flex-row gap-5 justify-center">
						<div className="mt-2 text-right">
							<a
								href={`${resume}/view`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-4 py-2 bg-blue-200 text-blue-700 rounded hover:bg-blue-300"
								aria-label="Preview resume on Google Drive"
							>
								Preview
							</a>
						</div>
						<div className="mt-2 text-right">
							<a
								href={`${resume}/export?format=pdf`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-4 py-2 bg-blue-200 text-blue-700 rounded hover:bg-blue-300"
								aria-label="Download resume as PDF"
							>
								Download
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

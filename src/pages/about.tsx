import { Image } from "@heroui/react";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
	return (
		<DefaultLayout>
			<section className="w-dvw flex flex-col items-end justify-center gap-4 py-4">
				<div className="inline-block justify-end">
					<Image
						width="100%"
						radius="none"
						className="rounded-r-3xl rounded-l-full"
						src="/doctor.jpg"
					/>
				</div>
			</section>
		</DefaultLayout>
	);
}

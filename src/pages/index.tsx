import DefaultLayout from "@/layouts/default";
import { Carousel } from "@/components/carousel";
import { siteConfig } from "@/config/site";
import { Timeline } from "@/components/timeline";
import { Card } from "@/components/card";
import { About } from "@/components/about";

export default function IndexPage() {
	return (
		<DefaultLayout>
			{/* Hero */}
			<section>
				<Carousel />
			</section>

			{/* Services */}
			<section className="pt-16 px-6 bg-white">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-semibold mb-12 text-primary font-nando">
						Nuestros servicios
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{siteConfig.services.map((service) => (
							<Card
								key={service.label}
								Icon={service.icon}
								title={service.label}
								description={service.description}
								tags={service.tags}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Quienes somos */}
			<Timeline />

			<section>
				<About />
			</section>
		</DefaultLayout>
	);
}

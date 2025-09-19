import { About } from "@/components/about";
import { Card } from "@/components/card";
import { Carousel } from "@/components/carousel";
import { Timeline } from "@/components/timeline";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			{/* Hero */}
			<section>
				<Carousel />
			</section>

			{/* Services */}
			<section className="pt-16 px-6 bg-white">
				<div className="max-w-7xl mx-auto text-center">
					<div className="flex mb-12 h-full items-center justify-center">
						<span className="h-px bg-primary-300 relative flex-grow hidden lg:block"></span>
						<h2 className="text-4xl font-semibold text-primary font-nando mx-0 lg:mx-4">
							Nuestros servicios
						</h2>
						<span className="h-px bg-primary-300 relative flex-grow hidden lg:block"></span>
					</div>

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

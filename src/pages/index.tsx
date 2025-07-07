import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import DefaultLayout from "@/layouts/default";
import { Carousel } from "@/components/carousel";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
	return (
		<DefaultLayout>
			{/* Hero */}
			<section>
				<Carousel />
			</section>

			{/* Services */}
			<section className="py-16 px-6 bg-white">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-semibold mb-12 text-primary-500 font-nando">
						Nuestros servicios
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{siteConfig.services.map((service) => (
							<div
								key={service.label}
								className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition"
							>
								<div className="flex justify-center text-secondary-400">
									{<service.icon className="w-[32px] h-[32px]" />}
								</div>
								<h3 className="text-xl font-semibold text-primary">
									{service.label}
								</h3>
								<p>{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-gray-50 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-semibold mb-12">
						What Our Patients Say
					</h2>
					<div className="space-y-8">
						{[
							{
								name: "Maria G.",
								quote:
									"The staff was very friendly and professional. I felt cared for and listened to.",
							},
							{
								name: "James T.",
								quote:
									"Quick, efficient, and very knowledgeable. Highly recommended.",
							},
						].map(({ name, quote }) => (
							<div key={name} className="bg-white p-6 rounded-xl shadow">
								<p className="text-gray-700 italic">"{quote}"</p>
								<p className="mt-4 font-semibold text-blue-600">{name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 px-6 bg-blue-600 text-white text-center">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-4">
						Ready to schedule a visit?
					</h2>
					<p className="mb-6 text-lg">
						Contact us today and take the first step toward better health.
					</p>
					<Button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-100">
						Call Us <PhoneIcon className="inline h-5 w-5 ml-2" />
					</Button>
				</div>
			</section>
		</DefaultLayout>
	);
}

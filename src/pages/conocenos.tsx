import { Card, CardBody, Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function ConocenosPage() {
	return (
		<DefaultLayout>
			<div className="max-w-6xl mx-auto px-4 py-8">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
						Grupo Cami
					</h1>
					<p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
						Crecimiento sostenible, basado en la confianza, la calidad y el
						desarrollo de soluciones que respondan a las necesidades del entorno
						sanitario con impacto positivo y valor agregado.
					</p>
				</section>

				{/* Mission Section */}
				<section className="mb-16">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-primary mb-6">
								Nuestra Mision
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								Ofrecer servicios de salud integrales y personalizados con
								sentido humano, combinando atención médica de calidad con
								soluciones comerciales como la importación de equipo médico,
								alquiler de espacios clínicos y equipamiento profesional. Nos
								enfocamos en satisfacer las necesidades de pacientes y
								profesionales de la salud, brindando confianza, innovación y
								excelencia en cada servicio.
							</p>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</div>
								<span className="text-gray-600 font-medium">
									Trato Centrado en los pacientes
								</span>
							</div>
						</div>
						<div>
							<Image
								src="./mission.jpg"
								alt="Our Mission"
								width={500}
								height={400}
								className="rounded-2xl shadow-lg"
							/>
						</div>
					</div>
				</section>

				{/* Vision Section */}
				<section className="mb-16">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="order-2 md:order-1">
							<Image
								src="./vision.jpg"
								alt="Our Vision"
								width={500}
								height={400}
								className="rounded-2xl shadow-lg"
							/>
						</div>
						<div className="order-1 md:order-2">
							<h2 className="text-3xl font-bold text-primary mb-6">
								Nuestra Vision
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								Ser un grupo empresarial referente en el sector salud,
								reconocido por su excelencia, innovación y compromiso en la
								prestación de servicios integrales que incluyen atención médica
								de primer nivel, laboratorio clínico, farmacia, importación y
								distribución de equipo médico, alquiler de espacios
								profesionales y equipamiento de clínicas. Aspiramos a ser
								referentes por nuestra innovación, calidad, calidez humana y
								compromiso con el bienestar de nuestros pacientes y aliados
								profesionales.
							</p>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<svg
										className="w-6 h-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<span className="text-gray-600 font-medium">
									Comprometidos con la excelencia
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold text-primary text-center mb-12">
						Nuestros Valores
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
						{siteConfig.values.map((value, index) => (
							<Card key={index} className="p-6 w-full max-w-sm">
								<CardBody className="text-center">
									{value.iconSrc}
									<h3 className="text-xl font-semibold text-gray-900 my-3">
										{value.title}
									</h3>
									<p className="text-gray-600">{value.description}</p>
								</CardBody>
							</Card>
						))}
					</div>
				</section>

				{/* Projection Section */}
				<section className="mb-16">
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
							Our Projection
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									2024-2025 Goals
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Expand telemedicine services to reach underserved
											communities
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Implement AI-powered diagnostic tools for improved
											accuracy
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Launch preventive care programs for chronic disease
											management
										</span>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Long-term Vision
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Establish specialized treatment centers for complex
											conditions
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Partner with research institutions for clinical trials
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-700">
											Achieve carbon-neutral healthcare operations by 2030
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</DefaultLayout>
	);
}

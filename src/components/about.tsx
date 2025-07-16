import { Card, CardBody, Image } from "@heroui/react";
import { siteConfig } from "@/config/site";

export const About = () => {
	return (
		<div className="w-full bg-gradient-to-b from-background to-background/95">
			<div className="container mx-auto pb-16 px-4">
				{/* Mission Section */}
				<section className="mb-20">
					<div className="flex flex-col-reverse lg:flex-row items-center gap-12">
						<div className="w-full lg:w-1/3">
							<Card className="shadow-2xl border-none bg-white/80 backdrop-blur-sm">
								<CardBody className="p-0">
									<Image
										src="/mission.jpg"
										alt="Mission Team"
										className="w-full h-full object-cover rounded-lg"
									/>
								</CardBody>
							</Card>
						</div>
						<div className="w-full lg:w-1/2 space-y-6">
							<h2 className="text-primary text-5xl lg:text-6xl font-bold leading-tight">
								Misión
							</h2>
							<p className="text-lg text-foreground/80 leading-relaxed">
								Ofrecer servicios de salud integrales y personalizados con
								sentido humano, combinando atención médica de calidad con
								soluciones comerciales como la importación de equipo médico,
								alquiler de espacios clínicos y equipamiento profesional. Nos
								enfocamos en satisfacer las necesidades de pacientes y
								profesionales de la salud, brindando confianza, innovación y
								excelencia en cada servicio.
							</p>
						</div>
					</div>
				</section>

				{/* Vision Section */}
				<section className="mb-36">
					<div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
						<div className="w-full lg:w-1/3">
							<Card className="shadow-2xl border-none bg-white/80 backdrop-blur-sm">
								<CardBody className="p-0">
									<Image
										src="/vision.jpg"
										alt="Vision Team"
										className="w-full h-full object-cover rounded-lg"
									/>
								</CardBody>
							</Card>
						</div>
						<div className="w-full lg:w-1/2 space-y-6">
							<h2 className="text-primary text-5xl lg:text-6xl font-bold leading-tight">
								Visión
							</h2>
							<p className="text-lg text-foreground/80 leading-relaxed">
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
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="mb-16">
					<div className="text-center mb-12 flex items-center justify-center px-32">
						<div className="w-full h-px bg-primary mx-auto rounded-full"></div>
						<h2 className="text-primary text-4xl lg:text-5xl font-bold mb-4 px-5">
							Valores
						</h2>
						<div className="w-full h-px bg-primary mx-auto rounded-full"></div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{siteConfig.values.map((value) => (
							<Card key={value.title} shadow="none">
								<CardBody className="flex flex-col text-center p-8 md:flex-row">
									{value.iconSrc}
									<div className="flex flex-col mt-6 lg:ml-6">
										<h3 className="text-2xl font-bold text-primary text-center lg:text-left group-hover:text-primary/80 transition-colors mb-5">
											{value.title}
										</h3>
										<p className="text-foreground/70 leading-relaxed text-left">
											{value.description}
										</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

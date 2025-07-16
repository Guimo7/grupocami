import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiChart, BiGroup, BiShield, BiSupport } from "react-icons/bi";
import { FaClipboardCheck, FaHandshake, FaUserMd } from "react-icons/fa";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AsesoriaPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<BiSupport className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Asesoría Médica</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Orientación profesional y especializada para instituciones,
							empresas y profesionales de la salud. Optimizamos procesos y
							mejoramos la calidad de atención médica.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Servicios de Asesoría
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{asesoriaServices.map((service, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
												<service.icon className="w-6 h-6 text-primary" />
											</div>
											<h3 className="text-xl font-semibold">{service.title}</h3>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed">
											{service.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Benefits Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Beneficios de Nuestra Asesoría
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{benefits.map((benefit, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<benefit.icon className="w-5 h-5 text-primary" />
											</div>
											<div>
												<h3 className="text-lg font-semibold mb-2">
													{benefit.title}
												</h3>
												<p className="text-foreground/70">
													{benefit.description}
												</p>
											</div>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Process Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Proceso de Asesoría
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{processSteps.map((step, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">
												{index + 1}
											</span>
										</div>
										<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
										<p className="text-foreground/70 text-sm">
											{step.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<Card className="max-w-2xl mx-auto">
							<CardBody className="p-8">
								<h2 className="text-2xl font-bold text-primary mb-4">
									¿Necesitas asesoría especializada?
								</h2>
								<p className="text-foreground/70 mb-6">
									Contáctanos para una consulta inicial y descubre cómo podemos
									ayudarte a optimizar tus procesos médicos y mejorar la calidad
									de atención.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<FaHandshake className="w-5 h-5" />}
									>
										Solicitar Consulta
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiChart className="w-5 h-5" />}
									>
										Ver Portafolio
									</Button>
								</div>
							</CardBody>
						</Card>
					</section>
				</div>
			</div>
		</DefaultLayout>
	);
}

const asesoriaServices = [
	{
		title: "Consultoría Hospitalaria",
		description:
			"Optimización de procesos hospitalarios, mejora de la eficiencia operativa y calidad de atención.",
		icon: BiSupport,
	},
	{
		title: "Gestión de Calidad",
		description:
			"Implementación de sistemas de gestión de calidad y acreditaciones médicas.",
		icon: BiShield,
	},
	{
		title: "Asesoría Normativa",
		description:
			"Cumplimiento de regulaciones sanitarias y normativas del sector salud.",
		icon: FaClipboardCheck,
	},
	{
		title: "Capacitación Profesional",
		description:
			"Formación especializada para equipos médicos y administrativos.",
		icon: FaUserMd,
	},
	{
		title: "Análisis de Procesos",
		description: "Evaluación y mejora de procesos clínicos y administrativos.",
		icon: BiChart,
	},
	{
		title: "Asesoría Empresarial",
		description:
			"Consultoría para empresas del sector salud y servicios médicos.",
		icon: BiGroup,
	},
];

const benefits = [
	{
		title: "Experiencia Comprobada",
		description:
			"Más de 10 años de experiencia en el sector salud con resultados exitosos.",
		icon: FaUserMd,
	},
	{
		title: "Enfoque Personalizado",
		description:
			"Soluciones adaptadas a las necesidades específicas de cada cliente.",
		icon: FaHandshake,
	},
	{
		title: "Mejora Continua",
		description:
			"Implementación de sistemas de mejora continua y monitoreo de resultados.",
		icon: BiChart,
	},
	{
		title: "Cumplimiento Normativo",
		description:
			"Garantizamos el cumplimiento de todas las regulaciones sanitarias vigentes.",
		icon: BiShield,
	},
];

const processSteps = [
	{
		title: "Evaluación Inicial",
		description:
			"Análisis completo de la situación actual y identificación de oportunidades.",
	},
	{
		title: "Propuesta Personalizada",
		description:
			"Desarrollo de una propuesta específica adaptada a sus necesidades.",
	},
	{
		title: "Implementación",
		description: "Ejecución del plan de asesoría con acompañamiento continuo.",
	},
	{
		title: "Seguimiento",
		description:
			"Monitoreo de resultados y ajustes para asegurar el éxito del proyecto.",
	},
];

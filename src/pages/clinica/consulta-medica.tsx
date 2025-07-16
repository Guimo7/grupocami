import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiClinic, BiPhone, BiTime, BiUser } from "react-icons/bi";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ConsultaMedicaPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<BiClinic className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Consulta Médica</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Atención médica profesional y personalizada con los más altos
							estándares de calidad. Nuestro equipo de especialistas está
							comprometido con tu bienestar y salud.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{consultaServices.map((service, index) => (
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

					{/* Process Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Proceso de Atención
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
									¿Listo para tu consulta?
								</h2>
								<p className="text-foreground/70 mb-6">
									Programa tu cita médica hoy y recibe la atención profesional
									que mereces.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<BiPhone className="w-5 h-5" />}
									>
										Llamar Ahora
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiTime className="w-5 h-5" />}
									>
										Agendar Cita
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

const consultaServices = [
	{
		title: "Medicina General",
		description:
			"Atención médica integral para toda la familia con enfoque preventivo y curativo.",
		icon: BiUser,
	},
	{
		title: "Consultas Especializadas",
		description:
			"Acceso a especialistas médicos en diferentes áreas de la salud.",
		icon: BiClinic,
	},
	{
		title: "Atención de Urgencias",
		description:
			"Atención médica inmediata para situaciones que requieren intervención rápida.",
		icon: BiTime,
	},
	{
		title: "Seguimiento Médico",
		description:
			"Monitoreo continuo de tu estado de salud y tratamientos en curso.",
		icon: BiUser,
	},
	{
		title: "Consulta Preventiva",
		description:
			"Evaluaciones médicas regulares para prevenir enfermedades y mantener la salud.",
		icon: BiClinic,
	},
	{
		title: "Telemedicina",
		description:
			"Consultas médicas a distancia para mayor comodidad y accesibilidad.",
		icon: BiPhone,
	},
];

const processSteps = [
	{
		title: "Reserva tu Cita",
		description: "Contacta con nosotros para programar tu consulta médica.",
	},
	{
		title: "Evaluación Inicial",
		description:
			"Nuestro equipo médico realizará una evaluación completa de tu estado de salud.",
	},
	{
		title: "Diagnóstico",
		description:
			"Análisis profesional y diagnóstico preciso de tu condición médica.",
	},
	{
		title: "Plan de Tratamiento",
		description:
			"Desarrollo de un plan personalizado para tu recuperación y bienestar.",
	},
];

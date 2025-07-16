import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiBook, BiCertification, BiGroup, BiTime } from "react-icons/bi";
import {
	FaAward,
	FaChalkboardTeacher,
	FaGraduationCap,
	FaUserMd,
} from "react-icons/fa";
import { MdOnlinePrediction, MdSchedule } from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function CapacitacionesPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<FaGraduationCap className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Capacitaciones</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Programas de formación especializada para profesionales de la
							salud. Actualizaciones médicas, certificaciones y desarrollo
							profesional continuo con los mejores estándares.
						</p>
					</section>

					{/* Training Programs */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Programas de Capacitación
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{trainingPrograms.map((program, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
												<program.icon className="w-6 h-6 text-primary" />
											</div>
											<div>
												<h3 className="text-xl font-semibold">
													{program.title}
												</h3>
												<p className="text-sm text-foreground/60">
													{program.duration}
												</p>
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-3">
											{program.description}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-sm text-foreground/60">
												{program.level}
											</span>
											<span className="text-lg font-bold text-primary">
												{program.price}
											</span>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Modalities */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Modalidades de Capacitación
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{modalities.map((modality, index) => (
								<Card
									key={index}
									className="text-center border-2 border-transparent hover:border-primary transition-colors"
								>
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<modality.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{modality.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{modality.description}
										</p>
										<ul className="text-sm text-foreground/60 mb-6">
											{modality.features.map((feature, idx) => (
												<li key={idx} className="mb-1">
													• {feature}
												</li>
											))}
										</ul>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Beneficios de Nuestras Capacitaciones
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

					{/* Certification Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Proceso de Certificación
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{certificationProcess.map((step, index) => (
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
									¿Listo para avanzar en tu carrera?
								</h2>
								<p className="text-foreground/70 mb-6">
									Únete a nuestros programas de capacitación y mantente
									actualizado con las últimas tendencias y mejores prácticas en
									el sector salud.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<FaGraduationCap className="w-5 h-5" />}
									>
										Inscribirse Ahora
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiBook className="w-5 h-5" />}
									>
										Ver Calendario
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

const trainingPrograms = [
	{
		title: "Atención Primaria",
		description:
			"Actualización en protocolos de atención primaria y medicina familiar.",
		duration: "40 horas",
		level: "Básico - Intermedio",
		price: "$350",
		icon: FaUserMd,
	},
	{
		title: "Emergencias Médicas",
		description: "Manejo de emergencias y primeros auxilios avanzados.",
		duration: "32 horas",
		level: "Intermedio - Avanzado",
		price: "$420",
		icon: BiTime,
	},
	{
		title: "Administración Hospitalaria",
		description: "Gestión y administración de servicios de salud.",
		duration: "60 horas",
		level: "Intermedio",
		price: "$480",
		icon: BiGroup,
	},
	{
		title: "Farmacología Clínica",
		description: "Actualización en farmacología y manejo de medicamentos.",
		duration: "24 horas",
		level: "Avanzado",
		price: "$280",
		icon: BiBook,
	},
	{
		title: "Bioseguridad",
		description: "Protocolos de bioseguridad y prevención de infecciones.",
		duration: "16 horas",
		level: "Básico",
		price: "$180",
		icon: BiCertification,
	},
	{
		title: "Investigación Clínica",
		description: "Metodología de investigación en ciencias de la salud.",
		duration: "80 horas",
		level: "Avanzado",
		price: "$650",
		icon: FaChalkboardTeacher,
	},
];

const modalities = [
	{
		title: "Presencial",
		description:
			"Clases presenciales con prácticas en laboratorio y simuladores.",
		icon: FaChalkboardTeacher,
		features: [
			"Interacción directa con instructores",
			"Prácticas con equipos reales",
			"Networking con profesionales",
			"Certificación presencial",
		],
	},
	{
		title: "Virtual",
		description:
			"Capacitación online con plataforma interactiva y recursos digitales.",
		icon: MdOnlinePrediction,
		features: [
			"Horarios flexibles",
			"Acceso a grabaciones",
			"Evaluaciones en línea",
			"Certificación digital",
		],
	},
	{
		title: "Mixta",
		description:
			"Combinación de sesiones presenciales y virtuales para mayor flexibilidad.",
		icon: MdSchedule,
		features: [
			"Mejor equilibrio tiempo-aprendizaje",
			"Sesiones prácticas presenciales",
			"Teoría en modalidad virtual",
			"Certificación completa",
		],
	},
];

const benefits = [
	{
		title: "Certificación Oficial",
		description:
			"Certificados reconocidos por instituciones de salud y colegios profesionales.",
		icon: FaAward,
	},
	{
		title: "Instructores Expertos",
		description: "Profesionales con amplia experiencia clínica y docente.",
		icon: FaUserMd,
	},
	{
		title: "Actualización Continua",
		description:
			"Contenidos actualizados según las últimas evidencias científicas.",
		icon: BiBook,
	},
	{
		title: "Networking Profesional",
		description:
			"Oportunidad de conectar con otros profesionales del sector salud.",
		icon: BiGroup,
	},
];

const certificationProcess = [
	{
		title: "Inscripción",
		description: "Registro en el programa de capacitación elegido.",
	},
	{
		title: "Capacitación",
		description: "Participación activa en todas las sesiones del programa.",
	},
	{
		title: "Evaluación",
		description: "Evaluación teórica y práctica del conocimiento adquirido.",
	},
	{
		title: "Certificación",
		description:
			"Entrega de certificado oficial al completar exitosamente el programa.",
	},
];

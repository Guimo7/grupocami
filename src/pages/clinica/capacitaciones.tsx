import { Card, CardBody, CardHeader } from "@heroui/react";
import { BiBook, BiGroup, BiTime } from "react-icons/bi";
import {
	FaAward,
	FaChalkboardTeacher,
	FaGraduationCap,
	FaUserMd,
} from "react-icons/fa";
import { MdOnlinePrediction, MdSchedule } from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const trainingPrograms = [
	{
		title: "Emergencias Médicas",
		description: "Manejo de emergencias y primeros auxilios avanzados.",
		icon: BiTime,
	},
	{
		title: "Educación Sexual",
		description: "VIH, Sida y enfermedades de transmision sexual.",
		icon: BiTime,
	},
	{
		title: "Abuso de Alcohol y Drogas",
		description: "Problemas en salud y trabajo.",
		icon: BiTime,
	},
	{
		title: "Especifica",
		description: "Consulte por capacitación de un tema médico.",
		icon: BiTime,
	},
];

const modalities = [
	{
		title: "Instalaciones CAMI",
		icon: FaChalkboardTeacher,
		features: [
			"Interacción directa con instructores",
			"Prácticas con equipos reales",
			"Networking con profesionales",
			"Certificación presencial",
		],
	},
	{
		title: "Instalaciones Cliente",
		icon: MdOnlinePrediction,
		features: [
			"Interacción directa con instructores",
			"Prácticas con equipos reales",
			"Networking con profesionales",
			"Certificación presencial",
			"Cliente elige el lugar",
		],
	},
	{
		title: "Virtual",
		icon: MdSchedule,
		features: [
			"Horarios flexibles",
			"Acceso a grabaciones",
			"Evaluaciones en línea",
			"Certificación digital",
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
								<Card key={index} className="border-2 border-primary">
									<CardHeader className="pb-3 justify-center">
										<div className="flex flex-col items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
												<program.icon className="w-6 h-6 text-primary" />
											</div>
											<div>
												<h3 className="text-2xl font-bold text-primary">
													{program.title}
												</h3>
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-3 text-center">
											{program.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Modalities */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Modalidades
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{modalities.map((modality, index) => (
								<Card
									key={index}
									className="text-center border-2 border-primary transition-colors"
								>
									<CardBody className="p-8 items-center">
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<modality.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{modality.title}
										</h3>
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
												<h3 className="text-lg font-bold text-primary mb-2">
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
				</div>
			</div>
		</DefaultLayout>
	);
}

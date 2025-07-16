import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiCheck, BiShield, BiSupport, BiTime } from "react-icons/bi";
import {
	FaClipboardList,
	FaFlask,
	FaHeartbeat,
	FaUserMd,
} from "react-icons/fa";
import { GiMicroscope } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import {
	MdBloodtype,
	MdLocalHospital,
	MdSchedule,
	MdSecurity,
} from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ServiciosPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<ImLab className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>
								Servicios de Laboratorio
							</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Análisis clínicos precisos y confiables con tecnología de
							vanguardia. Nuestro laboratorio cuenta con equipos modernos y
							personal altamente calificado para brindarte resultados exactos y
							oportunos.
						</p>
					</section>

					{/* Laboratory Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{laboratoryServices.map((service, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
												<service.icon className="w-6 h-6 text-primary" />
											</div>
											<div>
												<h3 className="text-xl font-semibold">
													{service.title}
												</h3>
												<p className="text-sm text-foreground/60">
													{service.duration}
												</p>
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-3">
											{service.description}
										</p>
										<div className="text-right">
											<span className="text-lg font-bold text-primary">
												{service.price}
											</span>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Test Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías de Exámenes
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{testCategories.map((category, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<category.icon className="w-5 h-5 text-primary" />
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-semibold mb-2">
													{category.title}
												</h3>
												<p className="text-foreground/70 mb-3">
													{category.description}
												</p>
												<ul className="text-sm text-foreground/60 space-y-1">
													{category.tests.map((test, idx) => (
														<li key={idx} className="flex items-center">
															<BiCheck className="w-4 h-4 text-green-500 mr-2" />
															{test}
														</li>
													))}
												</ul>
											</div>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Process Steps */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Proceso de Análisis
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

					{/* Why Choose Us */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							¿Por qué elegirnos?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{whyChooseUs.map((reason, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<reason.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">
											{reason.title}
										</h3>
										<p className="text-foreground/70 text-sm">
											{reason.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Packages */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Paquetes Especiales
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{packages.map((pkg, index) => (
								<Card
									key={index}
									className={`text-center ${pkg.featured ? "border-2 border-primary" : ""}`}
								>
									<CardBody className="p-8">
										{pkg.featured && (
											<div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
												Más Solicitado
											</div>
										)}
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<pkg.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{pkg.title}
										</h3>
										<p className="text-foreground/70 mb-4">{pkg.description}</p>
										<div className="text-3xl font-bold text-primary mb-4">
											{pkg.price}
										</div>
										<ul className="text-sm text-foreground/60 mb-6 space-y-2">
											{pkg.includes.map((item, idx) => (
												<li
													key={idx}
													className="flex items-center justify-center"
												>
													<BiCheck className="w-4 h-4 text-green-500 mr-2" />
													{item}
												</li>
											))}
										</ul>
										<Button
											color="primary"
											variant={pkg.featured ? "solid" : "bordered"}
											fullWidth
											startContent={<MdSchedule className="w-4 h-4" />}
										>
											{pkg.featured ? "Agendar Ahora" : "Seleccionar Paquete"}
										</Button>
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
									¿Necesitas realizarte exámenes?
								</h2>
								<p className="text-foreground/70 mb-6">
									Agenda tu cita en nuestro laboratorio y recibe resultados
									confiables con la mejor atención profesional. Estamos aquí
									para cuidar de tu salud.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<MdSchedule className="w-5 h-5" />}
									>
										Agendar Cita
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<FaClipboardList className="w-5 h-5" />}
									>
										Ver Precios
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

const laboratoryServices = [
	{
		title: "Hematología Completa",
		description:
			"Análisis completo de sangre incluyendo hemograma, plaquetas y glóbulos blancos.",
		duration: "Resultados en 4-6 horas",
		price: "$25",
		icon: MdBloodtype,
	},
	{
		title: "Química Sanguínea",
		description:
			"Perfil bioquímico completo: glucosa, colesterol, triglicéridos, proteínas.",
		duration: "Resultados en 6-8 horas",
		price: "$35",
		icon: FaFlask,
	},
	{
		title: "Examen General de Orina",
		description:
			"Análisis físico, químico y microscópico de orina para detección de anomalías.",
		duration: "Resultados en 2-4 horas",
		price: "$15",
		icon: GiMicroscope,
	},
	{
		title: "Perfil Lipídico",
		description: "Evaluación de colesterol total, HDL, LDL y triglicéridos.",
		duration: "Resultados en 4-6 horas",
		price: "$20",
		icon: FaHeartbeat,
	},
	{
		title: "Función Hepática",
		description:
			"Evaluación del funcionamiento del hígado mediante enzimas específicas.",
		duration: "Resultados en 6-8 horas",
		price: "$30",
		icon: MdLocalHospital,
	},
	{
		title: "Función Renal",
		description:
			"Análisis de creatinina, urea y otros marcadores de función renal.",
		duration: "Resultados en 4-6 horas",
		price: "$25",
		icon: FaUserMd,
	},
];

const testCategories = [
	{
		title: "Análisis de Sangre",
		description:
			"Exámenes sanguíneos completos para evaluación de salud general.",
		icon: MdBloodtype,
		tests: [
			"Hemograma completo",
			"Química sanguínea básica",
			"Perfil lipídico",
			"Glucosa en ayunas",
			"Hemoglobina glicosilada",
		],
	},
	{
		title: "Análisis de Orina",
		description:
			"Estudios urinarios para detectar infecciones y problemas renales.",
		icon: GiMicroscope,
		tests: [
			"Examen general de orina",
			"Urocultivo",
			"Microalbuminuria",
			"Proteínas en orina 24h",
			"Citología urinaria",
		],
	},
	{
		title: "Hormonas",
		description:
			"Análisis hormonales para evaluación endocrina y reproductiva.",
		icon: FaFlask,
		tests: [
			"Perfil tiroideo (TSH, T3, T4)",
			"Hormonas sexuales",
			"Cortisol",
			"Insulina",
			"Hormona del crecimiento",
		],
	},
	{
		title: "Microbiología",
		description:
			"Cultivos y estudios microbiológicos para detección de infecciones.",
		icon: MdSecurity,
		tests: [
			"Cultivo de garganta",
			"Coprocultivo",
			"Cultivo de heridas",
			"Antibiograma",
			"Pruebas de sensibilidad",
		],
	},
];

const processSteps = [
	{
		title: "Registro",
		description: "Registro del paciente y verificación de datos personales.",
	},
	{
		title: "Toma de Muestra",
		description: "Extracción profesional de muestras por personal capacitado.",
	},
	{
		title: "Análisis",
		description: "Procesamiento de muestras con equipos de última generación.",
	},
	{
		title: "Resultados",
		description:
			"Entrega de resultados digitales y físicos con interpretación.",
	},
];

const whyChooseUs = [
	{
		title: "Precisión",
		description:
			"Resultados exactos con equipos calibrados y personal especializado.",
		icon: BiShield,
	},
	{
		title: "Rapidez",
		description: "Tiempos de entrega optimizados sin comprometer la calidad.",
		icon: BiTime,
	},
	{
		title: "Tecnología",
		description:
			"Equipos modernos y sistemas automatizados de última generación.",
		icon: ImLab,
	},
	{
		title: "Soporte",
		description: "Atención personalizada y seguimiento post-examen.",
		icon: BiSupport,
	},
];

const packages = [
	{
		title: "Básico",
		description: "Exámenes esenciales para chequeo general de salud.",
		price: "$85",
		icon: FaUserMd,
		featured: false,
		includes: [
			"Hemograma completo",
			"Química sanguínea básica",
			"Examen general de orina",
			"Consulta con resultados",
			"Informe médico",
		],
	},
	{
		title: "Completo",
		description: "Evaluación integral de salud con análisis especializados.",
		price: "$150",
		icon: FaHeartbeat,
		featured: true,
		includes: [
			"Hemograma completo",
			"Química sanguínea extendida",
			"Perfil lipídico",
			"Función hepática y renal",
			"Examen general de orina",
			"Perfil tiroideo básico",
			"Consulta médica incluida",
		],
	},
	{
		title: "Ejecutivo",
		description: "Chequeo completo para profesionales y empresarios.",
		price: "$250",
		icon: ImLab,
		featured: false,
		includes: [
			"Todos los exámenes del paquete completo",
			"Marcadores tumorales",
			"Electrocardiograma",
			"Radiografía de tórax",
			"Consulta con especialista",
			"Informe ejecutivo detallado",
			"Seguimiento personalizado",
		],
	},
];

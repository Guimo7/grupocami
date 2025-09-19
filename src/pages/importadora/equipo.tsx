import { Button, Card, CardBody } from "@heroui/react";
import { BiCheck, BiSupport } from "react-icons/bi";
import { FaXRay } from "react-icons/fa";
import { MdLocalHospital, MdMonitor } from "react-icons/md";
import { PiTruckTrailer } from "react-icons/pi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const categories = [
	{
		title: "Cardiología",
		items: [
			"Mapa",
			"Holter",
			"Ecocardiograma",
			"Equipo Bioimpedancia",
			"Pruebas de Esfuerzo",
			"Mapas de Corta Duracion",
			"Electrocardiograma",
			"Tensiometros de Alta Calidad",
		],
		icon: FaXRay,
	},
	{
		title: "Gastroenterología",
		items: [
			"Ultrasonografos",
			"Endoscopios",
			"Colonoscopios",
			"Endoscopios de Ultrasonido",
		],
		icon: MdMonitor,
	},
	{
		title: "Nefrología",
		items: [
			"Maquinas de Diálisis-Hemodiálisis",
			"Analizador de Electrolitos",
			"Equipo de Hemodialisis Domiciliar",
			"Ultrasonografos",
		],
		icon: MdMonitor,
	},
	{
		title: "Laboratorio Clínico",
		items: [
			"Microscopios",
			"Macrocentrifuga",
			"Microcentrifuga",
			"Baño Maria",
			"Equipo de Química",
			"Equipo de Hematología",
			"Equipo de Electrolitos",
		],
		icon: MdMonitor,
	},
	{
		title: "Neumología",
		items: [
			"Broncoscopios",
			"Ultrasonografos",
			"Ultrasonido Endobraquial",
			"Espirometros",
			"Pleuroscopia",
			"Kits de Biopsia Pleural",
			"Concentradores de Oxígeno",
		],
		icon: MdMonitor,
	},
	{
		title: "Otros",
		items: ["Equipos Medicos Varios"],
		icon: MdMonitor,
	},
];

const ourServices = [
	{
		title: "Importación Directa",
		description:
			"Importamos equipos directamente de fabricantes reconocidos mundialmente.",
		icon: PiTruckTrailer,
	},
	{
		title: "Capacitación",
		description: "Entrenamiento completo para el personal médico y técnico.",
		icon: MdLocalHospital,
	},
];

const whyChooseUs = [
	{
		title: "Calidad Garantizada",
		description:
			"Todos nuestros equipos cuentan con certificaciones internacionales FDA y CE.",
	},
	{
		title: "Soporte Técnico",
		description:
			"Equipo de ingenieros biomédicos disponible 24/7 para soporte técnico.",
	},
	{
		title: "Financiamiento Flexible",
		description:
			"Planes de financiamiento adaptados a las necesidades de cada cliente.",
	},
];

export default function EquipoPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<PiTruckTrailer className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Equipo Médico</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Importamos y distribuimos equipos médicos de la más alta calidad
							para hospitales, clínicas y consultorios. Tecnología médica
							avanzada con garantía internacional y soporte técnico
							especializado.
						</p>
					</section>

					{/* Equipment Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{categories.map((category, index) => (
								<Card
									key={index}
									className="text-center border-2 border-primary"
								>
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<category.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary text-center mb-2">
											{category.title}
										</h3>
										<ul className="text-sm text-foreground/60 space-y-1">
											{category.items.map((item, idx) => (
												<li
													key={idx}
													className="flex justify-center items-center"
												>
													<BiCheck className="w-4 h-4 text-green-500 mr-2" />
													{item}
												</li>
											))}
										</ul>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Our Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
							{ourServices.map((service, index) => (
								<Card key={index}>
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<service.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2 text-center">
											{service.title}
										</h3>
										<p className="text-foreground/70 text-sm text-center">
											{service.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Why Choose Our Equipment */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							¿Por qué elegirnos?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{whyChooseUs.map((reason, index) => (
								<Card key={index}>
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">
												{index + 1}
											</span>
										</div>
										<h3 className="text-2xl font-bold text-primary text-center mb-2">
											{reason.title}
										</h3>
										<p className="text-foreground/70 text-sm text-center">
											{reason.description}
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
									¿Necesitas equipo médico?
								</h2>
								<p className="text-foreground/70 mb-6">
									Contáctanos para una cotización personalizada y descubre
									nuestros planes de financiamiento flexibles. Ofrecemos la
									mejor tecnología médica con garantía internacional y soporte
									técnico especializado.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<RiShoppingCart2Line className="w-5 h-5" />}
									>
										Solicitar Cotización
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiSupport className="w-5 h-5" />}
									>
										Ver Financiamiento
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

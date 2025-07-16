import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiBuilding, BiMoney, BiTime, BiWifi } from "react-icons/bi";
import { FaCalendarAlt, FaKey, FaStethoscope, FaTools } from "react-icons/fa";
import { MdMedicalServices, MdSecurity } from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AlquilerPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<BiBuilding className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Alquiler de Espacios</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Espacios médicos completamente equipados y listos para usar.
							Consultorios, salas de procedimientos y áreas administrativas con
							la más alta calidad y funcionalidad.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Espacios Disponibles
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{alquilerSpaces.map((space, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
												<space.icon className="w-6 h-6 text-primary" />
											</div>
											<h3 className="text-xl font-semibold">{space.title}</h3>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-3">
											{space.description}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-sm text-foreground/60">
												{space.size}
											</span>
											<span className="text-lg font-bold text-primary">
												{space.price}
											</span>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Features Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Características Incluidas
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{features.map((feature, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<feature.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">
											{feature.title}
										</h3>
										<p className="text-foreground/70 text-sm">
											{feature.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Rental Options */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Opciones de Alquiler
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{rentalOptions.map((option, index) => (
								<Card
									key={index}
									className="text-center border-2 border-transparent hover:border-primary transition-colors"
								>
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<option.icon className="w-10 h-10 text-white" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{option.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{option.description}
										</p>
										<div className="text-3xl font-bold text-primary mb-4">
											{option.price}
										</div>
										<ul className="text-sm text-foreground/60 mb-6">
											{option.features.map((feature, idx) => (
												<li key={idx} className="mb-1">
													• {feature}
												</li>
											))}
										</ul>
										<Button color="primary" variant="bordered" fullWidth>
											Consultar Disponibilidad
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
									¿Necesitas un espacio médico?
								</h2>
								<p className="text-foreground/70 mb-6">
									Contacta con nosotros para conocer la disponibilidad y
									programar una visita a nuestras instalaciones. Ofrecemos
									flexibilidad y condiciones competitivas.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<FaCalendarAlt className="w-5 h-5" />}
									>
										Agendar Visita
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiMoney className="w-5 h-5" />}
									>
										Solicitar Cotización
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

const alquilerSpaces = [
	{
		title: "Consultorio Médico",
		description:
			"Espacio completamente equipado para consultas médicas generales y especializadas.",
		size: "20 m²",
		price: "$800/mes",
		icon: FaStethoscope,
	},
	{
		title: "Sala de Procedimientos",
		description:
			"Área especializada para procedimientos menores y tratamientos ambulatorios.",
		size: "25 m²",
		price: "$1,200/mes",
		icon: MdMedicalServices,
	},
	{
		title: "Oficina Administrativa",
		description:
			"Espacio para actividades administrativas y de gestión médica.",
		size: "15 m²",
		price: "$600/mes",
		icon: BiBuilding,
	},
	{
		title: "Sala de Espera",
		description:
			"Área cómoda y acogedora para pacientes con capacidad para 12 personas.",
		size: "30 m²",
		price: "$400/mes",
		icon: BiTime,
	},
	{
		title: "Consultorio Especializado",
		description:
			"Espacio diseñado para especialidades médicas con equipamiento específico.",
		size: "22 m²",
		price: "$1,000/mes",
		icon: FaStethoscope,
	},
	{
		title: "Área de Trabajo",
		description:
			"Espacio flexible para diferentes actividades médicas y administrativas.",
		size: "18 m²",
		price: "$700/mes",
		icon: FaTools,
	},
];

const features = [
	{
		title: "Mobiliario Médico",
		description:
			"Camillas, escritorios, sillas y mobiliario especializado incluido.",
		icon: FaStethoscope,
	},
	{
		title: "Conectividad",
		description: "Internet de alta velocidad, WiFi y conexiones telefónicas.",
		icon: BiWifi,
	},
	{
		title: "Seguridad",
		description: "Sistema de seguridad 24/7 con cámaras y control de acceso.",
		icon: MdSecurity,
	},
	{
		title: "Mantenimiento",
		description:
			"Servicio de limpieza y mantenimiento incluido en el alquiler.",
		icon: FaTools,
	},
	{
		title: "Flexibilidad",
		description:
			"Horarios flexibles y posibilidad de personalización del espacio.",
		icon: FaKey,
	},
	{
		title: "Ubicación",
		description:
			"Ubicación estratégica con fácil acceso y estacionamiento disponible.",
		icon: BiBuilding,
	},
];

const rentalOptions = [
	{
		title: "Por Horas",
		description: "Ideal para consultas esporádicas o servicios específicos.",
		price: "$15/hora",
		icon: BiTime,
		features: [
			"Mínimo 2 horas",
			"Equipamiento básico",
			"Acceso a servicios comunes",
			"Flexible y económico",
		],
	},
	{
		title: "Medio Tiempo",
		description:
			"Para profesionales que requieren uso regular pero no tiempo completo.",
		price: "$500/mes",
		icon: FaCalendarAlt,
		features: [
			"4 horas diarias",
			"Mobiliario incluido",
			"Servicios básicos",
			"Ideal para especialistas",
		],
	},
	{
		title: "Tiempo Completo",
		description: "Para profesionales que requieren uso exclusivo del espacio.",
		price: "$800/mes",
		icon: FaKey,
		features: [
			"Uso exclusivo 24/7",
			"Equipamiento completo",
			"Servicios premium",
			"Personalización incluida",
		],
	},
];

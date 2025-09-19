import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import {
	BiArchive,
	BiBuilding,
	BiCloudLightning,
	BiMoney,
	BiNetworkChart,
	BiPaperclip,
	BiTime,
	BiWater,
	BiWifi,
} from "react-icons/bi";
import {
	FaCalendarAlt,
	FaKey,
	FaMoon,
	FaStethoscope,
	FaSun,
	FaTools,
	FaWhatsapp,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { handleWhatsAppClick } from "@/helpers";

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
								<Card key={index} className="border-2 border-primary">
									<CardHeader className="pb-3 justify-center">
										<div className="flex flex-col items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
												<space.icon className="w-6 h-6 text-primary" />
											</div>
											<h3 className="text-2xl font-bold text-primary">
												{space.title}
											</h3>
										</div>
									</CardHeader>
									<CardBody className="">
										{space.description.map((description, index) => (
											<p
												key={index}
												className="text-foreground/70 mb-3 text-center"
											>
												{description}
											</p>
										))}
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
								<Card
									key={index}
									className="text-center border-2 border-primary"
								>
									<CardBody className="p-8">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<feature.icon className="w-8 h-8 text-primary" />
										</div>
										<div className="flex flex-col items-center">
											<h3 className="text-2xl font-bold text-primary mb-4">
												{feature.title}
											</h3>
											<p className="text-foreground/70 text-sm text-center">
												{feature.description}
											</p>
										</div>
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
									className="text-center border-2 border-primary transition-colors"
								>
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<option.icon className="w-10 h-10 text-white" />
										</div>
										<div className="flex flex-col items-center">
											<h3 className="text-2xl font-bold text-primary mb-2">
												{option.title}
											</h3>
											<p className="text-foreground/70 mb-4 text-center">
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
										</div>
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
										color="success"
										variant="solid"
										startContent={<FaWhatsapp className="w-5 h-5" />}
										onPress={handleWhatsAppClick}
										className="w-full"
									>
										Abrir WhatsApp
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
		title: "Tiempo Completo",
		description: [
			"Lunes a Viernes desde 8:00 AM a 6:00 PM bajo agendamiento previo.",
			"Sabado desde 7:00 AM a 1:00 PM",
		],
		icon: BiTime,
	},
	{
		title: "Horario Matutino",
		description: [
			"Lunes a Viernes desde 8:00 AM a 12:00 PM.",
			"Sabado desde 7:00 AM a 1:00 PM.",
		],
		icon: BiTime,
	},
	{
		title: "Horario Vespertino",
		description: [
			"Lunes a Viernes desde 1:00 PM a 6:00 PM.",
			"Sabado desde 7:00 AM a 1:00 PM.",
		],
		icon: BiTime,
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
	{
		title: "Sala de Espera",
		description:
			"Área cómoda y acogedora para pacientes con capacidad para 12 personas.",
		icon: BiTime,
	},
	{
		title: "Marketing en Redes",
		description: "Promoción de sus servicios en redes sociales incluida.",
		icon: BiNetworkChart,
	},
	{
		title: "Papelería",
		description: "Suministros básicos de oficina y papelería médica.",
		icon: BiPaperclip,
	},
	{
		title: "Recepcionista",
		description: "Servicio de recepción y atención al cliente incluido.",
		icon: BiArchive,
	},
	{
		title: "Luz",
		description: "Servicio de energía eléctrica incluido en el alquiler.",
		icon: BiCloudLightning,
	},
	{
		title: "Agua",
		description: "Servicio de agua potable incluido en el alquiler.",
		icon: BiWater,
	},
];

const rentalOptions = [
	{
		title: "Tiempo Completo",
		description: "Para profesionales que requieren uso exclusivo del espacio.",
		price: "$125/mes + IVA",
		icon: FaKey,
		features: [
			"Consultas en horario de 8:00 AM a 6:00 PM bajo cita previa",
			"Agendamiento con recepcionista",
			"Incluye contrato",
		],
	},
	{
		title: "Horario Matutino",
		description: "Ideal para consultas esporádicas o servicios específicos.",
		price: "$100/mes + IVA",
		icon: FaSun,
		features: [
			"Consultas a partir de 8:00 AM a 12:00 PM",
			"Agendamiento con recepcionista",
			"Incluye contrato",
		],
	},
	{
		title: "Horario Vespertino",
		description:
			"Para profesionales que requieren uso regular pero no tiempo completo.",
		price: "$115/mes + IVA",
		icon: FaMoon,
		features: [
			"Consultas a partir de 12:00 PM a 6:00 PM",
			"Agendamiento con recepcionista",
			"Incluye contrato",
		],
	},
];

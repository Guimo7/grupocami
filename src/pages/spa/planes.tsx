import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiCalendar, BiCheck, BiGift, BiStar } from "react-icons/bi";
import { FaCrown, FaHandsHelping, FaHeart, FaLeaf } from "react-icons/fa";
import {
	MdCardMembership,
	MdDiamond,
	MdSpa,
	MdWorkspacePremium,
} from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function PlanesPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<MdCardMembership className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Planes de Spa</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Descubre nuestros planes de membresía diseñados para brindarte
							bienestar continuo a precios preferenciales. Elige el plan que
							mejor se adapte a tu estilo de vida y disfruta de beneficios
							exclusivos.
						</p>
					</section>

					{/* Membership Plans */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Planes de Membresía
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{membershipPlans.map((plan, index) => (
								<Card
									key={index}
									className={`text-center ${plan.featured ? "border-2 border-primary" : ""}`}
								>
									<CardBody className="p-8">
										{plan.featured && (
											<div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
												Más Popular
											</div>
										)}
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<plan.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{plan.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{plan.description}
										</p>
										<div className="text-3xl font-bold text-primary mb-1">
											{plan.price}
										</div>
										<p className="text-sm text-foreground/60 mb-6">
											{plan.billing}
										</p>
										<ul className="text-sm text-foreground/60 mb-6 space-y-2">
											{plan.features.map((feature, idx) => (
												<li
													key={idx}
													className="flex items-center justify-center"
												>
													<BiCheck className="w-4 h-4 text-green-500 mr-2" />
													{feature}
												</li>
											))}
										</ul>
										<Button
											color="primary"
											variant={plan.featured ? "solid" : "bordered"}
											fullWidth
											startContent={<MdSpa className="w-4 h-4" />}
										>
											{plan.featured ? "Elegir Plan" : "Seleccionar"}
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Service Packages */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Paquetes de Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{servicePackages.map((package_, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<package_.icon className="w-5 h-5 text-primary" />
											</div>
											<div className="flex-1">
												<div className="flex justify-between items-start mb-2">
													<h3 className="text-lg font-semibold">
														{package_.title}
													</h3>
													<div className="text-right">
														<div className="text-2xl font-bold text-primary">
															{package_.price}
														</div>
														<div className="text-sm text-foreground/60 line-through">
															{package_.originalPrice}
														</div>
													</div>
												</div>
												<p className="text-foreground/70 mb-3">
													{package_.description}
												</p>
												<div className="flex items-center mb-3">
													<BiCalendar className="w-4 h-4 text-primary mr-2" />
													<span className="text-sm text-foreground/60">
														{package_.validity}
													</span>
												</div>
												<ul className="text-sm text-foreground/60 space-y-1">
													{package_.includes.map((item, idx) => (
														<li key={idx} className="flex items-center">
															<BiCheck className="w-4 h-4 text-green-500 mr-2" />
															{item}
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

					{/* Seasonal Packages */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Paquetes Estacionales
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{seasonalPackages.map((seasonal, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center">
												<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
													<seasonal.icon className="w-6 h-6 text-primary" />
												</div>
												<div>
													<h3 className="text-xl font-semibold">
														{seasonal.title}
													</h3>
													<p className="text-sm text-foreground/60">
														{seasonal.season}
													</p>
												</div>
											</div>
											{seasonal.limited && (
												<div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
													Limitado
												</div>
											)}
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-4">
											{seasonal.description}
										</p>
										<div className="flex justify-between items-center mb-4">
											<span className="text-2xl font-bold text-primary">
												{seasonal.price}
											</span>
											<span className="text-sm text-foreground/60">
												{seasonal.duration}
											</span>
										</div>
										<Button
											color="primary"
											variant="flat"
											fullWidth
											startContent={<BiGift className="w-4 h-4" />}
										>
											Reservar Ahora
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Membership Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Beneficios de Membresía
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{membershipBenefits.map((benefit, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<benefit.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">
											{benefit.title}
										</h3>
										<p className="text-foreground/70 text-sm">
											{benefit.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Corporate Plans */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Planes Corporativos
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{corporatePlans.map((plan, index) => (
								<Card
									key={index}
									className={`text-center ${plan.featured ? "border-2 border-primary" : ""}`}
								>
									<CardBody className="p-8">
										{plan.featured && (
											<div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
												Recomendado
											</div>
										)}
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<plan.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{plan.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{plan.description}
										</p>
										<div className="text-3xl font-bold text-primary mb-4">
											{plan.price}
										</div>
										<ul className="text-sm text-foreground/60 mb-6 space-y-2">
											{plan.features.map((feature, idx) => (
												<li
													key={idx}
													className="flex items-center justify-center"
												>
													<BiCheck className="w-4 h-4 text-green-500 mr-2" />
													{feature}
												</li>
											))}
										</ul>
										<Button
											color="primary"
											variant={plan.featured ? "solid" : "bordered"}
											fullWidth
											startContent={<MdWorkspacePremium className="w-4 h-4" />}
										>
											Solicitar Cotización
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
									¿Listo para comenzar tu bienestar?
								</h2>
								<p className="text-foreground/70 mb-6">
									Elige el plan que mejor se adapte a tu estilo de vida y
									comienza a disfrutar de todos los beneficios de nuestro spa
									con precios preferenciales.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<MdCardMembership className="w-5 h-5" />}
									>
										Elegir Plan
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<BiStar className="w-5 h-5" />}
									>
										Consultar Asesor
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

const membershipPlans = [
	{
		title: "Básico",
		description: "Perfecto para quienes buscan relajación ocasional.",
		price: "$99",
		billing: "por mes",
		icon: FaLeaf,
		featured: false,
		features: [
			"2 masajes al mes",
			"1 facial básico",
			"Acceso a sauna",
			"10% descuento en servicios adicionales",
			"Horario flexible",
		],
	},
	{
		title: "Premium",
		description: "Ideal para bienestar regular y cuidado integral.",
		price: "$199",
		billing: "por mes",
		icon: FaHeart,
		featured: true,
		features: [
			"4 masajes al mes",
			"2 faciales especializados",
			"Acceso completo a instalaciones",
			"15% descuento en servicios adicionales",
			"Prioridad en reservas",
			"Consulta con especialista",
			"Productos de cortesía",
		],
	},
	{
		title: "VIP",
		description: "Experiencia de lujo con servicios exclusivos.",
		price: "$349",
		billing: "por mes",
		icon: FaCrown,
		featured: false,
		features: [
			"Servicios ilimitados",
			"Tratamientos especializados",
			"Spa privado disponible",
			"20% descuento en servicios adicionales",
			"Servicio personalizado",
			"Productos premium incluidos",
			"Invitado mensual gratis",
		],
	},
];

const servicePackages = [
	{
		title: "Paquete Relajación Total",
		description:
			"Combinación perfecta de masajes y tratamientos faciales para relajación completa.",
		price: "$180",
		originalPrice: "$220",
		validity: "Válido por 3 meses",
		icon: FaHandsHelping,
		includes: [
			"2 masajes relajantes (60 min c/u)",
			"1 facial rejuvenecedor",
			"1 sesión de aromaterapia",
			"Acceso a sauna por 3 meses",
		],
	},
	{
		title: "Paquete Belleza Integral",
		description:
			"Tratamientos especializados para el cuidado completo de tu belleza natural.",
		price: "$250",
		originalPrice: "$300",
		validity: "Válido por 4 meses",
		icon: MdDiamond,
		includes: [
			"3 faciales especializados",
			"2 exfoliaciones corporales",
			"1 masaje de piedras calientes",
			"Productos de cuidado personal incluidos",
		],
	},
	{
		title: "Paquete Desintoxicación",
		description:
			"Programa completo para eliminar toxinas y revitalizar tu organismo.",
		price: "$320",
		originalPrice: "$400",
		validity: "Válido por 2 meses",
		icon: FaLeaf,
		includes: [
			"4 sesiones de hidroterapia",
			"2 masajes drenantes",
			"2 envolturas desintoxicantes",
			"Plan nutricional personalizado",
		],
	},
	{
		title: "Paquete Parejas",
		description:
			"Experiencia romántica diseñada para compartir momentos especiales.",
		price: "$300",
		originalPrice: "$380",
		validity: "Válido por 6 meses",
		icon: FaHeart,
		includes: [
			"2 masajes relajantes para parejas",
			"1 facial conjunto",
			"Champagne y chocolates",
			"Ambiente romántico personalizado",
		],
	},
];

const seasonalPackages = [
	{
		title: "Paquete Primavera",
		description: "Renovación y frescura para recibir la nueva estación.",
		price: "$150",
		duration: "2 sesiones",
		season: "Marzo - Mayo",
		limited: true,
		icon: MdSpa,
	},
	{
		title: "Paquete Verano",
		description: "Tratamientos refrescantes para cuidar tu piel en verano.",
		price: "$120",
		duration: "3 sesiones",
		season: "Junio - Agosto",
		limited: false,
		icon: FaLeaf,
	},
	{
		title: "Paquete Otoño",
		description: "Preparación y cuidado intensivo para el cambio de estación.",
		price: "$180",
		duration: "4 sesiones",
		season: "Septiembre - Noviembre",
		limited: true,
		icon: FaHeart,
	},
	{
		title: "Paquete Invierno",
		description: "Calidez y nutrición profunda para los meses fríos.",
		price: "$200",
		duration: "3 sesiones",
		season: "Diciembre - Febrero",
		limited: false,
		icon: FaCrown,
	},
	{
		title: "Paquete Navideño",
		description: "Regalo perfecto para las fiestas navideñas y año nuevo.",
		price: "$250",
		duration: "Experiencia completa",
		season: "Diciembre",
		limited: true,
		icon: BiGift,
	},
	{
		title: "Paquete San Valentín",
		description: "Celebra el amor con tratamientos especiales para parejas.",
		price: "$280",
		duration: "4 horas",
		season: "Febrero",
		limited: true,
		icon: FaHeart,
	},
];

const membershipBenefits = [
	{
		title: "Descuentos Exclusivos",
		description:
			"Precios preferenciales en todos nuestros servicios y productos.",
		icon: BiStar,
	},
	{
		title: "Reservas Prioritarias",
		description: "Acceso prioritario a horarios y disponibilidad de servicios.",
		icon: BiCalendar,
	},
	{
		title: "Eventos Especiales",
		description: "Invitaciones a eventos exclusivos y talleres de bienestar.",
		icon: BiGift,
	},
	{
		title: "Asesoría Personalizada",
		description:
			"Consulta con especialistas para diseñar tu rutina de bienestar.",
		icon: MdSpa,
	},
];

const corporatePlans = [
	{
		title: "Plan Empresarial",
		description: "Bienestar para equipos de trabajo pequeños y medianos.",
		price: "Desde $1,500",
		icon: MdWorkspacePremium,
		featured: false,
		features: [
			"Hasta 20 empleados",
			"Servicios en horario laboral",
			"Paquetes personalizados",
			"Descuentos por volumen",
			"Reportes de bienestar",
		],
	},
	{
		title: "Plan Corporativo",
		description:
			"Solución integral para grandes corporaciones y beneficios empleados.",
		price: "Desde $3,000",
		icon: MdDiamond,
		featured: true,
		features: [
			"Empleados ilimitados",
			"Servicios on-site disponibles",
			"Programas de bienestar",
			"Descuentos corporativos",
			"Gestor de cuenta dedicado",
			"Eventos corporativos",
			"Métricas de satisfacción",
		],
	},
];

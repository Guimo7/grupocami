import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { PiTruckTrailer } from "react-icons/pi";
import { BiShield, BiSupport, BiTime, BiCheck } from "react-icons/bi";
import { FaStethoscope, FaHeartbeat, FaXRay, FaMicroscope } from "react-icons/fa";
import { MdLocalHospital, MdMedicalServices, MdMonitor, MdPrecisionManufacturing } from "react-icons/md";
import { GiMicroscope } from "react-icons/gi";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function EquipoPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<PiTruckTrailer className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>
								Equipo Médico
							</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Importamos y distribuimos equipos médicos de la más alta calidad para hospitales, 
							clínicas y consultorios. Tecnología médica avanzada con garantía internacional y 
							soporte técnico especializado.
						</p>
					</section>

					{/* Featured Equipment */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestro Equipo Médico
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{medicalEquipment.map((equipment, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center">
												<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
													<equipment.icon className="w-6 h-6 text-primary" />
												</div>
												<div>
													<h3 className="text-xl font-semibold">{equipment.title}</h3>
													<p className="text-sm text-foreground/60">{equipment.brand}</p>
												</div>
											</div>
											{equipment.featured && (
												<div className="bg-primary text-white text-xs px-2 py-1 rounded-full">
													Destacado
												</div>
											)}
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-4">
											{equipment.description}
										</p>
										<div className="space-y-2 mb-4">
											<h4 className="font-semibold text-sm text-foreground/80">Características:</h4>
											<ul className="text-sm text-foreground/60 space-y-1">
												{equipment.features.slice(0, 3).map((feature, idx) => (
													<li key={idx} className="flex items-center">
														<BiCheck className="w-4 h-4 text-green-500 mr-2" />
														{feature}
													</li>
												))}
											</ul>
										</div>
										<div className="flex justify-between items-center mb-4">
											<span className="text-2xl font-bold text-primary">{equipment.price}</span>
											<span className="text-sm text-foreground/60">{equipment.warranty}</span>
										</div>
										<Button 
											color="primary" 
											variant="flat" 
											fullWidth
											startContent={<RiShoppingCart2Line className="w-4 h-4" />}
										>
											Solicitar Cotización
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Equipment Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías de Equipo
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{equipmentCategories.map((category, index) => (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<category.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">{category.title}</h3>
										<p className="text-foreground/70 text-sm mb-4">{category.description}</p>
										<p className="text-primary font-semibold text-sm mb-4">{category.count} productos</p>
										<Button 
											color="primary" 
											variant="bordered" 
											size="sm"
											fullWidth
										>
											Ver Catálogo
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Premium Equipment */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Equipo Premium
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{premiumEquipment.map((equipment, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<equipment.icon className="w-5 h-5 text-primary" />
											</div>
											<div className="flex-1">
												<div className="flex justify-between items-start mb-2">
													<h3 className="text-lg font-semibold">{equipment.title}</h3>
													<div className="text-right">
														<div className="text-2xl font-bold text-primary">{equipment.price}</div>
														<div className="text-sm text-foreground/60">{equipment.financing}</div>
													</div>
												</div>
												<p className="text-foreground/70 mb-3">{equipment.description}</p>
												<div className="flex items-center mb-3">
													<BiShield className="w-4 h-4 text-primary mr-2" />
													<span className="text-sm text-foreground/60">{equipment.warranty}</span>
												</div>
												<ul className="text-sm text-foreground/60 space-y-1">
													{equipment.specifications.map((spec, idx) => (
														<li key={idx} className="flex items-center">
															<span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
															{spec}
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

					{/* Our Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{ourServices.map((service, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<service.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">{service.title}</h3>
										<p className="text-foreground/70 text-sm">{service.description}</p>
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
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{whyChooseUs.map((reason, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">{index + 1}</span>
										</div>
										<h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
										<p className="text-foreground/70 text-sm">{reason.description}</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Brands We Represent */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Marcas que Representamos
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{brands.map((brand, index) => (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow">
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<brand.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-xl font-bold text-primary mb-2">{brand.name}</h3>
										<p className="text-foreground/70 mb-4">{brand.description}</p>
										<div className="text-sm text-foreground/60 mb-4">
											Especialidad: {brand.specialty}
										</div>
										<Button 
											color="primary" 
											variant="bordered"
											fullWidth
											startContent={<MdLocalHospital className="w-4 h-4" />}
										>
											Ver Productos
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
									¿Necesitas equipo médico?
								</h2>
								<p className="text-foreground/70 mb-6">
									Contáctanos para una cotización personalizada y descubre nuestros planes de 
									financiamiento flexibles. Ofrecemos la mejor tecnología médica con garantía 
									internacional y soporte técnico especializado.
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

const medicalEquipment = [
	{
		title: "Monitor de Signos Vitales",
		description: "Monitor multiparamétrico para seguimiento continuo de pacientes en UCI y hospitalización.",
		brand: "Mindray",
		price: "$8,500",
		warranty: "2 años",
		featured: true,
		icon: MdMonitor,
		features: [
			"Monitoreo ECG, SpO2, NIBP, Temp",
			"Pantalla táctil 15 pulgadas",
			"Conectividad inalámbrica",
			"Batería de respaldo 4 horas"
		],
	},
	{
		title: "Ultrasonido Doppler",
		description: "Equipo de ultrasonido portátil con tecnología Doppler para diagnóstico cardiovascular.",
		brand: "GE Healthcare",
		price: "$25,000",
		warranty: "3 años",
		featured: false,
		icon: FaHeartbeat,
		features: [
			"Sonda multifrecuencia",
			"Imagen en tiempo real",
			"Análisis espectral avanzado",
			"Almacenamiento digital"
		],
	},
	{
		title: "Respirador Artificial",
		description: "Ventilador mecánico de alta precisión para cuidados intensivos y emergencias.",
		brand: "Dräger",
		price: "$35,000",
		warranty: "5 años",
		featured: true,
		icon: MdMedicalServices,
		features: [
			"Modos de ventilación avanzados",
			"Pantalla táctil intuitiva",
			"Monitoreo continuo",
			"Alarmas configurables"
		],
	},
	{
		title: "Equipo de Rayos X",
		description: "Sistema de radiografía digital con procesamiento de imagen avanzado.",
		brand: "Philips",
		price: "$45,000",
		warranty: "3 años",
		featured: false,
		icon: FaXRay,
		features: [
			"Detector digital directo",
			"Baja dosis de radiación",
			"Procesamiento automático",
			"Conectividad DICOM"
		],
	},
	{
		title: "Microscopio Quirúrgico",
		description: "Microscopio de alta precisión para cirugías oftalmológicas y neurocirugía.",
		brand: "Zeiss",
		price: "$85,000",
		warranty: "5 años",
		featured: true,
		icon: FaMicroscope,
		features: [
			"Magnificación 4x-25x",
			"Iluminación LED",
			"Sistema de grabación",
			"Controles ergonómicos"
		],
	},
	{
		title: "Desfibrilador Automático",
		description: "DEA portátil para emergencias cardíacas con instrucciones de voz.",
		brand: "Zoll",
		price: "$3,500",
		warranty: "8 años",
		featured: false,
		icon: FaHeartbeat,
		features: [
			"Análisis automático del ritmo",
			"Instrucciones de voz claras",
			"Electrodos de larga duración",
			"Resistente al agua IP55"
		],
	},
];

const equipmentCategories = [
	{
		title: "Diagnóstico por Imagen",
		description: "Equipos de radiología, ultrasonido y resonancia magnética.",
		count: "25+",
		icon: FaXRay,
	},
	{
		title: "Monitoreo Clínico",
		description: "Monitores de signos vitales y equipos de telemetría.",
		count: "18+",
		icon: MdMonitor,
	},
	{
		title: "Quirúrgico",
		description: "Equipos para salas de operaciones y cirugía especializada.",
		count: "30+",
		icon: MdMedicalServices,
	},
	{
		title: "Laboratorio",
		description: "Analizadores clínicos y equipos de diagnóstico in vitro.",
		count: "15+",
		icon: GiMicroscope,
	},
];

const premiumEquipment = [
	{
		title: "Resonancia Magnética 1.5T",
		description: "Sistema de RM de campo cerrado con tecnología avanzada para diagnóstico preciso.",
		price: "$850,000",
		financing: "Desde $8,500/mes",
		warranty: "5 años + extensión",
		icon: MdPrecisionManufacturing,
		specifications: [
			"Campo magnético 1.5 Tesla",
			"Secuencias de imagen avanzadas",
			"Software de post-procesamiento",
			"Instalación y capacitación incluida"
		],
	},
	{
		title: "Tomógrafo Computarizado",
		description: "Scanner CT multicorte de última generación con reducción de dosis.",
		price: "$650,000",
		financing: "Desde $6,500/mes",
		warranty: "3 años + mantenimiento",
		icon: FaXRay,
		specifications: [
			"64 cortes por rotación",
			"Reconstrucción 3D avanzada",
			"Protocolos pediátricos",
			"Sistema de inyección automática"
		],
	},
	{
		title: "Angiografía Digital",
		description: "Sistema de angiografía con substracción digital para procedimientos vasculares.",
		price: "$450,000",
		financing: "Desde $4,500/mes",
		warranty: "3 años completos",
		icon: FaHeartbeat,
		specifications: [
			"Brazo C motorizado",
			"Sustracción digital en tiempo real",
			"Mesa de paciente flotante",
			"Protección radiológica integrada"
		],
	},
	{
		title: "Robot Quirúrgico",
		description: "Sistema robótico para cirugía mínimamente invasiva de alta precisión.",
		price: "$1,200,000",
		financing: "Desde $12,000/mes",
		warranty: "5 años + soporte",
		icon: MdPrecisionManufacturing,
		specifications: [
			"4 brazos robóticos articulados",
			"Visión 3D de alta definición",
			"Instrumentos especializados",
			"Entrenamiento certificado incluido"
		],
	},
];

const ourServices = [
	{
		title: "Importación Directa",
		description: "Importamos equipos directamente de fabricantes reconocidos mundialmente.",
		icon: PiTruckTrailer,
	},
	{
		title: "Instalación Profesional",
		description: "Instalación, calibración y puesta en marcha por técnicos certificados.",
		icon: MdPrecisionManufacturing,
	},
	{
		title: "Mantenimiento Técnico",
		description: "Servicio de mantenimiento preventivo y correctivo especializado.",
		icon: BiSupport,
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
		description: "Todos nuestros equipos cuentan con certificaciones internacionales FDA y CE.",
	},
	{
		title: "Soporte Técnico",
		description: "Equipo de ingenieros biomédicos disponible 24/7 para soporte técnico.",
	},
	{
		title: "Financiamiento Flexible",
		description: "Planes de financiamiento adaptados a las necesidades de cada cliente.",
	},
	{
		title: "Garantía Extendida",
		description: "Garantías extendidas y contratos de mantenimiento a largo plazo.",
	},
];

const brands = [
	{
		name: "Philips Healthcare",
		description: "Líder mundial en tecnología médica con más de 125 años de experiencia.",
		specialty: "Diagnóstico por imagen",
		icon: MdMonitor,
	},
	{
		name: "GE Healthcare",
		description: "Innovación en equipos médicos con tecnología de vanguardia.",
		specialty: "Monitoreo y anestesia",
		icon: FaHeartbeat,
	},
	{
		name: "Mindray",
		description: "Fabricante líder en equipos de monitoreo y diagnóstico clínico.",
		specialty: "Monitoreo clínico",
		icon: MdMedicalServices,
	},
];
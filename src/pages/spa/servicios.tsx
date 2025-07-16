import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { PiTowel } from "react-icons/pi";
import { BiTime, BiShield, BiSupport, BiStar } from "react-icons/bi";
import { FaHandsHelping, FaLeaf, FaHeart, FaGem } from "react-icons/fa";
import { MdSpa, MdLocalFlorist, MdNaturePeople, MdSelfImprovement } from "react-icons/md";
import { GiFlowers, GiLotusFlower } from "react-icons/gi";

export default function ServiciosPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<PiTowel className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>
								Servicios de Spa
							</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Experimenta la relajación y el bienestar total en nuestro spa. Ofrecemos una amplia 
							gama de tratamientos diseñados para revitalizar tu cuerpo, mente y espíritu con 
							técnicas profesionales y productos de la más alta calidad.
						</p>
					</section>

					{/* Featured Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{spaServices.map((service, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center">
												<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
													<service.icon className="w-6 h-6 text-primary" />
												</div>
												<div>
													<h3 className="text-xl font-semibold">{service.title}</h3>
													<p className="text-sm text-foreground/60">{service.duration}</p>
												</div>
											</div>
											<div className="text-right">
												<span className="text-2xl font-bold text-primary">{service.price}</span>
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-4">
											{service.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{service.benefits.map((benefit, idx) => (
												<span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
													{benefit}
												</span>
											))}
										</div>
										<Button 
											color="primary" 
											variant="flat" 
											fullWidth
											startContent={<MdSpa className="w-4 h-4" />}
										>
											Reservar Servicio
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Service Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías de Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{serviceCategories.map((category, index) => (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<category.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">{category.title}</h3>
										<p className="text-foreground/70 text-sm mb-4">{category.description}</p>
										<Button 
											color="primary" 
											variant="bordered" 
											size="sm"
											fullWidth
										>
											Ver Servicios
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Specialized Treatments */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Tratamientos Especializados
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{specializedTreatments.map((treatment, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<treatment.icon className="w-5 h-5 text-primary" />
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-semibold mb-2">{treatment.title}</h3>
												<p className="text-foreground/70 mb-3">{treatment.description}</p>
												<div className="flex justify-between items-center mb-3">
													<span className="text-sm text-foreground/60">{treatment.duration}</span>
													<span className="text-lg font-bold text-primary">{treatment.price}</span>
												</div>
												<ul className="text-sm text-foreground/60 space-y-1">
													{treatment.includes.map((item, idx) => (
														<li key={idx} className="flex items-center">
															<span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
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

					{/* Spa Experience */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							La Experiencia Spa
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{spaExperience.map((experience, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">{index + 1}</span>
										</div>
										<h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
										<p className="text-foreground/70 text-sm">{experience.description}</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Why Choose Our Spa */}
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
										<h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
										<p className="text-foreground/70 text-sm">{reason.description}</p>
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
									¿Listo para relajarte?
								</h2>
								<p className="text-foreground/70 mb-6">
									Reserva tu experiencia de spa ideal y deja que nuestros expertos terapeutas 
									te guíen hacia un estado de relajación y bienestar total.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button 
										color="primary" 
										size="lg"
										startContent={<MdSpa className="w-5 h-5" />}
									>
										Reservar Ahora
									</Button>
									<Button 
										variant="bordered" 
										color="primary" 
										size="lg"
										startContent={<BiStar className="w-5 h-5" />}
									>
										Ver Planes
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

const spaServices = [
	{
		title: "Masaje Relajante",
		description: "Masaje corporal completo con aceites esenciales para liberar tensiones y estrés.",
		duration: "60 minutos",
		price: "$80",
		icon: FaHandsHelping,
		benefits: ["Relajación", "Antiestrés", "Circulación"],
	},
	{
		title: "Facial Rejuvenecedor",
		description: "Tratamiento facial profundo con productos naturales para revitalizar la piel.",
		duration: "75 minutos",
		price: "$65",
		icon: GiFlowers,
		benefits: ["Hidratación", "Antienvejecimiento", "Luminosidad"],
	},
	{
		title: "Reflexología",
		description: "Técnica de masaje en pies que estimula puntos de energía para el bienestar general.",
		duration: "45 minutos",
		price: "$45",
		icon: MdSelfImprovement,
		benefits: ["Equilibrio", "Relajación", "Vitalidad"],
	},
	{
		title: "Aromaterapia",
		description: "Sesión de relajación con aceites esenciales naturales y técnicas de respiración.",
		duration: "50 minutos",
		price: "$55",
		icon: MdLocalFlorist,
		benefits: ["Relajación", "Armonía", "Bienestar"],
	},
	{
		title: "Exfoliación Corporal",
		description: "Tratamiento exfoliante que renueva la piel y mejora su textura naturalmente.",
		duration: "40 minutos",
		price: "$50",
		icon: GiLotusFlower,
		benefits: ["Renovación", "Suavidad", "Luminosidad"],
	},
	{
		title: "Hidroterapia",
		description: "Baños terapéuticos con sales minerales y aceites para relajación profunda.",
		duration: "35 minutos",
		price: "$60",
		icon: FaLeaf,
		benefits: ["Desintoxicación", "Relajación", "Circulación"],
	},
];

const serviceCategories = [
	{
		title: "Masajes Terapéuticos",
		description: "Variedad de masajes para relajación y bienestar muscular.",
		icon: FaHandsHelping,
	},
	{
		title: "Cuidado Facial",
		description: "Tratamientos faciales para todos los tipos de piel.",
		icon: GiFlowers,
	},
	{
		title: "Bienestar Corporal",
		description: "Servicios integrales para el cuidado del cuerpo.",
		icon: MdNaturePeople,
	},
	{
		title: "Terapias Holísticas",
		description: "Tratamientos que integran cuerpo, mente y espíritu.",
		icon: MdSelfImprovement,
	},
];

const specializedTreatments = [
	{
		title: "Masaje de Piedras Calientes",
		description: "Técnica ancestral que utiliza piedras volcánicas para liberar tensiones profundas.",
		duration: "90 minutos",
		price: "$120",
		icon: FaGem,
		includes: [
			"Preparación con aceites esenciales",
			"Masaje con piedras calientes",
			"Relajación post-tratamiento",
			"Infusión de hierbas incluida"
		],
	},
	{
		title: "Ritual de Belleza Completo",
		description: "Experiencia integral que incluye facial, corporal y relajación mental.",
		duration: "3 horas",
		price: "$200",
		icon: FaHeart,
		includes: [
			"Facial purificante y nutritivo",
			"Exfoliación corporal completa",
			"Masaje relajante de 60 min",
			"Hidratación y aromaterapia"
		],
	},
	{
		title: "Terapia de Desintoxicación",
		description: "Programa especial para eliminar toxinas y revitalizar el organismo.",
		duration: "2 horas",
		price: "$150",
		icon: FaLeaf,
		includes: [
			"Sauna infrarroja",
			"Envoltura corporal desintoxicante",
			"Masaje drenante linfático",
			"Bebida detox natural"
		],
	},
	{
		title: "Masaje Prenatal",
		description: "Masaje especializado para futuras mamás, seguro y relajante.",
		duration: "60 minutos",
		price: "$90",
		icon: MdNaturePeople,
		includes: [
			"Evaluación profesional",
			"Masaje adaptado al embarazo",
			"Posiciones cómodas y seguras",
			"Aceites seguros para embarazadas"
		],
	},
];

const spaExperience = [
	{
		title: "Bienvenida",
		description: "Recepción personalizada con bata, pantuflas y bebida relajante.",
	},
	{
		title: "Preparación",
		description: "Evaluación individual y preparación del ambiente según tus necesidades.",
	},
	{
		title: "Tratamiento",
		description: "Servicio profesional en ambiente tranquilo con música relajante.",
	},
	{
		title: "Relajación",
		description: "Tiempo de descanso post-tratamiento con infusiones naturales.",
	},
];

const whyChooseUs = [
	{
		title: "Profesionales Certificados",
		description: "Terapeutas altamente capacitados con certificaciones internacionales.",
		icon: BiShield,
	},
	{
		title: "Productos Premium",
		description: "Utilizamos solo productos orgánicos y naturales de la más alta calidad.",
		icon: FaLeaf,
	},
	{
		title: "Ambiente Relajante",
		description: "Espacios diseñados para crear una atmósfera de paz y tranquilidad.",
		icon: MdSpa,
	},
	{
		title: "Atención Personalizada",
		description: "Cada tratamiento se adapta a tus necesidades y preferencias específicas.",
		icon: BiSupport,
	},
];
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiCheck, BiHome, BiPlus, BiShield } from "react-icons/bi";
import {
	FaBuilding,
	FaIndustry,
	FaShoppingCart,
	FaTruck,
} from "react-icons/fa";
import { LiaPillsSolid } from "react-icons/lia";
import {
	MdConstruction,
	MdDirectionsCar,
	MdOutlineLocalHospital,
	MdSecurity,
} from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function KitsPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<LiaPillsSolid className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Kits Médicos</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Kits médicos especializados para cada necesidad. Desde botiquines
							básicos para el hogar hasta kits industriales completos, tenemos
							la solución perfecta para tu seguridad y la de tu familia.
						</p>
					</section>

					{/* Featured Kits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Nuestros Kits Médicos
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{medicalKits.map((kit, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center">
												<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
													<kit.icon className="w-6 h-6 text-primary" />
												</div>
												<div>
													<h3 className="text-xl font-semibold">{kit.title}</h3>
													<p className="text-sm text-foreground/60">
														{kit.category}
													</p>
												</div>
											</div>
											<div className="text-right">
												<span className="text-2xl font-bold text-primary">
													{kit.price}
												</span>
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed mb-4">
											{kit.description}
										</p>
										<div className="space-y-2 mb-4">
											<h4 className="font-semibold text-sm text-foreground/80">
												Incluye:
											</h4>
											<ul className="text-sm text-foreground/60 space-y-1">
												{kit.includes.slice(0, 3).map((item, idx) => (
													<li key={idx} className="flex items-center">
														<BiCheck className="w-4 h-4 text-green-500 mr-2" />
														{item}
													</li>
												))}
												{kit.includes.length > 3 && (
													<li className="text-primary text-sm">
														<BiPlus className="w-4 h-4 inline mr-1" />
														{kit.includes.length - 3} elementos más
													</li>
												)}
											</ul>
										</div>
										<Button
											color="primary"
											variant="flat"
											fullWidth
											startContent={<FaShoppingCart className="w-4 h-4" />}
										>
											Comprar Kit
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Kit Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías de Kits
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{kitCategories.map((category, index) => (
								<Card
									key={index}
									className="text-center hover:shadow-lg transition-shadow"
								>
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<category.icon className="w-8 h-8 text-primary" />
										</div>
										<h3 className="text-lg font-semibold mb-2">
											{category.title}
										</h3>
										<p className="text-foreground/70 text-sm mb-4">
											{category.description}
										</p>
										<Button
											color="primary"
											variant="bordered"
											size="sm"
											fullWidth
										>
											Ver Kits
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Kit Comparison */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Comparación de Kits
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{kitComparison.map((kit, index) => (
								<Card
									key={index}
									className={`text-center ${kit.featured ? "border-2 border-primary" : ""}`}
								>
									<CardBody className="p-8">
										{kit.featured && (
											<div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
												Más Popular
											</div>
										)}
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<kit.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{kit.title}
										</h3>
										<p className="text-foreground/70 mb-4">{kit.description}</p>
										<div className="text-3xl font-bold text-primary mb-4">
											{kit.price}
										</div>
										<ul className="text-sm text-foreground/60 mb-6 space-y-2">
											{kit.features.map((feature, idx) => (
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
											variant={kit.featured ? "solid" : "bordered"}
											fullWidth
											startContent={<FaShoppingCart className="w-4 h-4" />}
										>
											{kit.featured ? "Comprar Ahora" : "Seleccionar"}
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
									¿Necesitas ayuda para elegir?
								</h2>
								<p className="text-foreground/70 mb-6">
									Nuestros expertos pueden ayudarte a seleccionar el kit médico
									perfecto para tus necesidades específicas. Contáctanos para
									asesoría personalizada.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<LiaPillsSolid className="w-5 h-5" />}
									>
										Asesoría Gratuita
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<FaShoppingCart className="w-5 h-5" />}
									>
										Ver Catálogo Completo
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

const medicalKits = [
	{
		title: "Kit Básico Familiar",
		category: "Hogar",
		description:
			"Kit completo para el hogar con elementos esenciales para primeros auxilios familiares.",
		price: "$45",
		icon: BiHome,
		includes: [
			"Vendas elásticas y gasas",
			"Antisépticos y alcohol",
			"Termómetro digital",
			"Analgésicos básicos",
			"Tijeras y pinzas",
			"Manual de primeros auxilios",
		],
	},
	{
		title: "Kit Industrial Pro",
		category: "Industria",
		description:
			"Kit profesional para entornos industriales con elementos para accidentes laborales.",
		price: "$180",
		icon: FaIndustry,
		includes: [
			"Camilla plegable",
			"Kit para quemaduras",
			"Inmovilizadores",
			"Oxígeno portátil",
			"Desfibrilador automático",
			"Medicamentos de emergencia",
			"Equipo de protección personal",
		],
	},
	{
		title: "Kit Oficina Ejecutiva",
		category: "Oficina",
		description:
			"Kit elegante y completo para oficinas corporativas y espacios de trabajo.",
		price: "$85",
		icon: FaBuilding,
		includes: [
			"Botiquín de pared",
			"Medicamentos básicos",
			"Material de curación",
			"Termómetro infrarrojo",
			"Gel antibacterial",
			"Mascarillas desechables",
		],
	},
	{
		title: "Kit Construcción",
		category: "Construcción",
		description:
			"Kit especializado para obras de construcción y trabajos de alto riesgo.",
		price: "$220",
		icon: MdConstruction,
		includes: [
			"Kit trauma completo",
			"Solución salina",
			"Vendas hemostáticas",
			"Férulas de emergencia",
			"Medicamentos para dolor",
			"Equipo de rescate básico",
		],
	},
	{
		title: "Kit Transporte",
		category: "Vehículos",
		description:
			"Kit compacto para vehículos particulares y transporte público.",
		price: "$65",
		icon: MdDirectionsCar,
		includes: [
			"Estuche compacto",
			"Triángulos de emergencia",
			"Kit de primeros auxilios",
			"Chaleco reflectivo",
			"Linterna LED",
			"Mantas térmicas",
		],
	},
	{
		title: "Kit Hospitalario",
		category: "Salud",
		description:
			"Kit profesional para centros médicos y consultorios especializados.",
		price: "$350",
		icon: MdOutlineLocalHospital,
		includes: [
			"Instrumental médico",
			"Medicamentos controlados",
			"Equipo de diagnóstico",
			"Material quirúrgico",
			"Equipos de monitoreo",
			"Suministros estériles",
		],
	},
];

const kitCategories = [
	{
		title: "Kits para Hogar",
		description:
			"Botiquines familiares y para uso doméstico con elementos básicos.",
		icon: BiHome,
	},
	{
		title: "Kits Industriales",
		description:
			"Kits especializados para fábricas, talleres y entornos industriales.",
		icon: FaIndustry,
	},
	{
		title: "Kits Empresariales",
		description:
			"Soluciones médicas para oficinas, comercios y espacios corporativos.",
		icon: FaBuilding,
	},
	{
		title: "Kits Especializados",
		description:
			"Kits para necesidades específicas como deportes, viajes y emergencias.",
		icon: MdSecurity,
	},
];

const kitComparison = [
	{
		title: "Básico",
		description: "Perfecto para el hogar y uso familiar cotidiano.",
		price: "$45",
		icon: BiShield,
		featured: false,
		features: [
			"20 elementos básicos",
			"Manual de primeros auxilios",
			"Garantía de 1 año",
			"Estuche compacto",
			"Ideal para 4 personas",
		],
	},
	{
		title: "Profesional",
		description: "Ideal para empresas y uso profesional.",
		price: "$180",
		icon: FaTruck,
		featured: true,
		features: [
			"50+ elementos profesionales",
			"Capacitación incluida",
			"Garantía de 2 años",
			"Estuche resistente",
			"Mantenimiento incluido",
			"Ideal para 20 personas",
		],
	},
	{
		title: "Industrial",
		description: "Para entornos de alto riesgo y emergencias críticas.",
		price: "$350",
		icon: FaIndustry,
		featured: false,
		features: [
			"100+ elementos especializados",
			"Equipo de emergencia avanzado",
			"Garantía de 3 años",
			"Estuche profesional",
			"Soporte técnico 24/7",
			"Ideal para 50+ personas",
		],
	},
];

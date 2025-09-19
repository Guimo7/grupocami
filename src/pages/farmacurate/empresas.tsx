import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { BiBuilding, BiSupport, BiTime } from "react-icons/bi";
import { FaAward, FaClipboardList, FaHandshake, FaTruck } from "react-icons/fa";
import { LiaPillsSolid } from "react-icons/lia";
import { MdInventory, MdSecurity } from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const empresaServices = [
	{
		title: "Botiquines Empresariales",
		description:
			"Botiquines de primeros auxilios completos y personalizados según las necesidades específicas de tu empresa.",
		icon: LiaPillsSolid,
	},
	{
		title: "Suministros Médicos",
		description:
			"Amplia gama de suministros médicos para oficinas, fábricas y establecimientos comerciales.",
		icon: MdInventory,
	},
	{
		title: "Asesoría Especializada",
		description:
			"Consultoría en seguridad industrial y salud ocupacional para cumplir con normativas vigentes.",
		icon: BiSupport,
	},
	{
		title: "Mantenimiento",
		description:
			"Servicios de revisión y reposición periódica de productos médicos y botiquines.",
		icon: BiTime,
	},
	{
		title: "Entrega Rápida",
		description:
			"Servicio de entrega rápida y confiable para pedidos urgentes y programados.",
		icon: FaTruck,
	},
];

const productCategories = [
	{
		title: "Botiquines de Primeros Auxilios",
		description:
			"Botiquines completos para diferentes tipos de empresas y riesgos laborales.",
		icon: LiaPillsSolid,
		items: [
			"Botiquín básico para oficinas",
			"Botiquín industrial para fábricas",
			"Botiquín para construcción",
			"Botiquín para restaurantes",
			"Botiquín para transporte",
		],
	},
	{
		title: "Medicamentos y Antisépticos",
		description:
			"Medicamentos básicos y productos de desinfección para uso empresarial.",
		icon: MdSecurity,
		items: [
			"Analgésicos básicos",
			"Antisépticos y desinfectantes",
			"Vendas y gasas",
			"Alcohol y agua oxigenada",
			"Termómetros digitales",
		],
	},
];

const whyChooseUs = [
	{
		title: "Calidad Certificada",
		description:
			"Todos nuestros productos cuentan con certificaciones médicas y de calidad.",
		icon: FaAward,
	},
	{
		title: "Precios Competitivos",
		description:
			"Ofrecemos los mejores precios del mercado con descuentos por volumen.",
		icon: BiBuilding,
	},
	{
		title: "Entrega Confiable",
		description:
			"Servicio de entrega puntual y seguro en todo el territorio nacional.",
		icon: FaTruck,
	},
	{
		title: "Soporte Continuo",
		description: "Atención al cliente 24/7 y soporte técnico especializado.",
		icon: BiSupport,
	},
];

const processSteps = [
	{
		title: "Evaluación",
		description:
			"Evaluamos las necesidades específicas de tu empresa y tipo de industria.",
	},
	{
		title: "Cotización",
		description:
			"Preparamos una cotización personalizada con productos y servicios adecuados.",
	},
	{
		title: "Aprobación",
		description:
			"Revisas y apruebas la propuesta, ajustando según tus requerimientos.",
	},
	{
		title: "Entrega",
		description:
			"Entregamos e instalamos los productos en tu empresa con capacitación incluida.",
	},
];

export default function EmpresasPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<BiBuilding className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Farmacurate Empresas</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Soluciones médicas integrales para empresas. Equipamos a tu
							organización con botiquines de primeros auxilios, suministros
							médicos y todo lo necesario para mantener la salud y seguridad de
							tus colaboradores.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Servicios para Empresas
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{empresaServices.map((service, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader className="pb-3">
										<div className="flex items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
												<service.icon className="w-6 h-6 text-primary" />
											</div>
											<h3 className="text-xl font-semibold">{service.title}</h3>
										</div>
									</CardHeader>
									<CardBody>
										<p className="text-foreground/70 leading-relaxed">
											{service.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Product Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Categorías de Productos
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{productCategories.map((category, index) => (
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
													{category.items.map((item, idx) => (
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

					{/* Process Steps */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Proceso de Compra
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

					{/* CTA Section */}
					<section className="text-center">
						<Card className="max-w-2xl mx-auto">
							<CardBody className="p-8">
								<h2 className="text-2xl font-bold text-primary mb-4">
									¿Listo para equipar tu empresa?
								</h2>
								<p className="text-foreground/70 mb-6">
									Contáctanos para una cotización personalizada y descubre cómo
									podemos ayudarte a mantener la salud y seguridad de tus
									colaboradores con nuestros productos médicos.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<FaHandshake className="w-5 h-5" />}
									>
										Solicitar Cotización
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<FaClipboardList className="w-5 h-5" />}
									>
										Ver Catálogo
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

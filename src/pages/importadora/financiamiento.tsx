import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Select,
	SelectItem,
	Textarea,
} from "@heroui/react";
import {
	BiCalculator,
	BiCheck,
	BiMoney,
	BiShield,
	BiTime,
} from "react-icons/bi";
import {
	FaBuilding,
	FaClipboardList,
	FaHandshake,
	FaPercent,
} from "react-icons/fa";
import {
	MdAccountBalance,
	MdAttachMoney,
	MdBusinessCenter,
} from "react-icons/md";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function FinanciamientoPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<MdAttachMoney className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Financiamiento</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Facilitamos la adquisición de equipos médicos con planes de
							financiamiento flexibles y tasas competitivas. Soluciones
							personalizadas para hospitales, clínicas y profesionales de la
							salud.
						</p>
					</section>

					{/* Financing Options */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Opciones de Financiamiento
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{financingOptions.map((option, index) => (
								<Card
									key={index}
									className={`text-center ${option.featured ? "border-2 border-primary" : ""}`}
								>
									<CardBody className="p-8">
										{option.featured && (
											<div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
												Más Solicitado
											</div>
										)}
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<option.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-2xl font-bold text-primary mb-2">
											{option.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{option.description}
										</p>
										<div className="text-3xl font-bold text-primary mb-1">
											{option.rate}
										</div>
										<p className="text-sm text-foreground/60 mb-6">
											{option.term}
										</p>
										<ul className="text-sm text-foreground/60 mb-6 space-y-2">
											{option.features.map((feature, idx) => (
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
											variant={option.featured ? "solid" : "bordered"}
											fullWidth
											startContent={<BiCalculator className="w-4 h-4" />}
										>
											{option.featured ? "Solicitar Ahora" : "Más Información"}
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Financing Calculator and Application */}
					<section className="mb-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* Financing Calculator */}
							<Card className="h-fit">
								<CardHeader>
									<div className="flex items-center">
										<BiCalculator className="w-6 h-6 text-primary mr-3" />
										<h2 className="text-2xl font-bold text-primary">
											Calculadora de Financiamiento
										</h2>
									</div>
								</CardHeader>
								<CardBody className="space-y-6">
									<Input
										label="Monto del Equipo"
										placeholder="$50,000"
										startContent={<BiMoney className="text-primary" />}
										variant="bordered"
										type="number"
									/>
									<Select
										label="Plazo de Financiamiento"
										placeholder="Selecciona el plazo"
										startContent={<BiTime className="text-primary" />}
										variant="bordered"
									>
										{financingTerms.map((term) => (
											<SelectItem key={term.value}>{term.label}</SelectItem>
										))}
									</Select>
									<Select
										label="Tasa de Interés"
										placeholder="Selecciona la tasa"
										startContent={<FaPercent className="text-primary" />}
										variant="bordered"
									>
										{interestRates.map((rate) => (
											<SelectItem key={rate.value}>{rate.label}</SelectItem>
										))}
									</Select>
									<Card className="bg-primary/5 border-primary/20">
										<CardBody className="p-4">
											<div className="space-y-2">
												<div className="flex justify-between">
													<span className="text-foreground/70">
														Cuota Mensual:
													</span>
													<span className="font-bold text-primary">$2,485</span>
												</div>
												<div className="flex justify-between">
													<span className="text-foreground/70">
														Total a Pagar:
													</span>
													<span className="font-bold text-primary">
														$59,640
													</span>
												</div>
												<div className="flex justify-between">
													<span className="text-foreground/70">Intereses:</span>
													<span className="font-bold text-primary">$9,640</span>
												</div>
											</div>
										</CardBody>
									</Card>
									<Button
										color="primary"
										size="lg"
										fullWidth
										startContent={<FaClipboardList className="w-5 h-5" />}
									>
										Solicitar Financiamiento
									</Button>
								</CardBody>
							</Card>

							{/* Application Form */}
							<Card className="h-fit">
								<CardHeader>
									<div className="flex items-center">
										<FaClipboardList className="w-6 h-6 text-primary mr-3" />
										<h2 className="text-2xl font-bold text-primary">
											Solicitud de Financiamiento
										</h2>
									</div>
								</CardHeader>
								<CardBody className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Input
											label="Nombre Completo"
											placeholder="Ingresa tu nombre"
											variant="bordered"
										/>
										<Input
											label="Empresa/Institución"
											placeholder="Nombre de la empresa"
											variant="bordered"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Input
											label="Teléfono"
											placeholder="Número de contacto"
											variant="bordered"
										/>
										<Input
											label="Email"
											placeholder="correo@ejemplo.com"
											variant="bordered"
										/>
									</div>
									<Select
										label="Tipo de Cliente"
										placeholder="Selecciona el tipo"
										variant="bordered"
									>
										{clientTypes.map((type) => (
											<SelectItem key={type.value}>{type.label}</SelectItem>
										))}
									</Select>
									<Select
										label="Equipo de Interés"
										placeholder="Selecciona el equipo"
										variant="bordered"
									>
										{equipmentTypes.map((equipment) => (
											<SelectItem key={equipment.value}>
												{equipment.label}
											</SelectItem>
										))}
									</Select>
									<Textarea
										label="Comentarios Adicionales"
										placeholder="Información adicional sobre tu solicitud"
										variant="bordered"
										rows={3}
									/>
									<Button
										color="primary"
										size="lg"
										fullWidth
										startContent={<FaHandshake className="w-5 h-5" />}
									>
										Enviar Solicitud
									</Button>
								</CardBody>
							</Card>
						</div>
					</section>

					{/* Financing Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Beneficios del Financiamiento
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{financingBenefits.map((benefit, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<benefit.icon className="w-5 h-5 text-primary" />
											</div>
											<div>
												<h3 className="text-lg font-semibold mb-2">
													{benefit.title}
												</h3>
												<p className="text-foreground/70 mb-3">
													{benefit.description}
												</p>
												<ul className="text-sm text-foreground/60 space-y-1">
													{benefit.details.map((detail, idx) => (
														<li key={idx} className="flex items-center">
															<BiCheck className="w-4 h-4 text-green-500 mr-2" />
															{detail}
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

					{/* Requirements */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Requisitos y Proceso
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{requirements.map((requirement, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">
												{index + 1}
											</span>
										</div>
										<h3 className="text-lg font-semibold mb-2">
											{requirement.title}
										</h3>
										<p className="text-foreground/70 text-sm">
											{requirement.description}
										</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Client Types */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							¿Quién Puede Aplicar?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{clientSegments.map((segment, index) => (
								<Card
									key={index}
									className="text-center hover:shadow-lg transition-shadow"
								>
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<segment.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-xl font-bold text-primary mb-2">
											{segment.title}
										</h3>
										<p className="text-foreground/70 mb-4">
											{segment.description}
										</p>
										<ul className="text-sm text-foreground/60 mb-6 space-y-1">
											{segment.features.map((feature, idx) => (
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
											variant="bordered"
											fullWidth
											startContent={<FaHandshake className="w-4 h-4" />}
										>
											Solicitar Información
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
									¿Listo para adquirir tu equipo médico?
								</h2>
								<p className="text-foreground/70 mb-6">
									Nuestros asesores financieros están listos para ayudarte a
									encontrar la mejor opción de financiamiento para tu inversión
									en tecnología médica.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="primary"
										size="lg"
										startContent={<BiCalculator className="w-5 h-5" />}
									>
										Calcular Financiamiento
									</Button>
									<Button
										variant="bordered"
										color="primary"
										size="lg"
										startContent={<FaHandshake className="w-5 h-5" />}
									>
										Hablar con Asesor
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

const financingOptions = [
	{
		title: "Básico",
		description:
			"Ideal para equipos de diagnóstico básico y consultorios pequeños.",
		rate: "8.5%",
		term: "Hasta 24 meses",
		icon: BiMoney,
		featured: false,
		features: [
			"Montos hasta $50,000",
			"Aprobación en 48 horas",
			"Sin garantías adicionales",
			"Pagos fijos mensuales",
			"Prepago sin penalidad",
		],
	},
	{
		title: "Profesional",
		description:
			"Para clínicas y hospitales que requieren equipos especializados.",
		rate: "7.2%",
		term: "Hasta 60 meses",
		icon: MdBusinessCenter,
		featured: true,
		features: [
			"Montos hasta $500,000",
			"Periodo de gracia disponible",
			"Seguro de vida incluido",
			"Cuotas flexibles",
			"Asesoría financiera",
			"Mantenimiento incluido primer año",
		],
	},
	{
		title: "Corporativo",
		description: "Soluciones a medida para grandes instituciones médicas.",
		rate: "6.8%",
		term: "Hasta 84 meses",
		icon: FaBuilding,
		featured: false,
		features: [
			"Montos desde $500,000",
			"Tasas preferenciales",
			"Estructuras personalizadas",
			"Múltiples garantías",
			"Gerente de cuenta dedicado",
			"Mantenimiento extendido",
		],
	},
];

const financingTerms = [
	{ value: "12", label: "12 meses" },
	{ value: "24", label: "24 meses" },
	{ value: "36", label: "36 meses" },
	{ value: "48", label: "48 meses" },
	{ value: "60", label: "60 meses" },
	{ value: "84", label: "84 meses" },
];

const interestRates = [
	{ value: "6.8", label: "6.8% - Corporativo" },
	{ value: "7.2", label: "7.2% - Profesional" },
	{ value: "8.5", label: "8.5% - Básico" },
	{ value: "9.5", label: "9.5% - Promocional" },
];

const clientTypes = [
	{ value: "hospital", label: "Hospital" },
	{ value: "clinica", label: "Clínica Privada" },
	{ value: "consultorio", label: "Consultorio Médico" },
	{ value: "laboratorio", label: "Laboratorio Clínico" },
	{ value: "gobierno", label: "Institución Gubernamental" },
];

const equipmentTypes = [
	{ value: "monitor", label: "Monitor de Signos Vitales" },
	{ value: "ultrasonido", label: "Equipo de Ultrasonido" },
	{ value: "rayos-x", label: "Equipo de Rayos X" },
	{ value: "respirador", label: "Respirador Artificial" },
	{ value: "microscopio", label: "Microscopio Quirúrgico" },
	{ value: "resonancia", label: "Resonancia Magnética" },
	{ value: "tomografo", label: "Tomógrafo Computarizado" },
];

const financingBenefits = [
	{
		title: "Preservación de Capital",
		description:
			"Mantén tu capital de trabajo disponible para otras inversiones críticas.",
		icon: MdAccountBalance,
		details: [
			"Flujo de caja mejorado",
			"Liquidez preservada",
			"Oportunidades de inversión",
			"Gestión eficiente de recursos",
		],
	},
	{
		title: "Beneficios Fiscales",
		description: "Aprovecha las ventajas fiscales y deducciones disponibles.",
		icon: BiCalculator,
		details: [
			"Deducciones por depreciación",
			"Gastos financieros deducibles",
			"Planificación fiscal optimizada",
			"Asesoría contable incluida",
		],
	},
	{
		title: "Flexibilidad de Pagos",
		description: "Estructuras de pago adaptadas a tus necesidades específicas.",
		icon: FaPercent,
		details: [
			"Cuotas escalonadas",
			"Períodos de gracia",
			"Pagos estacionales",
			"Prepagos sin penalidad",
		],
	},
	{
		title: "Protección Integral",
		description: "Cobertura completa para tu inversión y tranquilidad.",
		icon: BiShield,
		details: [
			"Seguro de vida incluido",
			"Cobertura por incapacidad",
			"Seguro del equipo",
			"Garantía extendida disponible",
		],
	},
];

const requirements = [
	{
		title: "Documentación",
		description:
			"Presenta los documentos requeridos para la evaluación crediticia.",
	},
	{
		title: "Evaluación",
		description:
			"Revisión y análisis de tu perfil crediticio y capacidad de pago.",
	},
	{
		title: "Aprobación",
		description: "Notificación de aprobación y términos del financiamiento.",
	},
	{
		title: "Desembolso",
		description:
			"Entrega del equipo una vez firmado el contrato de financiamiento.",
	},
];

const clientSegments = [
	{
		title: "Hospitales",
		description:
			"Instituciones médicas de alta complejidad que requieren equipos especializados.",
		icon: MdAccountBalance,
		features: [
			"Montos hasta $5 millones",
			"Plazos hasta 84 meses",
			"Tasas preferenciales",
			"Estructuras personalizadas",
		],
	},
	{
		title: "Clínicas Privadas",
		description:
			"Centros médicos privados en crecimiento que buscan modernizar sus equipos.",
		icon: MdBusinessCenter,
		features: [
			"Montos hasta $1 millón",
			"Procesos ágiles",
			"Garantías flexibles",
			"Soporte técnico incluido",
		],
	},
	{
		title: "Profesionales",
		description:
			"Médicos especialistas que establecen o expanden su práctica privada.",
		icon: FaHandshake,
		features: [
			"Montos hasta $200,000",
			"Aprobación rápida",
			"Requisitos simplificados",
			"Asesoría personalizada",
		],
	},
];

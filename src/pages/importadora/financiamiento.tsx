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

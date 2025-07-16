import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Button, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { MdSchedule } from "react-icons/md";
import { BiTime, BiPhone, BiCalendar, BiUser } from "react-icons/bi";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaClipboardList } from "react-icons/fa";
import { ImLab } from "react-icons/im";

export default function HazTuCitaPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<MdSchedule className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>
								Haz tu Cita
							</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Agenda tu cita de laboratorio de forma rápida y sencilla. Elige el horario que mejor 
							se adapte a ti y recibe atención personalizada con resultados confiables.
						</p>
					</section>

					{/* Appointment Form and Info */}
					<section className="mb-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* Appointment Form */}
							<Card className="h-fit">
								<CardHeader>
									<div className="flex items-center">
										<BiCalendar className="w-6 h-6 text-primary mr-3" />
										<h2 className="text-2xl font-bold text-primary">Formulario de Cita</h2>
									</div>
								</CardHeader>
								<CardBody className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Input
											label="Nombres"
											placeholder="Ingresa tus nombres"
											startContent={<BiUser className="text-primary" />}
											variant="bordered"
										/>
										<Input
											label="Apellidos"
											placeholder="Ingresa tus apellidos"
											startContent={<BiUser className="text-primary" />}
											variant="bordered"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Input
											label="Teléfono"
											placeholder="Número de teléfono"
											startContent={<BiPhone className="text-primary" />}
											variant="bordered"
										/>
										<Input
											label="Email"
											placeholder="correo@ejemplo.com"
											startContent={<FaEnvelope className="text-primary" />}
											variant="bordered"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Select
											label="Tipo de Examen"
											placeholder="Selecciona el tipo"
											startContent={<ImLab className="text-primary" />}
											variant="bordered"
										>
											{examTypes.map((exam) => (
												<SelectItem key={exam.value} value={exam.value}>
													{exam.label}
												</SelectItem>
											))}
										</Select>
										<Select
											label="Horario Preferido"
											placeholder="Selecciona horario"
											startContent={<BiTime className="text-primary" />}
											variant="bordered"
										>
											{timeSlots.map((slot) => (
												<SelectItem key={slot.value} value={slot.value}>
													{slot.label}
												</SelectItem>
											))}
										</Select>
									</div>
									<Input
										label="Fecha Preferida"
										type="date"
										startContent={<BiCalendar className="text-primary" />}
										variant="bordered"
									/>
									<Textarea
										label="Observaciones"
										placeholder="Información adicional o instrucciones especiales"
										variant="bordered"
										rows={3}
									/>
									<Button 
										color="primary" 
										size="lg" 
										fullWidth
										startContent={<MdSchedule className="w-5 h-5" />}
									>
										Agendar Cita
									</Button>
								</CardBody>
							</Card>

							{/* Contact Info */}
							<div className="space-y-6">
								<Card>
									<CardHeader>
										<h3 className="text-xl font-bold text-primary">Información de Contacto</h3>
									</CardHeader>
									<CardBody className="space-y-4">
										{contactInfo.map((contact, index) => (
											<div key={index} className="flex items-center">
												<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
													<contact.icon className="w-5 h-5 text-primary" />
												</div>
												<div>
													<p className="font-semibold">{contact.label}</p>
													<p className="text-foreground/70">{contact.value}</p>
												</div>
											</div>
										))}
									</CardBody>
								</Card>

								<Card>
									<CardHeader>
										<h3 className="text-xl font-bold text-primary">Horarios de Atención</h3>
									</CardHeader>
									<CardBody>
										<div className="space-y-3">
											{scheduleInfo.map((schedule, index) => (
												<div key={index} className="flex justify-between items-center">
													<span className="font-medium">{schedule.day}</span>
													<span className="text-foreground/70">{schedule.hours}</span>
												</div>
											))}
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
					</section>

					{/* Steps to Schedule */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Cómo Agendar tu Cita
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{schedulingSteps.map((step, index) => (
								<Card key={index} className="text-center">
									<CardBody className="p-6">
										<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-2xl font-bold text-white">{index + 1}</span>
										</div>
										<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
										<p className="text-foreground/70 text-sm">{step.description}</p>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* Important Information */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Información Importante
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{importantInfo.map((info, index) => (
								<Card key={index} className="border-l-4 border-primary">
									<CardBody className="p-6">
										<div className="flex items-start">
											<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
												<info.icon className="w-5 h-5 text-primary" />
											</div>
											<div>
												<h3 className="text-lg font-semibold mb-2">{info.title}</h3>
												<p className="text-foreground/70 mb-3">{info.description}</p>
												<ul className="text-sm text-foreground/60 space-y-1">
													{info.details.map((detail, idx) => (
														<li key={idx} className="flex items-center">
															<span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
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

					{/* Alternative Contact Methods */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-12">
							Otras Formas de Contacto
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{alternativeContact.map((method, index) => (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow">
									<CardBody className="p-8">
										<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<method.icon className="w-10 h-10 text-primary" />
										</div>
										<h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
										<p className="text-foreground/70 mb-4">{method.description}</p>
										<Button 
											color="primary" 
											variant="bordered"
											fullWidth
											startContent={<method.icon className="w-4 h-4" />}
										>
											{method.action}
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
									¿Necesitas ayuda?
								</h2>
								<p className="text-foreground/70 mb-6">
									Si tienes dudas sobre cómo agendar tu cita o necesitas información adicional 
									sobre nuestros servicios, no dudes en contactarnos. Estamos aquí para ayudarte.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button 
										color="primary" 
										size="lg"
										startContent={<FaWhatsapp className="w-5 h-5" />}
									>
										WhatsApp
									</Button>
									<Button 
										variant="bordered" 
										color="primary" 
										size="lg"
										startContent={<BiPhone className="w-5 h-5" />}
									>
										Llamar Ahora
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

const examTypes = [
	{ value: "hematologia", label: "Hematología Completa" },
	{ value: "quimica", label: "Química Sanguínea" },
	{ value: "orina", label: "Examen de Orina" },
	{ value: "lipidos", label: "Perfil Lipídico" },
	{ value: "hepatico", label: "Función Hepática" },
	{ value: "renal", label: "Función Renal" },
	{ value: "hormonal", label: "Perfil Hormonal" },
	{ value: "basico", label: "Paquete Básico" },
	{ value: "completo", label: "Paquete Completo" },
	{ value: "ejecutivo", label: "Paquete Ejecutivo" },
];

const timeSlots = [
	{ value: "07:00", label: "7:00 AM" },
	{ value: "08:00", label: "8:00 AM" },
	{ value: "09:00", label: "9:00 AM" },
	{ value: "10:00", label: "10:00 AM" },
	{ value: "11:00", label: "11:00 AM" },
	{ value: "14:00", label: "2:00 PM" },
	{ value: "15:00", label: "3:00 PM" },
	{ value: "16:00", label: "4:00 PM" },
	{ value: "17:00", label: "5:00 PM" },
];

const contactInfo = [
	{
		icon: BiPhone,
		label: "Teléfono",
		value: "(503) 2234-5678",
	},
	{
		icon: FaWhatsapp,
		label: "WhatsApp",
		value: "(503) 7805-1592",
	},
	{
		icon: FaEnvelope,
		label: "Email",
		value: "laboratorio@grupocami.com",
	},
	{
		icon: FaMapMarkerAlt,
		label: "Dirección",
		value: "Av. Principal #123, San Salvador",
	},
];

const scheduleInfo = [
	{ day: "Lunes - Viernes", hours: "6:00 AM - 6:00 PM" },
	{ day: "Sábados", hours: "7:00 AM - 12:00 PM" },
	{ day: "Domingos", hours: "Cerrado" },
	{ day: "Feriados", hours: "Horario especial" },
];

const schedulingSteps = [
	{
		title: "Completa el Formulario",
		description: "Llena todos los campos requeridos con tu información personal.",
	},
	{
		title: "Selecciona Fecha y Hora",
		description: "Elige la fecha y horario que mejor se adapte a tu disponibilidad.",
	},
	{
		title: "Confirmación",
		description: "Recibirás una confirmación vía email o WhatsApp.",
	},
	{
		title: "Acude a tu Cita",
		description: "Presenta tu identificación y llega 15 minutos antes.",
	},
];

const importantInfo = [
	{
		title: "Preparación para Exámenes",
		description: "Instrucciones importantes para obtener resultados precisos.",
		icon: FaClipboardList,
		details: [
			"Ayuno de 8-12 horas para química sanguínea",
			"No consumir alcohol 24 horas antes",
			"Traer identificación oficial",
			"Usar ropa cómoda y holgada",
			"Informar medicamentos actuales"
		],
	},
	{
		title: "Políticas de Cancelación",
		description: "Información sobre cambios y cancelaciones de citas.",
		icon: BiCalendar,
		details: [
			"Cancelar con 24 horas de anticipación",
			"Reagendar sin costo adicional",
			"Llegada tardía: tolerancia de 15 minutos",
			"No presentarse: posible cargo",
			"Confirmación requerida 24h antes"
		],
	},
	{
		title: "Entrega de Resultados",
		description: "Cómo y cuándo recibirás tus resultados de laboratorio.",
		icon: ImLab,
		details: [
			"Resultados digitales vía email",
			"Copia física disponible",
			"Tiempo: 24-48 horas hábiles",
			"Consulta médica opcional",
			"Almacenamiento seguro por 5 años"
		],
	},
	{
		title: "Métodos de Pago",
		description: "Opciones de pago disponibles para tu conveniencia.",
		icon: BiPhone,
		details: [
			"Efectivo",
			"Tarjetas de crédito/débito",
			"Transferencias bancarias",
			"Seguros médicos",
			"Planes de pago disponibles"
		],
	},
];

const alternativeContact = [
	{
		title: "WhatsApp",
		description: "Agenda tu cita rápidamente a través de nuestro WhatsApp Business.",
		icon: FaWhatsapp,
		action: "Chatear Ahora",
	},
	{
		title: "Llamada Telefónica",
		description: "Habla directamente con nuestro personal para agendar tu cita.",
		icon: BiPhone,
		action: "Llamar Ahora",
	},
	{
		title: "Visita Presencial",
		description: "Visita nuestras instalaciones para agendar tu cita en persona.",
		icon: FaMapMarkerAlt,
		action: "Ver Ubicación",
	},
];
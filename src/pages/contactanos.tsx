import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Link } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function ContactanosPage() {
	const handleWhatsAppClick = () => {
		window.open(`https://wa.me/${siteConfig.links.whatsapp}`, "_blank");
	};

	const handlePhoneClick = () => {
		window.open(`tel:+${siteConfig.links.whatsapp}`, "_self");
	};

	const handleEmailClick = () => {
		window.open("mailto:info@grupocami.com", "_self");
	};

	return (
		<DefaultLayout>
			<div className="max-w-6xl mx-auto px-4 py-8">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
						Contáctanos
					</h1>
					<p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
						Estamos aquí para ayudarte. Comunícate con nosotros a través de
						cualquiera de nuestros canales de contacto.
					</p>
				</section>

				{/* Contact Methods Section */}
				<section className="mb-16">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* WhatsApp */}
						<Card className="p-6 hover:shadow-lg transition-shadow duration-300">
							<CardBody className="text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<FaWhatsapp className="w-8 h-8 text-green-600" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									WhatsApp
								</h3>
								<p className="text-gray-600 mb-4">
									Chatea con nosotros de forma rápida y directa
								</p>
								<Button
									color="success"
									variant="solid"
									startContent={<FaWhatsapp className="w-5 h-5" />}
									onClick={handleWhatsAppClick}
									className="w-full"
								>
									Abrir WhatsApp
								</Button>
							</CardBody>
						</Card>

						{/* Phone */}
						<Card className="p-6 hover:shadow-lg transition-shadow duration-300">
							<CardBody className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<PhoneIcon className="w-8 h-8 text-blue-600" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Teléfono
								</h3>
								<p className="text-gray-600 mb-4">
									Llámanos directamente para consultas urgentes
								</p>
								<Button
									color="primary"
									variant="solid"
									startContent={<PhoneIcon className="w-5 h-5" />}
									onClick={handlePhoneClick}
									className="w-full"
								>
									Llamar Ahora
								</Button>
							</CardBody>
						</Card>

						{/* Email */}
						<Card className="p-6 hover:shadow-lg transition-shadow duration-300">
							<CardBody className="text-center">
								<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<EnvelopeIcon className="w-8 h-8 text-purple-600" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Email
								</h3>
								<p className="text-gray-600 mb-4">
									Envíanos un correo para consultas detalladas
								</p>
								<Button
									color="secondary"
									variant="solid"
									startContent={<EnvelopeIcon className="w-5 h-5" />}
									onClick={handleEmailClick}
									className="w-full"
								>
									Enviar Email
								</Button>
							</CardBody>
						</Card>
					</div>
				</section>

				{/* Contact Information Section */}
				<section className="mb-16">
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
							Información de Contacto
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							{/* Contact Details */}
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-6">
									Detalles de Contacto
								</h3>
								<div className="space-y-4">
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
											<FaWhatsapp className="w-5 h-5 text-green-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">WhatsApp</p>
											<p className="text-gray-600">+503 7805-1592</p>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
											<PhoneIcon className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">Teléfono</p>
											<p className="text-gray-600">+503 7805-1592</p>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
											<EnvelopeIcon className="w-5 h-5 text-purple-600" />
										</div>
										<div>
											<p className="font-medium text-gray-900">Email</p>
											<p className="text-gray-600">info@grupocami.com</p>
										</div>
									</div>
								</div>
							</div>

							{/* Business Hours */}
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-6">
									Horarios de Atención
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span className="text-gray-700">Lunes - Viernes</span>
										<span className="text-gray-900 font-medium">
											8:00 AM - 6:00 PM
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-700">Sábados</span>
										<span className="text-gray-900 font-medium">
											8:00 AM - 2:00 PM
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-700">Domingos</span>
										<span className="text-gray-900 font-medium">Cerrado</span>
									</div>
								</div>
								<div className="mt-6 p-4 bg-blue-100 rounded-lg">
									<p className="text-sm text-blue-800">
										Para emergencias, contáctanos por WhatsApp las 24 horas
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Social Media Section */}
				<section className="mb-16">
					<div className="text-center">
						<h2 className="text-3xl font-bold text-primary mb-8">
							Síguenos en Redes Sociales
						</h2>
						<div className="flex justify-center gap-6">
							<Link
								href={siteConfig.links.instagram}
								isExternal
								className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</Link>
							<Link
								href={siteConfig.links.facebook}
								isExternal
								className="p-4 bg-blue-600 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</Link>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="text-center bg-primary/5 rounded-3xl p-8 md:p-12">
					<h2 className="text-3xl font-bold text-primary mb-6">
						¿Necesitas Ayuda Inmediata?
					</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						No dudes en contactarnos. Nuestro equipo está listo para brindarte
						la atención que necesitas.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							color="success"
							size="lg"
							startContent={<FaWhatsapp className="w-5 h-5" />}
							onClick={handleWhatsAppClick}
							className="font-semibold"
						>
							Chatear por WhatsApp
						</Button>
						<Button
							color="primary"
							size="lg"
							variant="bordered"
							startContent={<PhoneIcon className="w-5 h-5" />}
							onClick={handlePhoneClick}
							className="font-semibold"
						>
							Llamar Ahora
						</Button>
					</div>
				</section>
			</div>
		</DefaultLayout>
	);
}

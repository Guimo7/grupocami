import { Button, Card, CardBody } from "@heroui/react";
import { BiCalculator } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
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

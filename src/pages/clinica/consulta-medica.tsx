import { Image } from "@heroui/image";
import { Button, Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { BiClinic } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { handleWhatsAppClick } from "@/helpers";
import DefaultLayout from "@/layouts/default";
import Doctor6 from "/doctor6.png";
import DrSerrano from "/dr_serrano.jpg";
import DrVaquerano from "/dr_vaquerano.jpg";
import DraCalero from "/dra_claudia.jpg";
import DraKarla from "/dra_karla.jpg";
import DraKarol from "/dra_karol.jpg";
import DraLuz from "/dra_luz.jpg";
import DraNadia from "/dra_nadia.jpg";
import DraZuri from "/dra_zuri.jpg";
import LicAlejandra from "/lic_alejandra.jpg";
import LicCalderon from "/lic_calderon.jpg";
import LicMadai from "/lic_madai.jpg";
import LicMonica from "/lic_monica.jpg";

const consultaServices = [
	{
		title: "Dr. Jose Roberto Guzman Berrios",
		description: "Medicina general y salud ocupacional",
		icon: Doctor6,
	},
	{
		title: "Dr. Mario Alberto Serrano Sanchez",
		description: "Medicina interna",
		icon: DrSerrano,
	},
	{
		title: "Dr. Jose Rolando Aguiluz Guerra",
		description: "Medicina general y ultrasonografia",
		icon: Doctor6,
	},
	{
		title: "Lic. Alejandra Michel Lovo",
		description: "Licenciada en laboratorio clinico",
		icon: LicAlejandra,
	},
	{
		title: "Lic. Nora Elizabeth Calderon Rodriguez",
		description: "Licenciada en psicologia",
		icon: LicCalderon,
	},
	{
		title: "Dra. Karla Guadalupe Diaz Zelaya",
		description: "Pisquiatra",
		icon: DraKarla,
	},
	{
		title: "Dra. Zuri Adriana Bazan Molina",
		description: "Geriatra",
		icon: DraZuri,
	},
	{
		title: "Dr. Jorge Andres Blanco Gumero",
		description: "Medicina general",
		icon: Doctor6,
	},
	{
		title: "Dra. Claudia Dinorah Calero Rivera",
		description: "Medicina general e hipnoterapeuta",
		icon: DraCalero,
	},
	{
		title: "Dra. Morena Luz Solis Rivera",
		description: "Fisiatra",
		icon: DraLuz,
	},
	{
		title: "Dra. Nadia Patricia Rodriguez Villalta",
		description: "Medicina interna",
		icon: DraNadia,
	},
	{
		title: "Dr. David Ernesto Vaquerano",
		description: "Psiquiatra",
		icon: DrVaquerano,
	},
	{
		title: "Lic. Betsabe Madai Bermudez Benavides",
		description: "Licenciada en fisioterapia y terapia ocupacional",
		icon: LicMadai,
	},
	{
		title: "Dr. Jose Miguel Navarro Hernandez",
		description: "Otropeda y traumatologia",
		icon: Doctor6,
	},
	{
		title: "Dra. Karol Michelle Olivares",
		description: "Dermatologa",
		icon: DraKarol,
	},
	{
		title: "Lic. Monica Gabriela Hernandez Aquino",
		description: "Licenciada en fisioterapia y terapia ocupacional",
		icon: LicMonica,
	},
];

const services = [
	{
		title: "Medicina General",
	},
	{
		title: "Medicina Interna",
	},
	{
		title: "Psiquiatria",
	},
	{
		title: "Psicologia",
	},
	{
		title: "Ultrasonografia",
	},
	{
		title: "Ortopedia",
	},
	{
		title: "Traumatologia",
	},
	{
		title: "Fisioterapia",
	},
	{
		title: "Geriatria",
	},
	{
		title: "Dermatologia",
	},
	{
		title: "Medicina Holistica",
	},
	{
		title: "Hipnoterapia",
	},
];

export default function ConsultaMedicaPage() {
	return (
		<DefaultLayout>
			<div className="w-full bg-gradient-to-b from-background to-background/95">
				<div className="container mx-auto py-16 px-4">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<div className="flex items-center justify-center mb-6">
							<BiClinic className="w-16 h-16 text-primary mr-4" />
							<h1 className={title({ size: "lg" })}>Consulta Médica</h1>
						</div>
						<p className={subtitle({ class: "text-center mx-auto max-w-2xl" })}>
							Atención médica profesional y personalizada con los más altos
							estándares de calidad. Nuestro equipo de especialistas está
							comprometido con tu bienestar y salud.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-14">
							Nuestro Staff Médico
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{consultaServices.map((service, index) => (
								<Card key={index}>
									<Image
										src={service.icon}
										className="z-0 w-full h-full object-cover"
									/>
									<CardFooter className="absolute bg-primary bottom-0 z-10 justify-between">
										<div>
											<p className="font-nando font-bold text-white text-medium">
												{service.title}
											</p>
											<p className="text-secondary font-nando font-bold">
												{service.description}
											</p>
										</div>
									</CardFooter>
								</Card>
							))}
						</div>
					</section>

					{/* Process Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-center text-primary mb-14">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-2 gap-y-4 gap-x-0 md:grid-cols-3 lg:grid-cols-3 place-items-center max-w-3xl mx-auto">
							{services.map((service, index) => (
								<Chip
									key={index}
									radius="lg"
									classNames={{
										base: `${index % 2 === 0 ? "bg-primary" : "bg-secondary"} max-w-[185px] w-full h-[60px]`,
										content:
											"font-bold text-white font-nando text-center text-lg",
									}}
								>
									{service.title}
								</Chip>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<Card className="max-w-2xl mx-auto">
							<CardBody className="p-8">
								<h2 className="text-2xl font-bold text-primary mb-4">
									¿Listo para tu consulta?
								</h2>
								<p className="text-foreground/70 mb-6">
									Programa tu cita médica hoy y recibe la atención profesional
									que mereces.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										color="success"
										variant="solid"
										startContent={<FaWhatsapp className="w-5 h-5" />}
										onPress={handleWhatsAppClick}
										className="w-full"
									>
										Abrir WhatsApp
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

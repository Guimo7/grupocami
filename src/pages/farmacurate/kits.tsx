import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@heroui/react";
import { BiHome } from "react-icons/bi";
import { FaBuilding, FaWhatsapp } from "react-icons/fa";
import { LiaPillsSolid } from "react-icons/lia";
import { subtitle, title } from "@/components/primitives";
import { handleWhatsAppClick } from "@/helpers";
import DefaultLayout from "@/layouts/default";

const medicalKits = [
	{
		title: "Kit Básico",
		category: "Transporte, Oficinas, Personal, Deportistas",
		description:
			"Kit completo para el hogar con elementos esenciales para primeros auxilios familiares.",
		icon: BiHome,
		includes: [
			{
				item: "Vendaje Triangular",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Manta Termica",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Tijera",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Gasa Esteril 2x2",
				unit: "UN",
				quantity: "2",
			},
			{
				item: "Curita",
				unit: "UN",
				quantity: "10",
			},
			{
				item: "Liga para Torniquete",
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Rollo Esparadrapo de 1/2"',
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Venda de Gasa de Rollo 2"',
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Sachet Crema para Quemaduras",
				unit: "UN",
				quantity: "5",
			},
			{
				item: "Wipes Limpiadores (Libres de Alcohol)",
				unit: "UN",
				quantity: "2",
			},
			{
				item: "Pads de Alcohol",
				unit: "UN",
				quantity: "10",
			},
			{
				item: "Pads de Yodopovidona",
				unit: "UN",
				quantity: "5",
			},
			{
				item: 'Venda Elasitca 4"',
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Kit para Transporte",
				unit: "UN",
				quantity: "1",
			},
		],
	},
	{
		title: "Kit Intermedio",
		category: "Restaurantes, Personal Campo, Oficinas",
		description:
			"Kit completo para el hogar con elementos esenciales para primeros auxilios familiares.",
		icon: FaBuilding,
		includes: [
			{
				item: "Alcohol Gel 250 ml",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Aplicador Hisopo de Madera con Algodon",
				unit: "100U",
				quantity: "1",
			},
			{
				item: 'Gasa Quirurgica Esteril 3"x3"',
				unit: "UN",
				quantity: "10",
			},
			{
				item: "Clorhexidine Jabon al 4% Sln. Quirurgica 250 ml",
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Guante de Latex Talla "L"',
				unit: "PAR",
				quantity: "5",
			},
			{
				item: "Hidrocortisona Topica al 1% Crema Tubo",
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Micropore de 4" Hipoalergenico',
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Suero Fisiologico en Bolsa de 250 ml",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Suero Oral en Sobre",
				unit: "54U",
				quantity: "1",
			},
			{
				item: "Tijera Abotonada",
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Venda de Gasa Rollo 3"x4 yardas',
				unit: "UN",
				quantity: "2",
			},
			{
				item: "Kit para Transporte",
				unit: "UN",
				quantity: "1",
			},
		],
	},
	{
		title: "Kit Completo",
		category: "Industrial, Personal Campo, Trabajos Peligrosos",
		description:
			"Kit completo para el hogar con elementos esenciales para primeros auxilios familiares.",
		icon: FaBuilding,
		includes: [
			{
				item: "Alcohol Gel 250 ml",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Aplicador Hisopo de Madera con Algodon",
				unit: "CAJA 100 UNIDADES",
				quantity: "1",
			},
			{
				item: "Bolsa de Hielo Instantaneo",
				unit: "UN",
				quantity: "2",
			},
			{
				item: "Cabestrillo de Tela",
				unit: "UN",
				quantity: "2",
			},
			{
				item: "Clorhexidine Jabon al 4% Sln. Quirurgica 250 ml",
				unit: "UN",
				quantity: "1",
			},
			{
				item: 'Guante de Latex Talla "L"',
				unit: "PAR",
				quantity: "50",
			},
			{
				item: "Kit de Lavado de Ojos Portatil Frasco 1 Litro",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Crema en Tubo 50	gr Antiescaldadura (Anitpañalitis)",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Ferula para Antebrazo",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Hidrocortisona Topica al 1% Crema Tubo",
				unit: "UN",
				quantity: "1",
			},
			{
				item: "Suero Oral en Sobre",
				unit: "CAJA 54 UNIDADES",
				quantity: "1",
			},
		],
	},
];

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
								<Card key={index} className="border-2 border-primary">
									<CardHeader className="p-6 pb-0">
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
										</div>
									</CardHeader>
									<CardBody className="p-6">
										<p className="text-foreground/70 leading-relaxed mb-4">
											{kit.description}
										</p>
										<div className="space-y-2 mb-4">
											<h4 className="font-semibold text-sm text-foreground/80">
												Incluye:
											</h4>
											<Table
												aria-label="Tabla kits con insumos y cantidad"
												shadow="none"
											>
												<TableHeader>
													<TableColumn className="font-bold">
														Insumo
													</TableColumn>
													<TableColumn className="font-bold" align="center">
														Unidades
													</TableColumn>
													<TableColumn className="font-bold" align="center">
														Cantidad por botiquin
													</TableColumn>
												</TableHeader>
												<TableBody>
													{kit.includes.map((item, index) => (
														<TableRow
															key={index}
															className={
																index % 2 === 0 ? "" : "bg-secondary-200"
															}
														>
															<TableCell>{item.item}</TableCell>
															<TableCell>{item.unit}</TableCell>
															<TableCell>{item.quantity}</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<Card className="max-w-2xl mx-auto">
							<CardBody className="p-8 text-center">
								<h2 className="text-2xl font-bold text-primary mb-4">
									¿Necesitas ayuda para elegir o quieres armar tu kit a tu
									manera?
								</h2>
								<p className="text-foreground/70 mb-6">
									Nuestros expertos pueden ayudarte a seleccionar el kit médico
									perfecto para tus necesidades específicas. Contáctanos para
									asesoría personalizada.
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

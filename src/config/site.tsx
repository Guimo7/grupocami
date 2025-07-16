import { BiClinic } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { LiaPillsSolid } from "react-icons/lia";
import { PiTowel, PiTruckTrailer } from "react-icons/pi";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Grupo CAMI",
	description: "Soluciones Asistenciales, Medicas, Integrales",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Conócenos",
			href: "/conocenos",
		},
		{
			label: "Clínica",
			href: "/clinica",
			submenu: [
				{ label: "Consulta Medica", href: "/clinica/consulta-medica" },
				{ label: "Asesoria", href: "/clinica/asesoria" },
				{ label: "Alquiler", href: "/clinica/alquiler" },
				{ label: "Capacitaciones", href: "/clinica/capacitaciones" },
			],
		},
		{
			label: "Farmacurate",
			href: "/farmacurate",
			submenu: [
				{ label: "Empresas", href: "/farmacurate/empresas" },
				{ label: "Kits", href: "/farmacurate/kits" },
			],
		},
		{
			label: "Laboratorio",
			href: "/laboratorio",
			submenu: [
				{ label: "Servicios", href: "/laboratorio/servicios" },
				{ label: "Haz tu cita", href: "/laboratorios/haz-tu-cita" },
			],
		},
		{
			label: "Spa",
			href: "/spa",
			submenu: [
				{ label: "Servicios", href: "/spa/servicios" },
				{ label: "Planes", href: "/spa/planes" },
			],
		},
		{
			label: "Importadora",
			href: "/importadora",
			submenu: [
				{ label: "Equipo", href: "/importadora/equipo" },
				{ label: "Financiamiento", href: "/importadora/financiamiento" },
			],
		},
	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Conócenos",
			href: "/conocenos",
		},
		{
			label: "Clínica",
			href: "/clinica",
			submenu: [
				{ label: "Consulta Medica", href: "/clinica/consulta-medica" },
				{ label: "Asesoria", href: "/clinica/asesoria" },
				{ label: "Alquiler", href: "/clinica/alquiler" },
				{ label: "Capacitaciones", href: "/clinica/capacitaciones" },
			],
		},
		{
			label: "Farmacurate",
			href: "/farmacurate",
			submenu: [
				{ label: "Empresas", href: "/farmacurate/empresas" },
				{ label: "Kits", href: "/farmacurate/kits" },
			],
		},
		{
			label: "Laboratorio",
			href: "/laboratorio",
			submenu: [
				{ label: "Servicios", href: "/laboratorio/servicios" },
				{ label: "Haz tu cita", href: "/laboratorios/haz-tu-cita" },
			],
		},
		{
			label: "Spa",
			href: "/spa",
			submenu: [
				{ label: "Servicios", href: "/spa/servicios" },
				{ label: "Planes", href: "/spa/planes" },
			],
		},
		{
			label: "Importadora",
			href: "/importadora",
			submenu: [
				{ label: "Equipo", href: "/importadora/equipo" },
				{ label: "Financiamiento", href: "/importadora/financiamiento" },
			],
		},
	],
	services: [
		{
			label: "Clinica",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex urna, vulputate vitae mi vel, faucibus tempor mi. Sed viverra.",
			icon: BiClinic,
			tags: [
				{
					label: "Consulta Medica",
					href: "/clinica/consulta-medica",
				},
				{
					label: "Asesoria",
					href: "/clinica/asesoria",
				},
				{
					label: "Alquiler",
					href: "/clinica/alquiler",
				},
				{
					label: "Capacitaciones",
					href: "/clinica/capacitaciones",
				},
			],
		},
		{
			label: "Farmacurate",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex urna, vulputate vitae mi vel, faucibus tempor mi. Sed viverra.",
			icon: LiaPillsSolid,
			tags: [
				{ label: "Empresas", href: "/farmacurate/empresas" },
				{ label: "Kits", href: "/farmacurate/kits" },
			],
		},
		{
			label: "Laboratorio",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex urna, vulputate vitae mi vel, faucibus tempor mi. Sed viverra.",
			icon: ImLab,
			tags: [
				{ label: "Servicios", href: "/laboratorio/servicios" },
				{ label: "Haz tu cita", href: "/laboratorios/haz-tu-cita" },
			],
		},
		{
			label: "Spa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex urna, vulputate vitae mi vel, faucibus tempor mi. Sed viverra.",
			icon: PiTowel,
			tags: [
				{ label: "Servicios", href: "/spa/servicios" },
				{ label: "Planes", href: "/spa/planes" },
			],
		},
		{
			label: "Importadora",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex urna, vulputate vitae mi vel, faucibus tempor mi. Sed viverra.",
			icon: PiTruckTrailer,
			tags: [
				{ label: "Equipo", href: "/importadora/equipo" },
				{ label: "Financiamiento", href: "/importadora/financiamiento" },
			],
		},
	],
	values: [
		{
			title: "Innovación",
			description:
				"Adaptamos tecnologías y soluciones médicas y comerciales avanzadas para responder a los desafíos actuales del sector salud.",
			iconSrc: (
				<div className="h-full flex items-center justify-center">
					<div className="w-14 h-14 bg-orange-100 rounded-full mx-auto">
						<svg
							className="w-14 h-14 text-orange-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</div>
				</div>
			),
		},
		{
			title: "Excelencia",
			description:
				"Nos esforzamos por ofrecer servicios y productos con los más altos estándares de calidad, generando confianza y resultados sostenibles.",
			iconSrc: (
				<div className="h-full flex items-center justify-center">
					<div className="w-14 h-14 bg-blue-100 rounded-full mx-auto">
						<svg
							className="w-14 h-14 text-blue-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
							/>
						</svg>
					</div>
				</div>
			),
		},
		{
			title: "Cercanía Humana",
			description:
				"Crecemos el trato empático y personalizado como pilar en todas nuestras interacciones, tanto clínico como comercial.",
			iconSrc: (
				<div className="h-full flex items-center justify-center">
					<div className="w-14 h-14 bg-purple-100 rounded-full mx-auto">
						<svg
							className="w-14 h-14 text-purple-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
				</div>
			),
		},
		{
			title: "Confianza",
			description:
				"Construimos relaciones sólidas y transparentes con nuestros pacientes, clientes y aliados estratégicos.",
			iconSrc: (
				<div className="h-full flex items-center justify-center">
					<div className="w-14 h-14 bg-green-100 rounded-full mx-auto">
						<svg
							className="w-14 h-14 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
				</div>
			),
		},
		{
			title: "Visión Integral",
			description:
				"Integramos servicios de salud, tecnología y equipamiento en un modelo de atención eficiente, conectado y centrado en el bienestar.",
			iconSrc: (
				<div className="h-full flex items-center justify-center">
					<div className="w-14 h-14 bg-indigo-100 rounded-full mx-auto">
						<svg
							className="w-14 h-14 text-indigo-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</div>
				</div>
			),
		},
	],
	links: {
		instagram: "https://www.instagram.com/clinicami_sv/",
		facebook: "https://www.facebook.com/CLINICAMISV",
		whatsapp: "50378051592",
	},
};

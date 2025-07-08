import { BiClinic } from "react-icons/bi";
import { LiaPillsSolid } from "react-icons/lia";
import { ImLab } from "react-icons/im";
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
	links: {
		instagram: "https://www.instagram.com/clinicami_sv/",
		facebook: "https://www.facebook.com/CLINICAMISV",
		whatsapp: "50378051592",
	},
};

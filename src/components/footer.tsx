import { Image } from "@heroui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";
// Import logo
import logoRectangulo from "/Logo_Rectangulo.svg";
import { Map } from "./map";

export const Footer = () => {
	return (
		<footer className="w-full flex flex-col gap-6 items-center justify-between px-6 py-6 bg-primary text-white md:flex-row md:items-start md:gap-10">
			{/* Logo */}
			<div className="flex flex-col items-center md:items-start md:w-1/3">
				<Image src={logoRectangulo} alt="Logo" width="100%" />
			</div>

			{/* Contact Info */}
			<div className="flex flex-col text-sm gap-2 md:w-1/3">
				<h3 className="text-2xl font-semibold mb-2">Contáctanos</h3>
				<p>
					<strong>Dirección:</strong> Colonia y avenida Las Mercedes, calle Los
					Duraznos #1, San Salvador
				</p>
				<p>
					<strong>Email:</strong> clinicacamisv@gmail.com
				</p>
				<p>
					<strong>PBX:</strong> +503 2234 9797
				</p>
				<p>
					<strong>WhatsApp:</strong>
				</p>
				<ul className="ml-4 list-disc">
					<li>Clínicas Y MOMENTO: +503 7805 1592</li>
					<li>Alquileres: +503 7696 0972</li>
					<li>Importaciones: +503 7802 3039</li>
				</ul>

				{/* Social Icons */}
				<div className="flex gap-4 mt-3 text-white text-xl">
					<a
						href={siteConfig.links.facebook}
						target="_blank"
						aria-label="Facebook"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="hover:text-gray-200 transition" />
					</a>
					<a
						href={siteConfig.links.instagram}
						target="_blank"
						aria-label="Instagram"
						rel="noopener noreferrer"
					>
						<FaInstagram className="hover:text-gray-200 transition" />
					</a>
					<a
						href={`https://wa.me/${siteConfig.links.whatsapp}`}
						target="_blank"
						aria-label="WhatsApp"
						rel="noopener noreferrer"
					>
						<FaWhatsapp className="hover:text-gray-200 transition" />
					</a>
				</div>
			</div>

			{/* Map */}
			<div className="flex h-[350px] w-[400px] md:w-[800px] overflow-hidden">
				<Map />
			</div>
		</footer>
	);
};

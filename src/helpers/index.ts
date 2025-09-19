import { siteConfig } from "@/config/site";

export const handleWhatsAppClick = () => {
	window.open(`https://wa.me/${siteConfig.links.whatsapp}`, "_blank");
};

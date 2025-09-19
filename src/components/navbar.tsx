import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import {
	Navbar as HeroNavbar,
	Link as HeroUILink,
	Image,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Accordion,
	AccordionItem,
} from "@heroui/react";
import { animate } from "animejs";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

// Import logo
import logoImageotipo from "/Logo_Imagotipo.svg";

export const Navbar = () => {
	// Refs for underline animations
	const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
	// State for submenu toggle
	const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
	// State for mobile submenu toggle
	const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState<
		number | null
	>(null);
	// Ref for navbar
	const navbarRef = useRef<HTMLElement | null>(null);

	// Animation for hover effect
	const handleMouseEnter = (index: number) => {
		animate(`.nav-underline-${index}`, {
			scaleX: [0, 1],
			duration: 400,
			easing: "easeOutQuad",
		});
	};

	const handleMouseLeave = (index: number) => {
		animate(`.nav-underline-${index}`, {
			scaleX: [1, 0],
			duration: 400,
			easing: "easeOutQuad",
		});
	};

	// Toggle submenu (close if clicking the same item, otherwise open)
	const toggleSubmenu = (index: number) => {
		setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	// Toggle mobile submenu (close if clicking the same item, otherwise open)
	const toggleMobileSubmenu = (index: number) => {
		setOpenMobileSubmenuIndex((prevIndex) =>
			prevIndex === index ? null : index,
		);
	};

	// Close dropdowns on any click within or outside the navbar
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			// Ensure event.target is a Node
			if (!(event.target instanceof Node)) return;

			// Check if the click is within the navbar
			if (navbarRef.current) {
				if (navbarRef.current.contains(event.target)) {
					// Close dropdowns when clicking within the navbar
					setOpenSubmenuIndex(null);
					setOpenMobileSubmenuIndex(null);
				} else {
					// Close dropdowns when clicking outside the navbar (e.g., page content)
					setOpenSubmenuIndex(null);
					setOpenMobileSubmenuIndex(null);
				}
			}
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return (
		<HeroNavbar
			ref={navbarRef}
			maxWidth="xl"
			position="sticky"
			height={64}
			shouldHideOnScroll={false}
			className="flex items-center fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
		>
			{/* Branding */}
			<NavbarBrand className="flex items-center gap-2 max-w-fit">
				<Link to="/" className="flex items-center gap-2 max-w-fit">
					<Image
						src={logoImageotipo}
						alt="CAMI Logo"
						width={32}
						height={32}
						className="flex items-center"
						loading="eager"
					/>
					<p className="text-lg font-bold text-primary sm:text-xl lg:block">
						CAMI
					</p>
				</Link>
			</NavbarBrand>

			{/* Navigation Links for Larger Screens */}
			<NavbarContent className="hidden lg:flex gap-4 ml-4" justify="start">
				{siteConfig.navItems.map((item, index) => (
					<NavbarItem key={item.href}>
						{item.submenu ? (
							<Dropdown isOpen={openSubmenuIndex === index}>
								<DropdownTrigger>
									<button
										className={clsx(
											"text-primary font-semibold relative flex items-center gap-1",
											"data-[active=true]:text-primary data-[active=true]:font-medium",
										)}
										onClick={() => toggleSubmenu(index)}
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={() => handleMouseLeave(index)}
										aria-expanded={openSubmenuIndex === index}
										aria-haspopup="true"
									>
										{item.label}
										<ChevronDownIcon
											className={clsx(
												"w-4 h-4 transition-transform duration-200",
												openSubmenuIndex === index ? "rotate-180" : "rotate-0",
											)}
										/>
										<span
											ref={(el) => (underlineRefs.current[index] = el)}
											className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-center scale-x-0 nav-underline-${index} rounded-sm`}
										/>
									</button>
								</DropdownTrigger>
								<DropdownMenu
									className="bg-white/95 backdrop-blur-sm rounded-lg p-1 min-w-[200px]"
									onClose={() => setOpenSubmenuIndex(null)}
								>
									{item.submenu.map((subItem) => (
										<DropdownItem
											key={subItem.href}
											className="p-0 rounded-md"
											textValue={subItem.label}
										>
											<Link
												to={subItem.href}
												className="block w-full px-4 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-blue-200"
												onClick={() => setOpenSubmenuIndex(null)}
											>
												{subItem.label}
											</Link>
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
						) : (
							<Link
								to={item.href}
								className={clsx(
									"text-primary font-semibold relative",
									"data-[active=true]:text-primary data-[active=true]:font-medium",
								)}
								onClick={() => {
									setOpenSubmenuIndex(null);
									setOpenMobileSubmenuIndex(null);
								}} // Close dropdowns on click
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => handleMouseLeave(index)}
							>
								{item.label}
								<span
									ref={(el) => (underlineRefs.current[index] = el)}
									className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-center scale-x-0 nav-underline-${index} rounded-sm`}
								/>
							</Link>
						)}
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Theme Switcher and Hamburger Menu Toggle for Smaller Screens */}
			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			{/* Collapsible Menu for Smaller Screens */}
			<NavbarMenu className="bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg">
				<div className="mx-4 mt-4 flex flex-col gap-3">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item.href}-${index}`}>
							{item.submenu ? (
								<Accordion variant="light" className="p-0">
									<AccordionItem
										key={item.href}
										aria-label={item.label}
										title={
											<span className="text-lg font-semibold text-primary">
												{item.label}
											</span>
										}
										className="px-0"
									>
										<div className="flex flex-col gap-1 pl-4">
											{item.submenu.map((subItem) => (
												<Link
													key={subItem.href}
													to={subItem.href}
													className="block text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-200"
													onClick={() => setOpenMobileSubmenuIndex(null)}
												>
													{subItem.label}
												</Link>
											))}
										</div>
									</AccordionItem>
								</Accordion>
							) : (
								<Link
									to={item.href}
									className="block text-lg font-semibold text-primary py-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
									onClick={() => setOpenMobileSubmenuIndex(null)}
								>
									{item.label}
								</Link>
							)}
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</HeroNavbar>
	);
};

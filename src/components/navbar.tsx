import { useRef, useState, useEffect } from "react";
import {
	Navbar as HeroNavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link as HeroUILink,
} from "@heroui/react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@heroui/dropdown";
import { Image } from "@heroui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { animate } from "animejs";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
	// Refs for underline animations
	const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
	// State for submenu toggle
	const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
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
				} else {
					// Close dropdowns when clicking outside the navbar (e.g., page content)
					setOpenSubmenuIndex(null);
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
			className="flex items-center"
		>
			{/* Branding */}
			<NavbarBrand className="flex items-center gap-2 max-w-fit">
				<Link to="/" className="flex items-center gap-2 max-w-fit">
					<Image
						src="/Logo_Imagotipo.svg"
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
									className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2"
									onClose={() => setOpenSubmenuIndex(null)}
								>
									{item.submenu.map((subItem) => (
										<DropdownItem key={subItem.href}>
											<Link
												to={subItem.href}
												className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
								onClick={() => setOpenSubmenuIndex(null)} // Close dropdowns on click
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
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item.href}-${index}`}>
							{item.submenu ? (
								<div>
									<button
										onClick={() => toggleSubmenu(index)}
										className="w-full text-left text-lg font-semibold text-primary flex items-center gap-2"
										aria-expanded={openSubmenuIndex === index}
										aria-haspopup="true"
									>
										{item.label}
										<ChevronDownIcon
											className={clsx(
												"w-5 h-5 transition-transform duration-200",
												openSubmenuIndex === index ? "rotate-180" : "rotate-0",
											)}
										/>
									</button>
									{openSubmenuIndex === index && (
										<div className="ml-4 flex flex-col gap-2">
											{item.submenu.map((subItem) => (
												<Link
													key={subItem.href}
													to={subItem.href}
													className="block text-sm text-gray-700 dark:text-gray-200"
													onClick={() => setOpenSubmenuIndex(null)}
												>
													{subItem.label}
												</Link>
											))}
										</div>
									)}
								</div>
							) : (
								<HeroUILink
									as={Link}
									to={item.href}
									color={
										index === 2
											? "primary"
											: index === siteConfig.navMenuItems.length - 1
												? "danger"
												: "foreground"
									}
									size="lg"
									onClick={() => setOpenSubmenuIndex(null)} // Close dropdowns on click
								>
									{item.label}
								</HeroUILink>
							)}
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</HeroNavbar>
	);
};

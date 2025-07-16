import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

const milestones = [
	{
		year: "2020",
		title: "Fundacion",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
	{
		year: "2021",
		title: "Primera Expansionsenal - Clinica",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
	{
		year: "2022",
		title: "Segunda Expansion - Farmacurate",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
	{
		year: "2023",
		title: "Importadora",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
	{
		year: "2024",
		title: "Spa",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
	{
		year: "2025",
		title: "Actualidad",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet sapien tincidunt, vestibulum eros vitae, euismod lorem. Ut eu ante mauris. Ut dolor sem, luctus.",
	},
];

export const Timeline = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [selected, setSelected] = useState<string[]>(["0"]);
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	// Detect screen size
	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	// Scroll effect for desktop only
	useEffect(() => {
		if (!isDesktop) return; // Skip scroll effect on mobile

		const onScroll = () => {
			const section = sectionRef.current;
			if (!section) return;

			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const triggerPoint = windowHeight * 0.5; // Trigger when item is halfway in viewport

			if (rect.top <= 0 && rect.bottom >= triggerPoint) {
				const scrollY = window.scrollY;
				const offsetTop = section.offsetTop;
				const localScroll = scrollY - offsetTop;

				// Adjust itemHeight to better match the actual height of each accordion item
				const itemHeight = windowHeight * 0.85; // Slightly increased to ensure smoother transitions
				const index = Math.min(
					Math.floor(localScroll / itemHeight),
					milestones.length - 1,
				);

				setSelected([String(index)]);
			} else if (rect.bottom < triggerPoint) {
				// Ensure the last item is selected when the section is near the bottom
				setSelected([String(milestones.length - 1)]);
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isDesktop]);

	return (
		<section
			ref={sectionRef}
			className={`relative ${!isDesktop ? "my-8 md:my-12" : ""}`}
			style={{
				height: isDesktop ? `${milestones.length * 100}vh` : "auto", // Reduced height per item
				maxHeight: isDesktop ? `${milestones.length * 100}vh` : "none",
			}}
		>
			<div
				className={`${isDesktop ? "sticky top-0 h-dvh" : ""} flex items-center`}
			>
				<div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* TEXT - On top for mobile, left for desktop */}
					<div className="flex flex-col justify-start space-y-8">
						<div className="flex">
							<span className="h-px bg-primary-300 w-[30px] relative top-3"></span>
							<h6 className="uppercase text-primary font-semibold tracking-wider mx-2">
								Conocenos
							</h6>
							<span className="h-px bg-primary-300 w-full relative top-3"></span>
						</div>
						<h2 className="text-4xl md:text-4xl lg:text-5xl font-bold max-w-lg text-primary-600">
							Quienes Somos?
						</h2>
						<p className="max-w-lg text-lg leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
							ante sapien. Ut convallis luctus ipsum, non condimentum nulla
							consequat sed. Curabitur aliquet mollis finibus. Fusce a ipsum
							leo. Suspendisse fringilla nisl eget felis euismod maximus. Sed id
							magna justo. Etiam vulputate libero quis velit tristique, vel
							fringilla odio bibendum. Duis in lacus urna.
						</p>
						<Button
							variant="ghost"
							className="hover:text-white font-semibold"
							color="primary"
							href="/conocenos"
							as={Link}
							target="_top"
						>
							Conocenos
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</Button>
					</div>

					{/* ACCORDION - Below text on mobile, right on desktop */}
					<div className="flex flex-col justify-center">
						<Accordion
							selectionMode="single"
							selectedKeys={selected}
							onSelectionChange={(keys) =>
								setSelected(Array.from(keys, String))
							}
							motionProps={{
								variants: {
									enter: {
										opacity: [0, 1],
										height: "auto",
										transition: { duration: 0.3, ease: "easeInOut" },
									},
									exit: {
										opacity: [1, 0],
										height: 0,
										transition: { duration: 0.25, ease: "easeInOut" },
									},
								},
							}}
						>
							{milestones.map((m, i) => (
								<AccordionItem
									key={i}
									title={
										<div className="flex flex-col">
											<span
												className={`text-sm font-semibold text-primary ${
													selected[0] === i.toString()
														? "text-secondary-500"
														: "text-primary-500"
												}`}
											>
												{m.year}
											</span>
											<span
												className={`text-lg font-bold ${
													selected[0] === i.toString()
														? "text-primary-500"
														: "text-primary-300"
												}`}
											>
												{m.title}
											</span>
										</div>
									}
								>
									<div className="p-4 leading-relaxed">{m.body}</div>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

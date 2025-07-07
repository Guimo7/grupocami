import { animate, createScope, createSpring, Scope } from "animejs";
import { useEffect, useRef } from "react";

export const Hero = () => {
	const root = useRef(null);
	const scope = useRef<Scope | null>(null);

	useEffect(() => {
		scope.current = createScope({ root }).add(() => {
			animate(".hero-text", {
				scale: [
					{ to: 1.05, ease: "inOut(3)", duration: 200 },
					{ to: 1, ease: createSpring({ stiffness: 300 }) },
				],
				loop: true,
				loopDelay: 1000,
			});
		});

		return () => scope.current?.revert();
	}, []);

	return (
		<div ref={root}>
			<h2 className="hero-text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quae sit
				alias distinctio libero, placeat impedit nobis earum esse odio
				laudantium assumenda quidem quia doloribus. Nesciunt ea consectetur
				dolores aperiam!
			</h2>
		</div>
	);
};

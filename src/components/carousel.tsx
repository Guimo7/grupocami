import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 6000, stopOnMouseEnter: true, stopOnInteraction: false }),
	]);

	useEffect(() => {
		if (emblaApi) {
			// Log slide nodes for debugging (optional)
			// console.log(emblaApi.slideNodes());
		}
	}, [emblaApi]);

	return (
		<div className="embla w-full" ref={emblaRef}>
			<div className="embla__container w-full h-full flex">
				<div className="embla__slide w-full h-[500px] bg-blue-50 flex items-center justify-center">
					{/* <div className="max-w-4xl mx-auto py-20 px-6 text-center">
						<h1 className="text-4xl font-bold mb-4">
							Compassionate, Professional Medical Care
						</h1>
						<p className="text-lg mb-6">
							Your health is our priority. We offer personalized care with
							modern solutions for you and your family.
						</p>
						<Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
							Book an Appointment
						</Button>
					</div> */}
					<img src="/carrousel1.png" alt="Carrusel1" />
				</div>
				<div className="embla__slide w-full h-[500px] bg-blue-50 flex items-center justify-center">
					<img src="/carrousel2.png" alt="Carrusel2" />
				</div>
				<div className="embla__slide w-full h-[500px] bg-blue-50 flex items-center justify-center">
					<img src="/carrousel3.png" alt="Carrusel3" />
				</div>
			</div>
		</div>
	);
};

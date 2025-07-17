import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

// Import images
import carrousel1 from "/carrousel1.png";
import carrousel2 from "/carrousel2.png";
import carrousel3 from "/carrousel3.png";

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
					<img src={carrousel1} alt="Carrusel1" />
				</div>
				<div className="embla__slide w-full h-[500px] bg-blue-50 flex items-center justify-center">
					<img src={carrousel2} alt="Carrusel2" />
				</div>
				<div className="embla__slide w-full h-[500px] bg-blue-50 flex items-center justify-center">
					<img src={carrousel3} alt="Carrusel3" />
				</div>
			</div>
		</div>
	);
};

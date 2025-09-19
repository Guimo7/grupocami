import {
	CardBody,
	CardFooter,
	CardHeader,
	Card as HeroCard,
} from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "react-router-dom";

type ICardProps = {
	Icon: any;
	title: string;
	description: string;
	tags: { label: string; href: string }[];
};

export const Card = (props: ICardProps) => {
	const { Icon, title, description, tags } = props;

	return (
		<HeroCard
			classNames={{
				header: "flex flex-col justify-center gap-2",
				footer: "flex-wrap gap-2 min-h-[88px] items-center justify-center",
				base: "rounded-lg shadow-md border border-primary-300",
			}}
		>
			<CardHeader>
				{<Icon className="w-[32px] h-[32px] text-primary-500" />}
				<h3 className="font-bold text-3xl text-primary-600">{title}</h3>
			</CardHeader>
			<CardBody className="text-center md:text-justify">{description}</CardBody>
			<CardFooter>
				{tags.map((tag) => {
					return (
						<Link key={tag.label} to={tag.href} target="_top">
							<Chip
								radius="sm"
								classNames={{
									content: "font-semibold text-white",
									base: "bg-primary hover:bg-secondary-600 transition",
								}}
							>
								{tag.label}
							</Chip>
						</Link>
					);
				})}
			</CardFooter>
		</HeroCard>
	);
};

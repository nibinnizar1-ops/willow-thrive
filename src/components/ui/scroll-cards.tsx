import { FC } from "react";

// Types
export interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
			<div
				className="relative flex flex-col h-[400px] w-full max-w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[500px] md:max-w-[800px] items-center justify-center mx-auto 
				shadow-lg pr-3 pl-3 pt-3 pb-4 rounded-2xl overflow-hidden border border-white/20"
				style={{ backgroundColor: color }}
			>
				<span className="font-bold relative text-4xl md:text-6xl lg:text-7xl mt-5 z-10">
					<span
						className="relative z-10 font-bold tracking-tight"
						style={{ color: textColor }}
					>
						{title}
					</span>
				</span>
				<div
					className="font-medium text-base md:text-xl lg:text-2xl text-center mb-0 z-50 mt-4 tracking-wide px-4"
					style={{ lineHeight: 1.4, color: textColor }}
				>
					{description}
				</div>
				<div className="absolute inset-0 z-0">
					<img
						className="w-full h-full object-cover opacity-20"
						src={src}
						alt="Background"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
	items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
	return (
		<div className="min-h-screen">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};


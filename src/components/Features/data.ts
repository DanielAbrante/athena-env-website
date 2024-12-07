export type FeatureItem = {
	id: number;
	title: string;
	src: string;
	description: string;
};

export const FeatureList: FeatureItem[] = [
	{
		id: 0,
		title: "Easy to Use",
		src: "/img/features/js.svg",
		description: "Simplified JavaScript integration for seamless development.",
	},
	{
		id: 1,
		title: "Fast",
		src: "/img/features/rocket.svg",
		description: "Lightning speed powered by the QuickJS engine",
	},
	{
		id: 2,
		title: "Free and Open Source",
		src: "/img/features/open_source.svg",
		description: "100% free and open-source, licensed under GPL-3.0",
	},
];

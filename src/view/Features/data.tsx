import Translate from "@docusaurus/Translate";

export type FeatureItem = {
	id: number;
	title: JSX.Element;
	src: string;
	description: JSX.Element;
};

export const featuresList: FeatureItem[] = [
	{
		id: 0,
		title: <Translate>Easy to Use</Translate>,
		src: "img/features/js.svg",
		description: (
			<Translate>
				Simplified JavaScript integration for seamless development.
			</Translate>
		),
	},
	{
		id: 1,
		title: <Translate>Fast</Translate>,
		src: "img/features/rocket.svg",
		description: (
			<Translate>Lightning speed powered by the QuickJS engine</Translate>
		),
	},
	{
		id: 2,
		title: <Translate>Free and Open Source</Translate>,
		src: "img/features/open_source.svg",
		description: (
			<Translate>100% free and open-source, licensed under GPL-3.0</Translate>
		),
	},
];

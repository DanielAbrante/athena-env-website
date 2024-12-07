import Heading from "@theme/Heading";
import clsx from "clsx";
import { type FeatureItem, FeatureList } from "./data";
import styles from "./styles.module.css";

function Feature({ title, src, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<img src={src} className={styles.featureIcon} aria-hidden />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props) => (
						<Feature key={props.id} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

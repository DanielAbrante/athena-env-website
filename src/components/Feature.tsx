import Heading from "@theme/Heading";
import clsx from "clsx";
import type { FeatureItem } from "../view/Features/data";
import styles from "./styles.module.css";

export function Feature({ title, src, description }: FeatureItem) {
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

import { Feature } from "@site/src/components/Feature";
import { featuresList } from "./data";
import styles from "./features.module.css";

export function Features(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{featuresList.map((props) => (
						<Feature key={props.id} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { games } from "./data";
import styles from "./header.module.css";

export function Header() {
	const { siteConfig } = useDocusaurusContext();
	const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const bannerTransitionTime = 5000;

		const switchBanner = setInterval(() => {
			setCurrentBannerIndex((prevBanner) =>
				prevBanner === games.length - 1 ? 0 : prevBanner + 1,
			);
		}, bannerTransitionTime);

		return () => clearInterval(switchBanner);
	}, [currentBannerIndex]);

	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<img
				src={games[currentBannerIndex]?.src}
				alt=""
				className={styles.heroBannerImage}
			/>

			<div className={styles.heroBannerImageInfo}>
				<strong>{games[currentBannerIndex]?.title}</strong>
				<em>{games[currentBannerIndex]?.author}</em>
				<motion.div
					key={currentBannerIndex}
					className={styles.loadingBar}
					initial={{ width: "0%" }}
					animate={{ width: "100%" }}
					transition={{
						duration: 5,
						ease: "linear",
						repeat: Number.POSITIVE_INFINITY,
					}}
				/>
			</div>

			<div className={styles.bannerSlide}>
				{games.map(({ author }, index) => (
					<button
						type="button"
						key={author}
						onClick={() => setCurrentBannerIndex(index)}
						className={
							currentBannerIndex === index ? styles.bannerSelected : ""
						}
					/>
				))}
			</div>

			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						Getting Started
					</Link>
				</div>
			</div>
		</header>
	);
}

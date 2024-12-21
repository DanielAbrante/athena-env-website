import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Features } from "@site/src/view/Features";
import Layout from "@theme/Layout";
import { Header } from "../view/Header";

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title="Home" description={`${siteConfig.tagline}`}>
			<Header />
			<main>
				<Features />
			</main>
		</Layout>
	);
}

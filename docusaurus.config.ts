import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "AthenaEnv",
	tagline: "Enhanced JavaScript environment for PlayStation 2™",
	favicon: "img/light_logo.svg",

	url: "https://athena-env.vercel.app",
	baseUrl: "/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	themes: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			({
				indexBlog: false,
				indexPages: false,
				hashed: true,
			}),
		],
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: ({ docPath }) =>
						`https://github.com/DanielAbrante/athena-env-website/tree/main/docs/${docPath}`,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "dark",
		},
		navbar: {
			title: "AthenaEnv",
			logo: {
				alt: "AthenaEnv Logo",
				src: "img/dark_logo.svg",
				srcDark: "img/light_logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Documentation",
				},
				{
					href: "https://github.com/DanielAbrante/athena-env-website",
					"arial-label": "Github repository link to athena-env website",
					position: "right",
					className: "navbar--social-icon navbar--github-link",
				},
				{
					href: "https://discord.gg/cZUH5U93US",
					"arial-label": "Discord invite to official AthenaEnv channel",
					position: "right",
					className: "navbar--social-icon navbar--discord-link",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `AthenaEnv website was created by <a href="https://github.com/DanielAbrante" target='_blank'>Daniel Abrante</a> | © ${new Date().getFullYear()}`,
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Getting Started",
							to: "/docs/intro",
						},
						{
							label: "Modules",
							to: "/docs/modules",
						},
						{
							label: "Performance",
							to: "/docs/performance",
						},
						{
							label: "Contributing",
							to: "/docs/contributing",
						},
					],
				},
				{
					title: "AthenaEnv",
					items: [
						{
							href: "https://github.com/DanielSant0s/AthenaEnv",
							label: "Source",
						},
						{
							label: "Discord",
							href: "https://discord.gg/cZUH5U93US",
						},
					],
				},
				{
					title: "Website",
					items: [
						{
							label: "Source",
							href: "https://github.com/DanielAbrante/athena-env-website",
						},
					],
				},
			],
		},

		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['bash']
		},
	} satisfies Preset.ThemeConfig,
};

export default config;

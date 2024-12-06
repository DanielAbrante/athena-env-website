export type FeatureItem = {
    title: string;
    src: string;
    description: string;
};

export const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        src: '/img/features/js.svg',
        description: 'Simplified JavaScript integration for seamless development.'
    },
    {
        title: 'Fast',
        src: '/img/features/rocket.svg',
        description: 'Lightning speed powered by the QuickJS engine'
    },
    {
        title: 'Free and Open Source',
        src: '/img/features/open_source.svg',
        description: '100% free and open-source, licensed under GPL-3.0'
    },
];
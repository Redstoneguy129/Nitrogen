/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nitrogen UI',
  tagline: 'Beautiful Front-End Components Kit using Tailwind CSS for React and Vue.',
  url: 'https://NitrogenUI.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Redstoneguy129', // Usually your GitHub org/user name.
  projectName: 'NitrogenUI', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nitrogen UI',
      logo: {
        alt: 'Nitrogen UI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog/',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/Redstoneguy129/NitrogenUI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'React',
              to: 'docs/react/button',
            },
            {
              label: 'Vue',
              to: 'docs/vue/button',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/nitrogenui',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Redstoneguy129/NitrogenUI',
            },
          ],
        },
      ],
      copyright: `Created with ❤ by <a href="https://github.com/Redstoneguy129" target="_blank">Redstoneguy129</a> | Copyright © ${new Date().getFullYear()} Nitrogen UI.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Redstoneguy129/NitrogenUI/docs/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Redstoneguy129/NitrogenUI/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

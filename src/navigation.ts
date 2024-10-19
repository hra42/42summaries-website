import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'App',
      links: [
        {
          text: 'Short Overview',
          href: getPermalink('/#short-overview'),
        },
        {
          text: 'Features',
          href: getPermalink('/#42summaries-features'),
        },
        {
          text: 'Get Started',
          href: getPermalink('/#get-started'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
      ],
    },
    {
      text: 'About Me',
      links: [
        {
          text: 'Who I am',
          href: getPermalink('/about-us/about'),
        },
        {
          text: 'Contact Me',
          href: getPermalink('/about-us/contact'),
        },
        {
          text: 'My Mission',
          href: getPermalink('/about-us/our-mission'),
        },
        {
          text: 'Privacy',
          href: getPermalink('/about-us/privacy'),
        },
        {
          text: 'Imprint',
          href: getPermalink('/about-us/imprint'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://apps.apple.com/de/app/42summaries/id6736508972?l=en-GB&mt=12', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/about-us/imprint') },
    { text: 'Privacy Policy', href: getPermalink('/about-us/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/hra42/42Summaries' },
    { ariaLabel: 'AppStore', icon: 'tabler:brand-appstore', href: 'https://apps.apple.com/de/app/42summaries/id6736508972?l=en-GB&mt=12' },
    { ariaLabel: 'Testflight', icon: 'tabler:test-pipe', href: 'https://testflight.apple.com/join/yP2NuC4V' },
    { ariaLabel: 'Notion', icon: 'tabler:brand-notion', href: 'https://42summaries.notion.site' },
  ],
};

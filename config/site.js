import { type } from 'os';

export const siteConfig = {
  name: 'Next.js + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  pageRoutes: [
    {
      label: 'Home',
      href: '/',
      type: 1,
    },
    {
      label: 'About Us',
      href: '/about',
      type: 1,
    },

    {
      label: 'Programs',
      href: '/programs',
      type: 1,
    },
    // {
    //   label: 'Get Involve',
    //   href: '/involve',
    //   type: 1,
    // },
    {
      label: 'Resource',
      href: '/resource',
      type: 1,
    },

    // {
    //   label: 'Services',
    //   href: '/services',
    //   type: 1,
    // },
    // {
    //   label: 'Music Distribution',
    //   href: '/distribute-your-music',
    //   type: 1,
    // },
    // {
    //   label: 'Pricing',
    //   href: '/pricing',
    // },
    {
      label: 'Contact',
      href: '/contact',
      type: 1,
    },
    {
      label: 'Digital stores',
      href: '/digital-store',
      type: 2,
    },
    {
      label: 'Management rights',
      href: '/rights-management/',
      type: 2,
    },
    {
      label: 'Youtube/Facebook Monetization',
      href: '/monetization',
      type: 2,
    },
    {
      label: 'Publishing',
      href: '/publishing',
      type: 2,
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};

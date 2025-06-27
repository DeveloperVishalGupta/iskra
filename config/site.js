export const siteConfig = {
  name: 'Next.js + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  pageRoutes: [
    {
      label: 'Home',
      href: '/',
      type: 0,
    },
    {
      label: 'About Us',
      href: '/',
      submenus: [
        { label: 'Board', href: '/', type: 0 },
        { label: 'Leadership', href: '/', type: 0 },
        { label: 'Partners', href: '/', type: 0 },
        { label: 'Teaching at the right level', href: '/', type: 0 },
        { label: 'Awards & Recognition', href: '/', type: 0 },
        { label: 'Media & Publications', href: '/', type: 0 },
        { label: 'Legal & Financial Information', href: '/', type: 0 },
      ],
      type: 0,
    },
    {
      label: 'Programs',
      href: '/',
      submenus: [
        {
          label: 'Education',
          href: '/',
          type: 0,
          childSubMenu: [
            { label: 'Hamara Gaon', href: '/', type: 0 },
            { label: 'Early Childhood Education', href: '/', type: 0 },
            { label: 'Inclusive Education (ENABLE)', href: '/', type: 0 },
            { label: 'Elementary', href: '/', type: 0 },
            { label: 'Second Chance', href: '/', type: 0 },
            { label: 'Digital Initiatives', href: '/', type: 0 },
          ],
        },
        { label: 'Vocational Training', href: '/', type: 0 },
        { label: 'Annual Status of Education Report', href: '/', type: 0 },
      ],
      type: 0,
    },
    {
      label: 'Get Involved',
      href: '/',
      submenus: [
        { label: 'Donate', href: '/', type: 0 },
        { label: 'Internships', href: '/', type: 0 },
      ],
      type: 0,
    },
    {
      label: 'Resources',
      href: '/',
      submenus: [
        { label: 'Pratham Digital', href: '/', type: 0 },
        { label: 'Stories of Change', href: '/', type: 0 },
        {
          label: 'Campaigns',
          href: '/',
          type: 0,
          childSubMenu: [
            { label: 'CAMaL Ka Camp 2025', href: '/', type: 0 },
            { label: '/BeAnInfluencer', href: '/', type: 0 },
            { label: 'IAmPratham', href: '/', type: 0 },
            { label: '/ShuruaatAapse', href: '/', type: 0 },
          ],
        },
        { label: 'Publications', href: '/', type: 0 },
        { label: 'Annual Reports', href: '/', type: 0 },
      ],
      type: 0,
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 0,
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

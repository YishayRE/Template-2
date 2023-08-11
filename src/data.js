import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Landing',
      links: [
        {
          text: 'Sass',
          href: getPermalink('#'),
        },
        {
          text: 'Startup',
          href: getPermalink('#'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Pricing',
          href: '#',
        },
        {
          text: 'About us',
          href: '#',
        },
        {
          text: 'Contact',
          href: '#',
        },
        {
          text: 'Terminos y condiciones',
          href: getPermalink('/terms'),
        },
        {
          text: 'Políticas de privacidad',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: 'button', text: 'Visit me', href: 'https://github.com/YishayRE' }],
};

export const footerData = {
  links: [
    {
      title: 'Producto',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Compañia',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y condiciones', href: getPermalink('/terms') },
    { text: 'Políticas de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-twitter', href: 'https://twitter.com/HidalgoZem53346' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/destiladozempoala/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/destiladozempoala/' },
    /*{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },*/
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@destiladozempoala' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm"></span>
    Made by <a class="text-primary hover:underline" href="https://github.com/YishayRE/"> YishayJS </a> · All rights reserved.
  `,
};

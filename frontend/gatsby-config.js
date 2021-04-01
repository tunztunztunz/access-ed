require('dotenv').config();

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.accessednw.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'AccessEd',
    description:
      'Tutoring and Private Instruction. Designed with your student at the center to assist them with accessing and navigating their education all while developing the skills they will carry far beyond the walls of a classroom.',
    keywords:
      'education, tutoring, academic coaching, academic tutoring Portland, Tutoring Washington, online tutoring, in-person tutoring, accessEd, access education, tutoring northwest, tutoring portland',
    siteUrl,
    author: {
      name: 'Dustin Simensen',
      url: 'https://www.dustinsimensen.com',
      email: 'dustinsimensen@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: '_',
        debug: false
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.accessednw.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AccessEd`,
        short_name: `AccessEd`,
        description:
          'Tutoring and Private Instruction. Designed with your student at the center to assist them with accessing and navigating their education all while developing the skills they will carry far beyond the walls of a classroom.',
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#276EF1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        // eslint-disable-next-line no-undef
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
  ],
};

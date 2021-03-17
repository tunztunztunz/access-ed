require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'AccessEd',
    description:
      'Tutoring and Private Instruction. Designed with your student at the center to assist them with accessing and navigating their education all while developing the skills they will carry far beyond the walls of a classroom.',
    keywords:
      'education, tutoring, academic coaching, academic tutoring Portland, Tutoring Washington, online tutoring, in-person tutoring, accessEd, access education, tutoring northwest, tutoring portland',
    siteUrl: 'https://relaxed-bardeen-92bf66.netlify.app/',
    author: {
      name: 'Dustin Simensen',
      url: 'https://www.dustinsimensen.com',
      email: 'dustinsimensen@gmail.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: '_',
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
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://relaxed-bardeen-92bf66.netlify.app/',
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AccessEd`,
        short_name: `AccessEd`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#276EF1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
  ],
};

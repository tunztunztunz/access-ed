require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'AccessEd',
    description: 'A website for Access Education Northwest',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
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
        // overlayDrafts: true,
        // watchMode: true,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};

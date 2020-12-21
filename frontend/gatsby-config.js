module.exports = {
  siteMetadata: {
    title: 'Access Ed',
    description: 'A website for Access Education Northwest',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: '',
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
        // Disable dev debug mode, enabled by default
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1h2wphxv',
        dataset: 'production',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};

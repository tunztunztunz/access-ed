import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ page }: { page?: any }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            url
            email
          }
          keywords
          siteUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.siteUrl === '' && typeof window !== 'undefined') {
    defaults.siteUrl = window.location.origin;
  }

  if (defaults.siteUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const title = page?.title || defaults.title;
  const description = page?.description || defaults.description;
  const url = new URL(page?.path || '', defaults.siteUrl);
  const image = page?.image ? new URL(page?.image, defaults?.siteUrl) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      titleTemplate={`%s | ${title}`}
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default SEO;

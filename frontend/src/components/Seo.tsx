import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ page }: { page?: any }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
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

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url,
    mainEntityOfPage: url,
    description,
    name: title,
    author: {
      '@type': 'Person',
      name: defaults.author.name,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: defaults.author.name,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: defaults.author.name,
    },
    publisher: {
      '@type': 'Person',
      name: defaults.author.name,
    },
    datePublished: '2019-01-18T10:30:00+01:00',
    dateModified: data.site.buildTime,
  };

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': url,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="uM3011lS_1g38rj1qElMcYd1RvE5CqB3yik3VknxJsM"
      />
      titleTemplate={`%s | ${title}`}
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
};

export default SEO;

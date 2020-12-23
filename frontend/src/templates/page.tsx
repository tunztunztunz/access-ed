import React from 'react';
import Container from '../components/Container';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
  };
}

const PageTemplate = ({ data }: PageTemplateProps) => (
  <Container>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>This is another page, hombre!</p>
  </Container>
);

export default PageTemplate;

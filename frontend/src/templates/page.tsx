import React from 'react';
// import { graphql } from 'gatsby';

import Container from '../components/Container';
import IndexLayout from '../layouts';

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
  <IndexLayout>
    <Container>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This is another page, hombre!</p>
    </Container>
  </IndexLayout>
);

export default PageTemplate;

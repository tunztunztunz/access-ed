import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import LayoutRoot from '../components/LayoutRoot';
import Footer from '../components/Footer';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

interface IndexProps {
  children: React.ReactNode;
}

const IndexLayout = ({ children }: IndexProps) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return (
    <div>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          />
          <LayoutRoot>
            <Header title={data.site.siteMetadata.title} />
            <LayoutMain>{children}</LayoutMain>
            <Footer />
          </LayoutRoot>
        </Centered>
      </BaseProvider>
    </div>
  );
};

export default IndexLayout;

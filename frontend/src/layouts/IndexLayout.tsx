import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LightTheme, BaseProvider, styled } from 'baseui';
import SEO from '../components/Seo';
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
        sanityLandingPage {
          hero {
            heroImage {
              asset {
                fixed(height: 1200, width: 1200) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    `
  );
  const image = data.sanityLandingPage.hero.heroImage.asset.fixed;
  console.log(image);
  return (
    <BaseProvider theme={LightTheme}>
      <Centered>
        <SEO />

        <LayoutRoot>
          <Header title={data.site.siteMetadata.title} />
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </LayoutRoot>
      </Centered>
    </BaseProvider>
  );
};

export default IndexLayout;

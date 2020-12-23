import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';

import IndexLayout from '../layouts';
import SectionHeader from '../components/Landing/SectionHeader';
import Quote from '../components/Quote';
import Hero from '../components/Hero';
import HelpSection from '../components/Landing/HelpSection';
import ServiceCardSection from '../components/Landing/ServiceCardSection';
import SimpleSection from '../components/SimpleSection';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLandingPage {
          hero {
            heroHeader
            heroText
            heroImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          contactText
          contactImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          quote {
            quoteText
            quoteUrl
            quoteCitation
          }
        }
      }
    `
  );
  const heroText = data.sanityLandingPage.hero.heroText;
  const heroHeader = data.sanityLandingPage.hero.heroHeader;
  const heroImage = data.sanityLandingPage.hero.heroImage.asset.fluid;

  const contactText = data.sanityLandingPage.contactText;
  const contactImage = data.sanityLandingPage.contactImage.asset.fluid;

  return (
    <IndexLayout>
      <FlexGrid
        flexGridColumnCount={[1]}
        maxWidth="1200px"
        margin={['0', '0 1rem', '0 2rem', '0 2rem']}
        flexGridRowGap={['scale800', 'scale800', 'scale1600']}
        // marginBottom="scale1600"w
      >
        <FlexGridItem>
          <Hero header={heroHeader} text={heroText} image={heroImage} />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'What We Do'} />
        </FlexGridItem>
        <FlexGridItem>
          <ServiceCardSection />
        </FlexGridItem>
        <FlexGridItem>
          <Quote
            quote={data.sanityLandingPage.quote.quoteText}
            quoteAuthor={data.sanityLandingPage.quote.quoteCitation}
            quoteLink={data.sanityLandingPage.quote.quoteUrl}
          />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'How We Can Help'} />
        </FlexGridItem>
        <FlexGridItem>
          <HelpSection />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'Get In Touch'} />
        </FlexGridItem>
        <FlexGridItem>
          <SimpleSection text={contactText} image={contactImage} button={'Contact Us'} isReversed />
        </FlexGridItem>
      </FlexGrid>
    </IndexLayout>
  );
};

export default IndexPage;

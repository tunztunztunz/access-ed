import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';

import SectionHeader from '../components/SectionHeader';
import Quote from '../components/Quote';
import Hero from '../components/Hero';
import HelpSection from '../components/Landing/HelpSection';
import ServiceCardSection from '../components/Landing/ServiceCardSection';
import SimpleSection from '../components/SimpleSection';
import Promotion from '../components/Promotion';

const BlockContent = require('@sanity/block-content-to-react');

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
          callToAction {
            sectionHeader
            _rawSectionText(resolveReferences: { maxDepth: 1 })
            sectionImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          quote {
            quoteText
            quoteUrl
            quoteCitation
          }
          promotion {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            promotionHeader
            promotionText
          }
        }
      }
    `
  );
  const { heroText } = data.sanityLandingPage.hero;
  const { heroHeader } = data.sanityLandingPage.hero;
  const heroImage = data.sanityLandingPage.hero.heroImage.asset.fluid;
  console.log(data.sanityLandingPage.promotion);
  const { promotionHeader, promotionText } = data.sanityLandingPage.promotion;
  const promotionImage = data.sanityLandingPage.promotion.image.asset.fluid;

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
      // marginBottom="scale1600"w
    >
      <FlexGridItem>
        <Hero
          header={heroHeader}
          text={heroText}
          image={heroImage}
          button
          buttonLink="/about"
        />
      </FlexGridItem>
      {data.sanityLandingPage.promotion && (
        <FlexGridItem>
          <Promotion
            image={promotionImage}
            header={promotionHeader}
            text={promotionText}
            button
            buttonLink="/about"
          />
        </FlexGridItem>
      )}
      <FlexGridItem>
        <SectionHeader title="What We Do" />
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
        <SectionHeader title="How We Can Help" />
      </FlexGridItem>
      <FlexGridItem>
        <HelpSection />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Get In Touch" />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          isReversed
          header={data.sanityLandingPage.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={data.sanityLandingPage.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={data.sanityLandingPage.callToAction.sectionImage.asset.fluid}
          button="Contact Us"
          buttonLink="/contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default IndexPage;

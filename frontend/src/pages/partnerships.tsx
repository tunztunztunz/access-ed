import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SimpleSection from '../components/SimpleSection';

const BlockContent = require('@sanity/block-content-to-react');

interface SectionProps {
  sectionHeader: string;
  link: string;
  _rawSectionText: string[];
  sectionImage: {
    asset: {
      fluid: FluidObject[];
    };
  };
}

const Testimonials = () => {
  const data = useStaticQuery(
    graphql`
      query PartnershipsPageQuery {
        sanityPartnershipsPage {
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
          partners {
            sectionHeader
            _rawSectionText
            link
            sectionImage {
              asset {
                fluid(maxHeight: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          callToAction {
            _rawSectionText
            sectionHeader
            sectionImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  );
  const { heroHeader } = data.sanityPartnershipsPage.hero;
  const { heroText } = data.sanityPartnershipsPage.hero;
  const heroImage = data.sanityPartnershipsPage.hero.heroImage.asset.fluid;

  const { partners } = data.sanityPartnershipsPage;

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem>
        <Hero header={heroHeader} text={heroText} image={heroImage} />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Our Partners" />
      </FlexGridItem>
      {partners.map((section, index) => (
        <FlexGridItem key={index}>
          <SimpleSection
            isReversed={index % 2 === 0}
            header={section.sectionHeader}
            text={
              <BlockContent
                blocks={section._rawSectionText}
                renderContainerOnSingleChild
              />
            }
            image={section.sectionImage.asset.fluid}
            button="Check Them Out!"
            externalLink={section.link}
          />
          {console.log(section.link)}
        </FlexGridItem>
      ))}
      <FlexGridItem>
        <SectionHeader
          title={data.sanityPartnershipsPage.callToAction.sectionHeader}
        />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          isReversed
          text={
            <BlockContent
              blocks={data.sanityPartnershipsPage.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={
            data.sanityPartnershipsPage.callToAction.sectionImage.asset.fluid
          }
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Testimonials;

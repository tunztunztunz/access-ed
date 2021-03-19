import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SimpleSection from '../components/SimpleSection';
import ImageObjectInterface from '../components/types/imageObject';

const BlockContent = require('@sanity/block-content-to-react');

interface SectionProps {
  sectionHeader: string;
  link: string;
  _rawSectionText: string[];
  sectionImage: {
    asset: ImageObjectInterface;
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
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
              }
            }
          }
          partners {
            sectionHeader
            _rawSectionText
            link
            sectionImage {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
              }
            }
          }
          callToAction {
            _rawSectionText
            sectionHeader
            sectionImage {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
              }
            }
          }
        }
      }
    `
  );
  const { heroHeader } = data.sanityPartnershipsPage.hero;
  const { heroText } = data.sanityPartnershipsPage.hero;
  const heroImage = data.sanityPartnershipsPage.hero.heroImage.asset;

  const { partners } = data.sanityPartnershipsPage;

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem>
        <Hero header={heroHeader} text={heroText} image={heroImage} />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Our Partners" />
      </FlexGridItem>
      {partners.map((section: SectionProps, index: number) => (
        <FlexGridItem key={index}>
          <SimpleSection
            isReversed={index % 2 === 0}
            header={section.sectionHeader}
            text={<BlockContent blocks={section._rawSectionText} renderContainerOnSingleChild />}
            image={section.sectionImage.asset}
            button="Check Them Out!"
            externalLink={section.link}
          />
        </FlexGridItem>
      ))}
      <FlexGridItem>
        <SectionHeader title={data.sanityPartnershipsPage.callToAction.sectionHeader} />
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
          image={data.sanityPartnershipsPage.callToAction.sectionImage.asset}
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Testimonials;

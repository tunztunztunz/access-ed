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
  _rawSectionText: string[];
  sectionImage: ImageObjectInterface;
}

const Testimonials = () => {
  const data = useStaticQuery(
    graphql`
      query TestimonialsPageQuery {
        sanityTestimonialsPage {
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
          sections {
            sectionHeader
            _rawSectionText
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
  const { heroHeader } = data.sanityTestimonialsPage.hero;
  const { heroText } = data.sanityTestimonialsPage.hero;
  const heroImage = data.sanityTestimonialsPage.hero.heroImage.asset;

  const testimonials: SectionProps[] = data.sanityTestimonialsPage.sections;

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridColumnGap="scale1200"
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem>
        <Hero header={heroHeader} text={heroText} image={heroImage} />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Academic Coaching" />
      </FlexGridItem>
      {testimonials.map((section, index) => (
        <FlexGridItem key={index}>
          <SimpleSection
            isReversed={index % 2 === 0}
            header={section.sectionHeader}
            text={<BlockContent blocks={section._rawSectionText} renderContainerOnSingleChild />}
            image={section.sectionImage.asset}
            breakAtTablets
          />
        </FlexGridItem>
      ))}
      <FlexGridItem>
        <SectionHeader title={data.sanityTestimonialsPage.callToAction.sectionHeader} />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          text={
            <BlockContent
              blocks={data.sanityTestimonialsPage.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={data.sanityTestimonialsPage.callToAction.sectionImage.asset}
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Testimonials;

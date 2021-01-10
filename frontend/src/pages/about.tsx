import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const BlockContent = require('@sanity/block-content-to-react');

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SimpleSection from '../components/SimpleSection';
import { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

interface SectionProps {
  sectionHeader: string;
  _rawSectionText: string[];
  sectionImage: {
    asset: {
      fluid: FluidObject[];
    };
  };
}

const About = () => {
  const data = useStaticQuery(
    graphql`
      query AboutPageQuery {
        sanityAboutPage {
          hero {
            heroText
            heroHeader
            heroImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          _rawSections(resolveReferences: { maxDepth: 1 })
          sections {
            sectionImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawSectionText
            sectionHeader
          }
          aboutHeader
          aboutImageCaption
          _rawAboutText(resolveReferences: { maxDepth: 1 })
          aboutImage {
            asset {
              fluid(maxWidth: 400, maxHeight: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          callToAction {
            sectionHeader
            sectionImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawSectionText
          }
        }
      }
    `
  );
  const heroHeader = data.sanityAboutPage.hero.heroHeader;
  const heroText = data.sanityAboutPage.hero.heroText;
  const heroImage = data.sanityAboutPage.hero.heroImage.asset.fluid;

  const coachingSections: SectionProps[] = data.sanityAboutPage.sections;

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
        <SectionHeader title={'Academic Coaching'} />
      </FlexGridItem>
      {coachingSections.map((section, index) => (
        <FlexGridItem key={index}>
          <SimpleSection
            isReversed={index % 2 === 0}
            header={section.sectionHeader}
            text={
              <BlockContent blocks={section._rawSectionText} renderContainerOnSingleChild={true} />
            }
            image={section.sectionImage.asset.fluid}
          />
        </FlexGridItem>
      ))}
      <FlexGridItem>
        <SectionHeader title={'About Me'} />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          header={data.sanityAboutPage.aboutHeader}
          text={
            <BlockContent
              blocks={data.sanityAboutPage._rawAboutText}
              renderContainerOnSingleChild={true}
            />
          }
          image={data.sanityAboutPage.aboutImage.asset.fluid}
          caption={data.sanityAboutPage.aboutImageCaption}
        />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title={'Get In Touch'} />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          isReversed
          header={data.sanityAboutPage.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={data.sanityAboutPage.callToAction._rawSectionText}
              renderContainerOnSingleChild={true}
            />
          }
          image={data.sanityAboutPage.callToAction.sectionImage.asset.fluid}
          button={'Contact Us'}
          buttonLink={'/contact'}
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default About;

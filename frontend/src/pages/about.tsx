import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
              }
            }
          }
          _rawSections(resolveReferences: { maxDepth: 1 })
          sections {
            sectionImage {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
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
              url
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
            }
          }
          callToAction {
            sectionHeader
            sectionImage {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
              }
            }
            _rawSectionText
          }
        }
      }
    `
  );
  const { heroHeader } = data.sanityAboutPage.hero;
  const { heroText } = data.sanityAboutPage.hero;
  const heroImage = data.sanityAboutPage.hero.heroImage.asset;

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
        <SectionHeader title="Academic Coaching" />
      </FlexGridItem>
      {coachingSections.map((section, index) => (
        <FlexGridItem key={index}>
          <SimpleSection
            isReversed={index % 2 === 0}
            header={section.sectionHeader}
            text={<BlockContent blocks={section._rawSectionText} renderContainerOnSingleChild />}
            image={section.sectionImage.asset}
          />
        </FlexGridItem>
      ))}
      <FlexGridItem>
        <SectionHeader title="About Me" />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          header={data.sanityAboutPage.aboutHeader}
          text={
            <BlockContent
              blocks={data.sanityAboutPage._rawAboutText}
              renderContainerOnSingleChild
            />
          }
          image={data.sanityAboutPage.aboutImage.asset}
          caption={data.sanityAboutPage.aboutImageCaption}
        />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Get In Touch" />
      </FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          isReversed
          header={data.sanityAboutPage.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={data.sanityAboutPage.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={data.sanityAboutPage.callToAction.sectionImage.asset}
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default About;

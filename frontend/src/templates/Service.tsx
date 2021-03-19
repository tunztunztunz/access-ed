import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
// import { FluidObject } from 'gatsby-image';

import Hero from '../components/Hero';
import SimpleSection from '../components/SimpleSection';
import PriceCardSection from '../components/Service/PriceCardSection';
import ImageObjectInterface from '../components/types/imageObject';

const BlockContent = require('@sanity/block-content-to-react');

export interface A {
  __typename: string;
  header: string;
  _rawText?: string[];
  priceCards: [
    {
      title: string;
      serviceDetails: string[];
      price: string;
      hours: string;
    }
  ];
}

interface B {
  __typename: string;
  sectionHeader?: string;
  _rawSectionText?: string[];
  sectionImage?: ImageObjectInterface;
}
export interface ServiceProps {
  data: {
    service: {
      slug: {
        current: string;
      };
      title: string;
      priceModifier: number;
      message: string;
      _rawDisclaimerText: string[];
      hero: {
        heroHeader: string;
        heroText: string;
        heroImage: ImageObjectInterface;
      };
      section: [A | B];
      callToAction: {
        _rawSectionText: string[];
        sectionHeader: string;
        sectionImage: ImageObjectInterface;
      };
    };
  };
}

// The following functions make sure Typescript knows what type to use
function isSanityTextAndImageSection(section: any): section is B {
  return section?.__typename === 'SanityTextAndImageSection';
}
function isSanityServicePageSection(section: any): section is A {
  return section?.__typename === 'SanityServicePageSection';
}

const Service = ({ data }: ServiceProps) => {
  const { service } = data;
  console.log(service);
  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale1200', 'scale1200', 'scale2400']}
    >
      <FlexGridItem>
        <Hero
          header={service.hero.heroHeader}
          image={service.hero.heroImage.asset}
          text={service.hero.heroText}
        />
      </FlexGridItem>
      {/* Conditionally renders section types */}
      {service.section.map((section, index) => {
        // Will render image Text Section
        if (isSanityTextAndImageSection(section)) {
          return (
            <FlexGridItem key={index}>
              <SimpleSection
                isReversed={index % 2 === 0}
                header={section.sectionHeader}
                text={
                  <BlockContent blocks={section._rawSectionText} renderContainerOnSingleChild />
                }
                image={section?.sectionImage?.asset}
              />
            </FlexGridItem>
          );
        }
        // Will render Service Page Section i.e. price cards
        if (isSanityServicePageSection(section)) {
          return (
            <PriceCardSection
              slug={service.slug}
              section={section}
              priceModifier={service.priceModifier}
              message={service.message}
              key={index}
            />
          );
        }
        // If, for some reason, it's neither type it will return nothing
        return null;
      })}
      {/* If the content author passes in raw text it will render the text */}
      {service._rawDisclaimerText ? (
        <FlexGridItem marginTop={['0', '0', '-4rem']}>
          <SimpleSection
            background
            centered
            padded
            text={<BlockContent blocks={service._rawDisclaimerText} renderContainerOnSingleChild />}
          />
        </FlexGridItem>
      ) : (
        // Else it renders an string
        ''
      )}
      <FlexGridItem>
        <SimpleSection
          header={service.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={service.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={service.callToAction.sectionImage.asset}
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export const query = graphql`
  query($slug: String!) {
    service: sanityServicePage(slug: { current: { eq: $slug } }) {
      title
      message
      priceModifier
      slug {
        current
      }
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
      section {
        # We have to use inline fragments because section can be different types
        ... on SanityServicePageSection {
          __typename
          header
          _rawText(resolveReferences: { maxDepth: 1 })
          priceCards {
            hours
            title
            serviceDetails
            price
          }
        }
        ... on SanityTextAndImageSection {
          sectionImage {
            asset {
              url
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
            }
          }
          __typename
          _rawSectionText
          sectionHeader
        }
      }
      _rawDisclaimerText(resolveReferences: { maxDepth: 1 })
      callToAction {
        _rawSectionText(resolveReferences: { maxDepth: 1 })
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
`;
export default Service;

import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServicePriceCard from '../components/Services/ServicePriceCard';
import SimpleSection from '../components/SimpleSection';
import priceCardSection from '../components/Service/PriceCardSection';
import PriceCardSection from '../components/Service/PriceCardSection';

const BlockContent = require('@sanity/block-content-to-react');

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
        heroImage: {
          asset: {
            fluid: FluidObject[];
          };
        };
      };
      section: [
        {
          __typename: string;
          header?: string;
          _rawText?: string[];
          priceCards?: [
            {
              title?: string;
              serviceDetails?: string[];
              price?: string;
              hours?: string;
            }
          ];
        },
        {
          sectionHeader?: string;
          _rawSectionText?: string[];
          sectionImage?: {
            asset?: {
              fluid?: FluidObject[];
            };
          };
        }
      ];
      callToAction: {
        _rawSectionText: string[];
        sectionHeader: string;
        sectionImage: {
          asset: {
            fluid: FluidObject[];
          };
        };
      };
    };
  };
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
          image={service.hero.heroImage.asset.fluid}
          text={service.hero.heroText}
        />
      </FlexGridItem>
      {service.section.map((section, index) => {
        if (section?.__typename === 'SanityTextAndImageSection') {
          return (
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
              />
            </FlexGridItem>
          );
        }
        if (section?.__typename !== 'SanityTextAndImageSection') {
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
        return null;
      })}
      {service._rawDisclaimerText ? (
        <FlexGridItem marginTop={['0', '0', '-4rem']}>
          <SimpleSection
            background
            centered
            padded
            text={
              <BlockContent
                blocks={service._rawDisclaimerText}
                renderContainerOnSingleChild
              />
            }
          />
        </FlexGridItem>
      ) : (
        <FlexGridItem />
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
          image={service.callToAction.sectionImage.asset.fluid}
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
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      section {
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
              fluid {
                ...GatsbySanityImageFluid
              }
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
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
export default Service;

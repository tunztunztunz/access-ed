import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServicePriceCard from '../components/Services/ServicePriceCard';
import SimpleSection from '../components/SimpleSection';

const BlockContent = require('@sanity/block-content-to-react');

interface ServiceProps {
  data: {
    service: {
      slug: {
        current: string;
      }
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
          header: string;
          _rawText: string[];
          priceCards: [
            {
              title: string;
              serviceDetails: string[];
              price: string;
              hours: string;
            }
          ];
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
  console.log(service)
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
        const sectionDescription = section._rawText ? (
          <BlockContent
            blocks={section._rawText}
            renderContainerOnSingleChild
          />
        ) : (
          ''
        );
        const sectionLength = section.priceCards.length;
        return (
          <FlexGridItem key={index} marginBottom="10rem">
            <FlexGridItem>
              <SectionHeader
                title={section.header}
                description={sectionDescription}
              />
            </FlexGridItem>
            <FlexGridItem>
              <FlexGrid
                flexGridColumnCount={[1, 1, 2, sectionLength]}
                flexDirection="row"
                flexGridColumnGap={['scale1200']}
                flexGridRowGap={[
                  'scale1600',
                  'scale1600',
                  'scale1600',
                  'scale800',
                ]}
                marginBottom="scale1600"
              >
                {/* eslint-disable-next-line no-shadow */}
                {section.priceCards.map((card, index) => (
                  <FlexGridItem
                    key={index}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <ServicePriceCard
                      key={index}
                      hours={card.hours}
                      title={card.title}
                      price={card.price}
                      discount={service.priceModifier}
                      message={service.message}
                      serviceDetails={card.serviceDetails}
                      state={service.slug.current}
                    />
                  </FlexGridItem>
                ))}
              </FlexGrid>
            </FlexGridItem>
          </FlexGridItem>
        );
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
        header
        _rawText(resolveReferences: { maxDepth: 1 })
        priceCards {
          hours
          title
          serviceDetails
          price
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

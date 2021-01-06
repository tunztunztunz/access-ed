import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
const BlockContent = require('@sanity/block-content-to-react');

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServicePriceCard from '../components/Services/ServicePriceCard';
import SimpleSection from '../components/SimpleSection';

interface ServiceProps {
  data: {
    service: {
      title: string;
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
  const service = data.service;
  console.log(service._rawDisclaimerText);

  service.section.forEach(section => console.log(section.priceCards));
  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem>
        <Hero
          header={service.hero.heroHeader}
          image={service.hero.heroImage.asset.fluid}
          text={service.hero.heroText}
        />
      </FlexGridItem>
      {service.section.map((section, index) => {
        const sectionLength = section.priceCards.length;
        return (
          <FlexGridItem key={index}>
            <FlexGridItem>
              <SectionHeader
                title={section.header}
                description={
                  <BlockContent blocks={section._rawText} renderContainerOnSingleChild={true} />
                }
              />
            </FlexGridItem>
            <FlexGridItem>
              <FlexGrid
                flexGridColumnCount={[1, 1, 1, sectionLength]}
                flexDirection="row"
                flexGridColumnGap={['scale800']}
              >
                {section.priceCards.map((card, index) => (
                  <FlexGridItem
                    key={index}
                    display="flex"
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <ServicePriceCard
                      key={index}
                      hours={card.hours}
                      title={card.title}
                      price={card.price}
                      serviceDetails={card.serviceDetails}
                    />
                  </FlexGridItem>
                ))}
              </FlexGrid>
            </FlexGridItem>
          </FlexGridItem>
        );
      })}
      {service._rawDisclaimerText ? (
        <FlexGridItem>
          <SimpleSection
            background
            centered
            padded
            text={
              <BlockContent
                blocks={service._rawDisclaimerText}
                renderContainerOnSingleChild={true}
              />
            }
          />
        </FlexGridItem>
      ) : (
        <FlexGridItem></FlexGridItem>
      )}
      <FlexGridItem>
        <SimpleSection
          header={service.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={service.callToAction._rawSectionText}
              renderContainerOnSingleChild={true}
            />
          }
          image={service.callToAction.sectionImage.asset.fluid}
          button={'Contact Us'}
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export const query = graphql`
  query($slug: String!) {
    service: sanityServicePage(slug: { current: { eq: $slug } }) {
      title
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

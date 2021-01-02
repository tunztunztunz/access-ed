import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
const BlockContent = require('@sanity/block-content-to-react');

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServicePriceCard from '../components/Services/ServicePriceCard';

interface ServiceProps {
  data: {
    service: {
      title: string;
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
              hours: number;
            }
          ];
        }
      ];
    };
  };
}

const Service = ({ data }: ServiceProps) => {
  const service = data.service;

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
      {service.section.map((section, index) => (
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
            {section.priceCards.map((card, index) => (
              <ServicePriceCard
                key={index}
                hours={card.hours}
                title={card.title}
                price={card.price}
                serviceDetails={card.serviceDetails}
              />
            ))}
          </FlexGridItem>
        </FlexGridItem>
      ))}
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
          title
          serviceDetails
          price
          hours
        }
      }
    }
  }
`;
export default Service;

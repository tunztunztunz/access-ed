import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import ServiceCard from './ServiceCard';

interface serviceCardProps {
  title: string;
  description: string;
  image: {
    asset: GatsbyImageFluidProps;
  };
}

const ServiceCardSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLandingPage {
          serviceCards {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            description
            title
          }
        }
      }
    `
  );

  const { serviceCards } = data.sanityLandingPage;
  return (
    <FlexGrid flexGridColumnCount={[1, 1, 1, 3]} flexGridColumnGap="scale2400">
      {serviceCards.map((card, index) => (
        <FlexGridItem key={index}>
          <ServiceCard
            svg={<Img fluid={card.image.asset.fluid} />}
            title={card.title}
            description={card.description}
          />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
};
export default ServiceCardSection;

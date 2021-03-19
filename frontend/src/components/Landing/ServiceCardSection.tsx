import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import ServiceCard from './ServiceCard';
import { Image } from '../Image';
import ImageObjectInterface from '../types/imageObject';

interface serviceCardProps {
  title: string;
  description: string;
  image: {
    asset: ImageObjectInterface;
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
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
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
      {serviceCards.map((card: serviceCardProps, index: number) => {
        return (
          <FlexGridItem key={index}>
            <ServiceCard
              svg={<Image imageObject={card.image.asset} />}
              title={card.title}
              description={card.description}
            />
          </FlexGridItem>
        );
      })}
    </FlexGrid>
  );
};
export default ServiceCardSection;

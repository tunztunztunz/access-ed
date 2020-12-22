import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import ServiceCard from './ServiceCard';

const ServiceCardSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          serviceCardOne {
            description
            title
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          serviceCardThree {
            description
            title
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          serviceCardTwo {
            description
            title
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const serviceCards = [
    data.sanityLanding.serviceCardOne,
    data.sanityLanding.serviceCardTwo,
    data.sanityLanding.serviceCardThree,
  ];

  console.log(serviceCards);
  return (
    <FlexGrid flexGridColumnCount={[1, 1, 3]} flexGridColumnGap={'scale2400'}>
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

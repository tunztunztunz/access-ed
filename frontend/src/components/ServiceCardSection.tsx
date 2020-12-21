import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ServiceCard from './ServiceCard';
import Idea from './svg/Idea';
import Support from './svg/Support';
import Work from './svg/Work';

const ServiceCardSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          serviceCardOne {
            description
            title
          }
          serviceCardThree {
            description
            title
          }
          serviceCardTwo {
            description
            title
          }
        }
      }
    `
  );
  return (
    <FlexGrid flexGridColumnCount={[1, 1, 3]} flexGridColumnGap={'scale2400'}>
      <FlexGridItem>
        <ServiceCard
          svg={<Idea />}
          title={data.sanityLanding.serviceCardOne.title}
          description={data.sanityLanding.serviceCardOne.description}
        />
      </FlexGridItem>
      <FlexGridItem>
        <ServiceCard
          svg={<Work />}
          title={data.sanityLanding.serviceCardTwo.title}
          description={data.sanityLanding.serviceCardTwo.description}
        />
      </FlexGridItem>
      <FlexGridItem>
        <ServiceCard
          svg={<Support />}
          title={data.sanityLanding.serviceCardThree.title}
          description={data.sanityLanding.serviceCardThree.description}
        />
      </FlexGridItem>
    </FlexGrid>
  );
};
export default ServiceCardSection;

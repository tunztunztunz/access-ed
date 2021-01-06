import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const BlockContent = require('@sanity/block-content-to-react');

import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SimpleSection from '../components/SimpleSection';
import { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import ServicesPricingRow from '../components/Services/ServicesPricingRow';

interface SectionProps {
  price: string;
  features: string[];
  hero: {
    heroHeader: string;
    heroText: string;
  };
  sectionImage: {
    asset: {
      fluid: FluidObject[];
    };
  };
  slug: {
    current: string;
  };
}

const Services = () => {
  const [css] = useStyletron();
  const data = useStaticQuery(
    graphql`
      query ServicesPageQuery {
        sanityServicesPage {
          hero {
            heroText
            heroHeader
            heroImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          callToAction {
            sectionHeader
            _rawSectionText(resolveReferences: { maxDepth: 1 })
            sectionImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          services {
            price
            features
            hero {
              heroText
              heroHeader
            }
            slug {
              current
            }
          }
        }
      }
    `
  );

  const heroHeader = data.sanityServicesPage.hero.heroHeader;
  const heroText = data.sanityServicesPage.hero.heroText;
  const heroImage = data.sanityServicesPage.hero.heroImage.asset.fluid;
  const services: SectionProps[] = data.sanityServicesPage.services;

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
        <SectionHeader title={'Think We Can Help?'} noRule={true} />
      </FlexGridItem>
      {services.map((service, index) => (
        <FlexGridItem key={index}>
          <hr
            className={css({
              content: '',
              display: 'block',
              margin: '0 auto 2rem auto',
              maxWidth: '100%',
              border: '1px solid #000',
            })}
          />

          <ServicesPricingRow
            isReversed={index % 2 === 0}
            features={service.features}
            header={service.hero.heroHeader}
            price={service.price}
            link={`/services/${service.slug.current}`}
            button={'See Our Plans'}
          />
        </FlexGridItem>
      ))}
      <FlexGridItem></FlexGridItem>
      <FlexGridItem>
        <SimpleSection
          isReversed
          header={data.sanityServicesPage.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={data.sanityServicesPage.callToAction._rawSectionText}
              renderContainerOnSingleChild={true}
            />
          }
          image={data.sanityServicesPage.callToAction.sectionImage.asset.fluid}
          button={'Contact Us'}
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Services;

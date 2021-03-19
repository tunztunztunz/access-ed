import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SimpleSection from '../components/SimpleSection';
import ServicesPricingRow from '../components/Services/ServicesPricingRow';

const BlockContent = require('@sanity/block-content-to-react');

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
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
              }
            }
          }
          callToAction {
            sectionHeader
            _rawSectionText(resolveReferences: { maxDepth: 1 })
            sectionImage {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
              }
            }
          }
          services {
            price
            priceModifier
            features
            hero {
              heroText
              heroHeader
            }
            slug {
              current
            }
          }
          promotion {
            image {
              asset {
                url
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
              }
            }
            promotionHeader
            promotionText
            link {
              ... on SanityAboutPage {
                id
                slug {
                  current
                }
              }
              ... on SanityPartnershipsPage {
                id
                slug {
                  current
                }
              }
              ... on SanityServicePage {
                id
                slug {
                  current
                }
              }
              ... on SanityServicesPage {
                id
                slug {
                  current
                }
              }
              ... on SanityTestimonialsPage {
                id
                slug {
                  current
                }
              }
            }
          }
        }
      }
    `
  );

  const { heroHeader } = data.sanityServicesPage.hero;
  const { heroText } = data.sanityServicesPage.hero;
  const heroImage = data.sanityServicesPage.hero.heroImage.asset;
  const { services } = data.sanityServicesPage;

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      margin={['0', '0 1rem', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem>
        <Hero header={heroHeader} text={heroText} image={heroImage} />
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader title="Think We Can Help?" noRule />
      </FlexGridItem>
      {services.map(
        (
          service: {
            features: string[];
            hero: { heroHeader: string | undefined };
            price: string;
            priceModifier: number;
            slug: { current: any };
          },
          index: number
        ) => (
          <FlexGridItem key={index}>
            <hr
              className={css({
                content: '',
                display: 'block',
                margin: '0 auto 2rem auto',
                maxWidth: '100%',
                border: '0.5px solid #000',
              })}
            />

            <ServicesPricingRow
              isReversed={index % 2 === 0}
              features={service.features}
              header={service.hero.heroHeader}
              price={service.price}
              discount={service.priceModifier}
              link={`services/${service.slug.current}`}
              button="See Our Plans"
            />
          </FlexGridItem>
        )
      )}
      <FlexGridItem />
      <FlexGridItem>
        <SimpleSection
          isReversed
          header={data.sanityServicesPage.callToAction.sectionHeader}
          text={
            <BlockContent
              blocks={data.sanityServicesPage.callToAction._rawSectionText}
              renderContainerOnSingleChild
            />
          }
          image={data.sanityServicesPage.callToAction.sectionImage.asset}
          button="Contact Us"
          buttonLink="contact"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Services;

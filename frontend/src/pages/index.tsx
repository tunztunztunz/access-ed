import React from 'react';
import IndexLayout from '../layouts';
import Hero from '../components/Hero';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import SectionHeader from '../components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import Quote from '../components/Quote';
import HelpSection from '../components/HelpSection';
import CallToAction from '../components/CallToAction';
import ServiceCardSection from '../components/ServiceCardSection';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          quote {
            quoteText
            quoteUrl
            quoteCitation
          }
          helpText
          contactText
          skills
        }
      }
    `
  );

  return (
    <IndexLayout>
      <FlexGrid
        flexGridColumnCount={[1]}
        maxWidth="1110px"
        margin={['0', '0 1rem', '0 2rem', '0 2rem']}
        flexGridRowGap={['scale800', 'scale800', 'scale1600']}
        // marginBottom="scale1600"w
      >
        <FlexGridItem>
          <Hero />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'What We Do'} />
        </FlexGridItem>
        <FlexGridItem>
          <ServiceCardSection />
        </FlexGridItem>
        <FlexGridItem>
          <Quote
            quote={data.sanityLanding.quote.quoteText}
            quoteAuthor={data.sanityLanding.quote.quoteCitation}
            quoteLink={data.sanityLanding.quote.quoteUrl}
          />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'How We Can Help'} />
        </FlexGridItem>
        <FlexGridItem>
          <HelpSection text={data.sanityLanding.helpText} skillsList={data.sanityLanding.skills} />
        </FlexGridItem>
        <FlexGridItem>
          <SectionHeader title={'Get In Touch'} />
        </FlexGridItem>
        <FlexGridItem>
          <CallToAction text={data.sanityLanding.contactText} />
        </FlexGridItem>
      </FlexGrid>
    </IndexLayout>
  );
};

export default IndexPage;

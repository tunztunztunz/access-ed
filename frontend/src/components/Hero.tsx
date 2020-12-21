import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Books from './svg/Books';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import SvgWrapper from './SvgWrapper';
import HeroText from './HeroText';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          hero {
            heroHeader
            heroText
          }
        }
      }
    `
  );
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      minHeight={['95vh', '95vh', '75vh', '35vh']}
      marginTop={['0', '0', 'scale1600']}
    >
      <FlexGridItem>
        <HeroText
          header={data.sanityLanding.hero.heroHeader}
          text={data.sanityLanding.hero.heroText}
        />
      </FlexGridItem>
      <FlexGridItem>
        <SvgWrapper svg={<Books />} />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Hero;

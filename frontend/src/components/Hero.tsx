import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import SvgWrapper from './SvgWrapper';
import HeroText from './HeroText';

interface HeroProps {
  header: string;
  image: FluidObject[];
  text?: string;
}

const Hero = ({ header, text, image }: HeroProps) => {
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      minHeight={['95vh', '95vh', '75vh', '40vh']}
      marginTop={['0', '0', 'scale1600']}
    >
      <FlexGridItem>
        <HeroText header={header} text={text} />
      </FlexGridItem>
      <FlexGridItem paddingTop={['0', '0', '1rem', '0']}>
        <SvgWrapper svg={<Img fluid={image} />} />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Hero;

import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import SvgWrapper from './SvgWrapper';
import HeroText from './HeroText';

interface HeroProps {
  header: string;
  image: FluidObject[];
  text?: string;
  button?: boolean;
  buttonLink?: string;
}

const Hero = ({ header, text, image, button, buttonLink }: HeroProps) => (
  <FlexGrid
    flexGridColumnCount={[1, 1, 1, 2]}
    minHeight={['95vh', '95vh', '50vh', '20vh']}
    marginTop={['0', '0', 'scale1600']}
  >
    <FlexGridItem>
      <HeroText
        header={header}
        text={text}
        button={button}
        buttonLink={buttonLink}
      />
    </FlexGridItem>
    <FlexGridItem
      paddingTop={['0', '0', '1rem', '0']}
      display="flex"
      flexDirection="column"
      alignItems={['center', 'center', 'center', 'flex-end']}
    >
      <SvgWrapper svg={<Img fluid={image} />} />
    </FlexGridItem>
  </FlexGrid>
);

export default Hero;

import React from 'react';
// import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import SvgWrapper from './SvgWrapper';
import HeroText from './HeroText';
import { Image } from './Image';
import ImageObjectInterface from './types/imageObject';

interface HeroProps {
  header: string;
  image: ImageObjectInterface;
  text?: string;
  button?: boolean;
  buttonLink?: string;
}

const Hero = ({ header, text, image, button, buttonLink }: HeroProps) => {
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2, 2]}
      marginTop={['0', '0', 'scale1600']}
      marginBottom={['scale1600', 'scale1600', 0, 0]}
    >
      <FlexGridItem>
        <HeroText header={header} text={text} button={button} buttonLink={buttonLink} />
      </FlexGridItem>
      {image && (
        <FlexGridItem
          paddingTop={['0', 'scale1200', 'scale1200', '0']}
          display="flex"
          flexDirection="column"
          alignItems={['center', 'center', 'center', 'flex-end']}
        >
          <SvgWrapper svg={<Image imageObject={image} />} />
        </FlexGridItem>
      )}
    </FlexGrid>
  );
};
export default Hero;

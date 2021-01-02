import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { H4, Paragraph2, Paragraph3, Paragraph4 } from 'baseui/typography';
import { HeroButton } from './HeroButton';
import SvgWrapper from './SvgWrapper';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { styled } from 'baseui';
import { Block } from 'baseui/block';

const SectionText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 1136px )': {
    textAlign: 'left',
  },
}));

interface SimpleSectionProps {
  text: string | React.ReactNode;
  image?: FluidObject[];
  header?: string;
  caption?: string;
  button?: string;
  isReversed?: boolean;
  centered?: boolean;
}

const SimpleSection = ({
  isReversed,
  text,
  image,
  header,
  button,
  caption,
  centered,
}: SimpleSectionProps) => {
  const direction = isReversed ? 'row-reverse' : 'row';
  const isCentered = centered ? 1 : 2;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, isCentered]}
      flexGridColumnGap={'scale800'}
      flexDirection={['column', 'column', direction]}
    >
      {image && (
        <FlexGridItem>
          <SvgWrapper svg={<Img fluid={image} />} />
          <Paragraph4>{caption}</Paragraph4>
        </FlexGridItem>
      )}
      <FlexGridItem>
        <SectionText>
          <H4 marginTop={['2rem', '2rem', '0']} marginBottom={['1rem', '1rem']}>
            {header}
          </H4>
          <Paragraph3 as={Block} display={['block', 'block', 'none']}>
            {text}
          </Paragraph3>
          <Paragraph2 as={Block} display={['none', 'none', 'block']}>
            {text}
          </Paragraph2>
          {button && <HeroButton buttonText={button} />}
        </SectionText>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default SimpleSection;

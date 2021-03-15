import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { Paragraph3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { HeaderText } from './HeroText';

interface HeroProps {
  header: string;
  image: FluidObject[];
  text?: string;
  button?: boolean;
  buttonLink?: string;
}

const Promotion = ({ header, text, image, button, buttonLink }: HeroProps) => {
  const [css, theme] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={1}
      minHeight={['95vh', '95vh', '50vh', '20vh']}
      marginTop={['0', '0', 'scale1600']}
      alignItems="center"
      justifyContent="center"
    >
      <FlexGridItem
        paddingTop={['0', '0', '1rem', '0']}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Block
          overrides={{
            Block: {
              style: {
                width: '75%',
              },
            },
          }}
        >
          <Img fluid={image} />
        </Block>
      </FlexGridItem>
      <FlexGridItem
        className={css({
          maxWidth: '50%',
        })}
      >
        <HeaderText>
          <Paragraph3
            className={css({
              color: theme.colors.contentTertiary,
            })}
          >
            {text}
          </Paragraph3>
        </HeaderText>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Promotion;

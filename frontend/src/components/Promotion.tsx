import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { H4, Paragraph1, Paragraph3 } from 'baseui/typography';
import { styled, useStyletron } from 'baseui';
import { Link } from 'gatsby';
import { HeaderText } from './HeroText';

export const PromotionImage = styled('div', () => ({
  width: '100%',
  '@media screen and (min-width: 600px )': {
    width: '75%',
  },
}));
interface PromotionProps {
  header: string;
  image: FluidObject[];
  text?: string;
  link?: string;
}

const Promotion = ({ header, text, image, link }: PromotionProps) => {
  const [css, theme] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={1}
      // minHeight={['95vh', '95vh', '50vh', '20vh']}
      marginTop={['0', '0', 'scale1600']}
      alignItems="center"
      justifyContent="center"
    >
      <FlexGridItem
        maxWidth={['100%', '100%', '75%', '75%']}
        className={css({
          textAlign: 'center',
        })}
      >
        <H4 display={['none', 'none', 'block', 'block']}>{header}</H4>
        <Paragraph1 display={['block', 'block', 'none', 'none']}>
          {header}
        </Paragraph1>
      </FlexGridItem>
      <FlexGridItem
        paddingTop={['0', '0', '1rem', '0']}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <PromotionImage>
          <Link to={`/${link}`}>
            <Img fluid={image} />
          </Link>
        </PromotionImage>
      </FlexGridItem>
      <FlexGridItem maxWidth={['100%', '100%', '75%', '75%']}>
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

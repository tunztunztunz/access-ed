import React from 'react';
// import Img, { FluidObject } from 'gatsby-image';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { H4, Paragraph1, Paragraph3 } from 'baseui/typography';
import { styled, useStyletron } from 'baseui';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { HeaderText } from './HeroText';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const PromotionImage = styled('div', () => ({
  width: '100%',
  '@media screen and (min-width: 600px )': {
    width: '75%',
  },
}));
interface PromotionProps {
  header: string;
  image: any;
  text?: string;
  link?: string | undefined;
}

const Promotion = ({ header, text, image, link }: PromotionProps) => {
  const data = useStaticQuery(graphql`
    query PromotionQuery {
      allSanityServicePage {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  const services = data.allSanityServicePage.nodes;
  const promotionLink = services.find((service: { slug: { current: string } }) =>
    service.slug.current.includes(link!)
  )
    ? `/services/${link}`
    : `/${link}`;

  const [css, theme] = useStyletron();
  const promotionImage = image.url.slice(-3) === 'svg' ? image.url : getImage(image);
  return (
    <FlexGrid
      flexGridColumnCount={1}
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
        <Paragraph1 display={['block', 'block', 'none', 'none']}>{header}</Paragraph1>
      </FlexGridItem>
      <FlexGridItem
        paddingTop={['0', '0', '1rem', '0']}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <PromotionImage>
          <Link to={promotionLink}>
            {promotionImage !== image.url ? (
              <GatsbyImage image={promotionImage} alt={'section image'} />
            ) : (
              <img src={image.url} alt={'section image'} style={{ width: '100%' }} />
            )}
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

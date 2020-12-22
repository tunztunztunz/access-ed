import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Paragraph1, Paragraph3 } from 'baseui/typography';
import { HeroButton } from './HeroButton';
import SvgWrapper from './SvgWrapper';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { styled, useStyletron } from 'baseui';
import { graphql, useStaticQuery } from 'gatsby';

const CallToActionText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 1136px )': {
    textAlign: 'left',
  },
}));

const CallToAction = () => {
  const [css] = useStyletron();

  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          contactText
          contactImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    `
  );

  const text: string = data.sanityLanding.contactText;
  const image: FluidObject[] = data.sanityLanding.contactImage.asset.fluid;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2]}
      flexDirection={['column', 'column', 'row-reverse']}
      className={css({
        textAlign: 'center',
      })}
    >
      <FlexGridItem>
        <SvgWrapper svg={<Img fluid={image} />} />
      </FlexGridItem>
      <FlexGridItem>
        <CallToActionText>
          <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
          <Paragraph1 display={['none', 'none', 'block']}>{text}</Paragraph1>
          <HeroButton buttonText={'Contact Us'} />
        </CallToActionText>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default CallToAction;

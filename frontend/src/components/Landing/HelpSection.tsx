import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Paragraph1, Paragraph2, Paragraph3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import SvgWrapper from '../SvgWrapper';

const HelpSection = () => {
  const [css] = useStyletron();

  const data = useStaticQuery(
    graphql`
      query {
        sanityLandingPage {
          helpText
          helpImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          skills
        }
      }
    `
  );
  const text: string = data.sanityLandingPage.helpText;
  const image: FluidObject[] = data.sanityLandingPage.helpImage.asset.fluid;
  const { skills } = data.sanityLandingPage;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      className={css({
        textAlign: 'center',
      })}
    >
      <FlexGridItem display="flex" justifyContent="center">
        <SvgWrapper svg={<Img fluid={image} />} />
      </FlexGridItem>
      <FlexGridItem
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
        <Paragraph1 display={['none', 'none', 'block']}>{text}</Paragraph1>
        <FlexGrid
          display={['none', 'none', 'flex']}
          flexGridColumnCount={[2, 3, 3, 3]}
          className={css({
            textAlign: 'left',
            paddingLeft: 'clamp(1rem, 4vw, 3.5rem)',
          })}
        >
          {skills.map((skill, index) => (
            <FlexGridItem key={index}>
              <Paragraph3>✔️ {skill}</Paragraph3>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default HelpSection;

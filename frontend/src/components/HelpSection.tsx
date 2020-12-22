import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Paragraph1, Paragraph2, Paragraph3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import SvgWrapper from './SvgWrapper';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';

const HelpSection = () => {
  const [css] = useStyletron();

  const data = useStaticQuery(
    graphql`
      query {
        sanityLanding {
          helpText
          contactImage {
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
  const text: string = data.sanityLanding.helpText;
  const image: FluidObject[] = data.sanityLanding.contactImage.asset.fluid;
  const skills: string[] = data.sanityLanding.skills;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2]}
      className={css({
        textAlign: 'center',
      })}
    >
      <FlexGridItem>
        <SvgWrapper svg={<Img fluid={image} />} />
      </FlexGridItem>
      <FlexGridItem>
        <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
        <Paragraph1 display={['none', 'none', 'block']}>{text}</Paragraph1>
        <FlexGrid
          flexGridColumnCount={[2, 2, 2]}
          flexGridRowGap={0}
          className={css({
            textAlign: 'left',
            paddingLeft: '1rem',
          })}
        >
          {skills.map((skill, index) => (
            <FlexGridItem key={index}>
              <Paragraph3 display={['block', 'block', 'none']}>✔️ {skill}</Paragraph3>
              <Paragraph2 display={['none', 'none', 'block']}>✔️ {skill}</Paragraph2>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default HelpSection;

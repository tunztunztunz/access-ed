import React from 'react';
import { Paragraph1, Paragraph3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import SvgWrapper from '../SvgWrapper';
import ImageObjectInterface from '../types/imageObject';
import { Image } from '../Image';

const HelpSection = () => {
  const [css] = useStyletron();

  const data = useStaticQuery(
    graphql`
      query {
        sanityLandingPage {
          helpText
          helpImage {
            asset {
              url
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
            }
          }
          skills
        }
      }
    `
  );
  const text: string = data.sanityLandingPage.helpText;
  const image: ImageObjectInterface = data.sanityLandingPage.helpImage.asset;
  const { skills } = data.sanityLandingPage;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      flexGridColumnGap={['scale1600']}
      className={css({
        textAlign: 'left',
      })}
    >
      <FlexGridItem display="flex" justifyContent="center">
        <SvgWrapper svg={<Image imageObject={image} />} />
      </FlexGridItem>
      <FlexGridItem display="flex" justifyContent="center" flexDirection="column">
        <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
        <Paragraph1 alignSelf="start" marginBottom="auto" display={['none', 'none', 'block']}>
          {text}
        </Paragraph1>
        <FlexGrid display={['none', 'none', 'flex']} flexGridColumnCount={[2, 3, 3, 3]}>
          {skills.map((skill: string, index: number) => (
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

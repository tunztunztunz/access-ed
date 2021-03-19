import React from 'react';
import { H4, Paragraph2, Paragraph3 } from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { styled, useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeroButton } from './HeroButton';
import { Image } from './Image';

const SectionText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 996px )': {
    textAlign: 'left',
  },
}));

interface SimpleSectionProps {
  text: string | React.ReactNode;
  image?: any;
  header?: string;
  caption?: string;
  button?: string;
  buttonLink?: string;
  isReversed?: boolean;
  centered?: boolean;
  breakAtTablets?: boolean;
  background?: boolean;
  padded?: boolean;
  externalLink?: string;
}

const SimpleSection = ({
  isReversed,
  breakAtTablets,
  text,
  image,
  header,
  button,
  buttonLink,
  centered,
  background,
  padded,
  externalLink,
}: SimpleSectionProps) => {
  const [css, theme] = useStyletron();
  const direction = isReversed ? 'row-reverse' : 'row';
  const isCentered = centered ? 1 : 2;
  const shouldBreak = breakAtTablets ? 1 : 2;

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, shouldBreak, isCentered]}
      flexGridColumnGap={isReversed ? '' : 'scale800'}
      flexDirection={['column', 'column', direction]}
      backgroundColor={background ? theme.colors.backgroundTertiary : ''}
      padding={padded ? 'scale600' : ''}
    >
      {image && (
        <FlexGridItem
          display="flex"
          flexDirection="column"
          alignItems={[
            'center',
            'center',
            breakAtTablets ? 'center' : isReversed ? 'flex-end' : 'flex-start',
            isReversed ? 'flex-end' : 'flex-start',
          ]}
        >
          <Block width="90%" alignItems="center" justifyContent="center" display="flex">
            <Image imageObject={image} />
          </Block>
        </FlexGridItem>
      )}
      <FlexGridItem>
        <SectionText>
          <H4
            marginTop={['2rem', '2rem', breakAtTablets ? '2rem' : '0', '0']}
            marginBottom={['1rem', '1rem']}
            className={css({
              textAlign: 'center',
              '@media screen and (min-width: 600px)': {
                textAlign: breakAtTablets ? 'center' : 'left',
              },
              '@media screen and (min-width: 1136px)': {
                textAlign: 'left',
              },
            })}
          >
            {header}
          </H4>
          <Paragraph3
            as={Block}
            display={['block', 'block', 'block', 'none']}
            className={css({
              textAlign: 'left',
            })}
          >
            {text}
          </Paragraph3>
          <Paragraph2
            as={Block}
            display={['none', 'none', 'none', 'block']}
            className={css({
              textAlign: 'left',
            })}
          >
            {text}
          </Paragraph2>
          {button && (
            <HeroButton buttonText={button} link={buttonLink} externalLink={externalLink} />
          )}
        </SectionText>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default SimpleSection;

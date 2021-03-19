import { styled, useStyletron } from 'baseui';
import { Display2, Display3, Display4, H4, H6, Paragraph3 } from 'baseui/typography';
import * as React from 'react';
import { HeroButton } from './HeroButton';

export const HeaderText = styled('div', () => ({
  textAlign: 'left',
}));

interface HeroTextProps {
  header: string;
  buttonText?: string;
  button?: boolean;
  buttonLink?: string;
  text?: string;
}

const HeroText = ({ header, text, buttonText, button, buttonLink }: HeroTextProps) => {
  const [css, theme] = useStyletron();
  return (
    <HeaderText>
      <Display2 display={['none', 'none', 'none', 'block']}>{header}</Display2>
      <Display3
        display={['none', 'none', 'block', 'none']}
        className={css({
          '@media screen and (max-width: 960px)': {
            fontSize: '2.25rem',
          },
          '@media screen and (max-width: 800px)': {
            fontSize: '2rem',
          },
          '@media screen and (max-width: 715px)': {
            fontSize: '1.75rem',
          },
          '@media screen and (max-width: 630px)': {
            fontSize: '1.5rem',
          },
        })}
      >
        {header}
      </Display3>
      <Display4
        display={['block', 'block', 'none', 'none']}
        margin="1em 0"
        className={css({ textAlign: 'center' })}
      >
        {header}
      </Display4>
      <H4
        display={['none', 'none', 'none', 'block']}
        className={css({
          color: theme.colors.contentTertiary,
        })}
      >
        {text}
      </H4>
      <H6
        display={['none', 'none', 'block', 'none']}
        className={css({
          color: theme.colors.contentTertiary,
          '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
          },
          '@media screen and (max-width: 800px)': {
            fontSize: '1.14rem',
          },
          '@media screen and (max-width: 715px)': {
            fontSize: '1rem',
          },
        })}
      >
        {text}
      </H6>
      <Paragraph3
        display={['block', 'block', 'none', 'none']}
        className={css({
          color: theme.colors.contentTertiary,
        })}
      >
        {text}
      </Paragraph3>
      <div
        className={css({
          '@media screen and (max-width: 600px)': {
            textAlign: 'center',
          },
        })}
      >
        {button && <HeroButton buttonText={buttonText || 'Learn More Today!'} link={buttonLink} />}
      </div>
    </HeaderText>
  );
};

export default HeroText;

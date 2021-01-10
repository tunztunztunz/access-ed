import { styled, useStyletron } from 'baseui';
import { Display2, H4, H6, Paragraph3 } from 'baseui/typography';
import * as React from 'react';
import { HeroButton } from './HeroButton';

const HeaderText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 1136px )': {
    textAlign: 'left',
  },
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
      <Display2 display={['none', 'none', 'block', 'block']}>{header}</Display2>
      <H6 display={['block', 'block', 'none', 'none']} margin="1em 0">
        {header}
      </H6>
      <H4
        display={['none', 'none', 'block', 'block']}
        className={css({
          color: theme.colors.contentTertiary,
        })}
      >
        {text}
      </H4>
      <Paragraph3
        display={['block', 'block', 'none', 'none']}
        className={css({
          color: theme.colors.contentTertiary,
        })}
      >
        {text}
      </Paragraph3>
      {button && (
        <HeroButton buttonText={buttonText ? buttonText : 'Learn More'} link={buttonLink} />
      )}
    </HeaderText>
  );
};

export default HeroText;

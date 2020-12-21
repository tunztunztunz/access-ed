import { styled, useStyletron } from 'baseui';
import { Display3, H4, H6, Paragraph3 } from 'baseui/typography';
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
  text: string;
}

const HeroText = ({ header, text }: HeroTextProps) => {
  const [css, theme] = useStyletron();
  return (
    <HeaderText>
      <Display3 display={['none', 'none', 'block', 'block']}>{header}</Display3>
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
      <HeroButton buttonText="Learn More" />
    </HeaderText>
  );
};

export default HeroText;

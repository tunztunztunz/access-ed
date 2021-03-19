import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Block } from 'baseui/block';
import { Link, navigate } from 'gatsby';
import { navItems } from './Header';

interface ButtonProps {
  buttonText: string;
  noMargin?: boolean;
  fullWidth?: boolean;
  link?: string;
  externalLink?: string;
  state?: string;
}
export const HeroButton = ({
  buttonText,
  noMargin,
  fullWidth,
  link,
  externalLink,
  state,
}: ButtonProps) => {
  const button = (
    <Button
      kind={KIND.primary}
      isSelected
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.accent,
            width: fullWidth ? '100vw' : $theme.sizing.scale4800,
            ':hover': {
              backgroundColor: $theme.colors.accent500,
            },
          }),
        },
      }}
    >
      {buttonText}
    </Button>
  );

  if (externalLink) {
    return (
      <a href={externalLink} style={{ textDecoration: 'none' }}>
        {button}
      </a>
    );
  }
  return (
    <Block marginTop={noMargin ? '' : '2rem'}>
      <Link to={`/${link}`} state={{ from: state }} style={{ textDecoration: 'none' }}>
        {button}
      </Link>
    </Block>
  );
};

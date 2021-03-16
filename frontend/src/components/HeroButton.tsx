import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Block } from 'baseui/block';
import { navigate } from 'gatsby';

interface ButtonProps {
  buttonText: string;
  noMargin?: boolean;
  fullWidth?: boolean;
  link?: string;
  externalLink?: string;
}
export const HeroButton = ({
  buttonText,
  noMargin,
  fullWidth,
  link,
  externalLink,
}: ButtonProps) => {
  const buttonNavigation = () => {
    if (link) {
      navigate(`/${link}`);
    }
  };
  return (
    <Block marginTop={noMargin ? '' : '2rem'}>
      <a href={externalLink} style={{ textDecoration: 'none' }}>
        <Button
          onClick={() => buttonNavigation()}
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
      </a>
    </Block>
  );
};

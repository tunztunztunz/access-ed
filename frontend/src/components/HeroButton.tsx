import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Block } from 'baseui/block';

interface ButtonProps {
  buttonText: string;
  noMargin?: boolean;
  fullWidth?: boolean;
}
export const HeroButton = ({ buttonText, noMargin, fullWidth }: ButtonProps) => {
  console.log(fullWidth);
  return (
    <Block marginTop={noMargin ? '' : '2rem'} width="100%">
      <Button
        onClick={() => alert('click')}
        kind={KIND.primary}
        isSelected
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.accent,
              width: fullWidth ? '100vw' : $theme.sizing.scale4800,
            }),
          },
        }}
      >
        {buttonText}
      </Button>
    </Block>
  );
};

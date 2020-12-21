import * as React from 'react';
import { Button, KIND } from 'baseui/button';

interface ButtonProps {
  buttonText: string;
}
export const HeroButton = ({ buttonText }: ButtonProps) => {
  return (
    <Button
      onClick={() => alert('click')}
      kind={KIND.primary}
      isSelected
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.accent,
            width: $theme.sizing.scale4800,
          }),
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

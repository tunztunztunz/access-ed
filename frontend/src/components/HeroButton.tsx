import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Block } from 'baseui/block';
import { Link } from 'gatsby';
import { getUniqueIdentifier } from './Header';
import NavContext from './NavContext';
import { setItemActive } from 'baseui/app-nav-bar';

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
  const { mainItems, setMainItems } = React.useContext(NavContext);

  const move = () => {
    let item = mainItems.find((i) => i.slug === `/${link}`);
    if (item === undefined) {
      const services = mainItems.find((i) => i.slug === `/services`);
      item = services?.children?.find((i: { slug: string }) => i.slug === `/${link}`);
    }
    // @ts-ignore
    setMainItems((prev: any) => setItemActive(prev, item, getUniqueIdentifier));
  };

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
      <Link
        to={`/${link}`}
        state={{ from: state }}
        style={{ textDecoration: 'none' }}
        onClick={() => {
          move();
        }}
      >
        {button}
      </Link>
    </Block>
  );
};

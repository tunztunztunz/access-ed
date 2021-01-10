// @ts-nocheck
import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { ChevronDown, Delete } from 'baseui/icon';
import { Link, navigate, useStaticQuery } from 'gatsby';
import { styled, useStyletron, withStyle } from 'baseui';

const StyledLink = styled(Link, ({ $theme }) => ({
  color: $theme.colors.contentTertiary,
  textDecoration: 'none',
  ':hover': {
    color: $theme.colors.primaryA,
  },
  ':active': {
    color: $theme.colors.primaryA,
  },
}));

interface HeaderProps {
  title: string;
}

interface DataProps {
  data: {
    allSanityServicePage: {
      edges: [
        {
          node: [
            {
              title: string;
              slug: {
                current: string;
              };
            }
          ];
        }
      ];
    };
  };
}
export default function Header({ title }: HeaderProps) {
  const [css, theme] = useStyletron();

  const data = useStaticQuery(graphql`
    query headerQuery {
      allSanityServicePage {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const servicesLinks: DataProps = data.allSanityServicePage.edges;

  const links = servicesLinks.slice(0, 6).map((link, index) => ({
    label: <StyledLink to={`/services/${link.node.slug.current}`}>{link.node.title}</StyledLink>,
  }));

  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    {
      label: <StyledLink to={'/about'}>About</StyledLink>,
      info: { id: 1 },
    },
    {
      icon: ChevronDown,
      label: <StyledLink to={'/services'}>Services</StyledLink>,
      navExitIcon: Delete,
      children: [...links],
    },
    { label: <StyledLink to={'/testimonials'}>Testimonials</StyledLink>, info: { id: 3 } },
    { label: <StyledLink to={'/partnerships'}>Partnerships</StyledLink>, info: { id: 4 } },
    { label: <StyledLink to={'/contact'}>Book Now!</StyledLink>, info: { id: 5 } },
  ]);
  function getUniqueIdentifier(item: NavItemT) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }
  function handleMainItemSelect(item: NavItemT) {
    setMainItems(prev => setItemActive(prev, item, getUniqueIdentifier));
  }
  return (
    <AppNavBar
      title={title}
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      //@ts-ignore
      overrides={{
        Root: {
          style: () => ({ boxShadow: 'none' }),
        },
      }}
    />
  );
}

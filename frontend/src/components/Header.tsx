// @ts-nocheck
import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { ChevronDown, Delete } from 'baseui/icon';
import { Link, navigate, useStaticQuery } from 'gatsby';
import { styled, useStyletron, withStyle } from 'baseui';
import { FaGraduationCap as Cap } from 'react-icons/fa';

const StyledLink = styled(Link, ({ $theme }) => ({
  color: $theme.colors.contentTertiary,
  textDecoration: 'none',
  ':hover': {
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
  const siteName = (
    <>
      {title} <Cap />
    </>
  );
  const servicesLinks: DataProps = data.allSanityServicePage.edges;

  // const links = servicesLinks.slice(0, 6).map((link, index) => ({
  //   label: <StyledLink to={`/services/${link.node.slug.current}`}>{link.node.title}</StyledLink>,
  // }));
  const links = servicesLinks.slice(0, 6).map((link, index) => ({
    label: link.node.title,
    slug: `/services/${link.node.slug.current}`,
  }));

  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    { label: 'Home', slug: '/', info: { id: 1 } },
    { label: 'About', info: { id: 2 }, slug: '/about' },
    {
      icon: ChevronDown,
      label: 'Services',
      slug: '/services',
      navExitIcon: Delete,
      children: [...links],
    },
    { label: 'Testimonials', slug: '/testimonials', info: { id: 3 } },
    { label: 'Partnerships', slug: '/partnerships', info: { id: 4 } },
    { label: 'Book Now!', slug: '/contact', info: { id: 5 } },
  ]);
  function getUniqueIdentifier(item: NavItemT) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }
  function handleMainItemSelect(item: NavItemT) {
    setMainItems(prev => setItemActive(prev, item, getUniqueIdentifier));
    navigate(item.slug);
  }
  return (
    <AppNavBar
      title={siteName}
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

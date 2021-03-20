import React, { ReactElement, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LightTheme, BaseProvider, styled } from 'baseui';
import SEO from '../components/Seo';
import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import LayoutRoot from '../components/LayoutRoot';
import Footer from '../components/Footer';
import NavContext from '../components/NavContext';
import { ChevronDown, Delete } from 'baseui/icon';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

interface IndexProps {
  children: ReactElement;
}

const IndexLayout = ({ children }: IndexProps) => {
  const currentLocation: string = children?.props?.location.pathname;
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
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
    `
  );
  // Have to pull the data in here to set in state. Haven't figured out a way to add a query like this to the context file and have it work
  const servicesLinks = data.allSanityServicePage.edges;
  const links = servicesLinks
    .slice(0, 6)
    .map((link: { node: { title: string; slug: { current: string } } }) => ({
      label: link.node.title,
      slug: `/services/${link.node.slug.current}`,
    }));

  const navItems = [
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
  ];

  const [mainItems, setMainItems] = useState(navItems);
  const value = { mainItems, setMainItems };
  console.log(mainItems[2].children);

  return (
    <BaseProvider theme={LightTheme}>
      <Centered>
        <SEO />
        <LayoutRoot>
          {/* @ts-ignore */}
          <NavContext.Provider value={value}>
            <Header title={data.site.siteMetadata.title} active={currentLocation} />
            <LayoutMain>{children}</LayoutMain>
            <Footer />
          </NavContext.Provider>
        </LayoutRoot>
      </Centered>
    </BaseProvider>
  );
};

export default IndexLayout;

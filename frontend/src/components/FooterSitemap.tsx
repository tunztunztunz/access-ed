import * as React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Link } from 'gatsby';
import { styled, useStyletron } from 'baseui';

const StyledLink = styled(Link, ({ $theme }) => ({
  color: $theme.colors.primary,
  textDecoration: 'none',
  display: 'inline-block',
  '@media screen and (max-width: 600px)': {
    fontSize: '1.25rem',
    padding: '.5rem 38px',
  },
}));

const FooterSitemap = () => {
  const [css, theme] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 3, 3]}
      flexGridRowGap="scale200"
      padding="2rem"
      className={css({
        '@media screen and (max-width: 600px)': {
          padding: '.5rem 0',
          backgroundColor: theme.colors.backgroundSecondary,
        },
      })}
    >
      <FlexGridItem>
        <StyledLink to="/about">About</StyledLink>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink to="/services">Services</StyledLink>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink to="/testimonials">Testimonials</StyledLink>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink to="/partnerships">Partnerships</StyledLink>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink to="/contact">Contact</StyledLink>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink to="/careers">Careers</StyledLink>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default FooterSitemap;

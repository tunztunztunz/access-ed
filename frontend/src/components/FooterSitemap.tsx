import * as React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Link } from 'gatsby';
import { styled } from 'baseui';

const StyledLink = styled(Link, ({ $theme }) => ({
  color: $theme.colors.primary,
  textDecoration: 'none',
  display: 'inline-block',
}));

const FooterSitemap = () => (
  <FlexGrid flexGridColumnCount={3} flexGridRowGap="scale200" padding="2rem">
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

export default FooterSitemap;

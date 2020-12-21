import * as React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

const FooterSitemap = () => {
  return (
    <FlexGrid flexGridColumnCount={3} flexGridRowGap={'scale200'} padding="2rem">
      <FlexGridItem>About</FlexGridItem>
      <FlexGridItem>Services</FlexGridItem>
      <FlexGridItem>Testimonials</FlexGridItem>
      <FlexGridItem>Partnerships</FlexGridItem>
      <FlexGridItem>Contact</FlexGridItem>
    </FlexGrid>
  );
};

export default FooterSitemap;

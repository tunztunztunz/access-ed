import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { styled, useStyletron } from 'baseui';
import FooterSocialMedia from './FooterSocialMedia';
import FooterSitemap from './FooterSitemap';
import FooterContactInfo from './FooterContactInfo';

const FooterText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 1136px )': {
    textAlign: 'left',
  },
}));

const Footer = () => {
  const [css] = useStyletron();
  return (
    <FooterText>
      <FlexGrid
        flexGridColumnCount={[1, 1, 2]}
        flexGridRowGap={[0, 0, 'scale800', 'scale800']}
      >
        <FlexGridItem>
          <FooterSitemap />
        </FlexGridItem>
        <FlexGridItem>
          <FooterSocialMedia />
        </FlexGridItem>
        <FlexGridItem>
          <FooterContactInfo />
        </FlexGridItem>
      </FlexGrid>
    </FooterText>
  );
};

export default Footer;

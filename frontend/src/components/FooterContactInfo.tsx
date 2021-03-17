import * as React from 'react';
import { Block } from 'baseui/block';
import { Paragraph3 } from 'baseui/typography';
import { FiPhoneIncoming as Phone, FiMail as Mail } from 'react-icons/fi';
import { MdLocationCity as Location } from 'react-icons/md';
import { styled } from 'baseui';

export const StyledLink = styled('a', ({ $theme }) => ({
  textDecoration: 'none',
  color: $theme.colors.primary,
}));

const FooterContactInfo = () => (
  <Block
    overrides={{
      Block: {
        style: {
          padding: '0 2rem',
          textAlign: 'left',
          '@media screen and (max-width: 600px)': {
            textAlign: 'center',
          },
        },
      },
    }}
  >
    <Paragraph3>
      <Phone /> :{' '}
      <StyledLink href="tel:503-381-9040">(503) 381-9040</StyledLink>
    </Paragraph3>
    <Paragraph3>
      <Mail /> :{' '}
      <StyledLink href="mailto:info@accessednw.com">
        info@accessednw.com
      </StyledLink>
    </Paragraph3>
    <Paragraph3>
      <Location /> : Vancouver, Washington
    </Paragraph3>
    <Paragraph3>©AccessEd Academic Coaching Services</Paragraph3>
  </Block>
);

export default FooterContactInfo;

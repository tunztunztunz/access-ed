import * as React from 'react';
import { Block } from 'baseui/block';
import { Paragraph3 } from 'baseui/typography';
import { FiPhoneIncoming as Phone, FiMail as Mail } from 'react-icons/fi';
import { MdLocationCity as Location } from 'react-icons/md';

const FooterContactInfo = () => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            padding: '0 2rem',
            textAlign: 'left',
          },
        },
      }}
    >
      <Paragraph3>©AccessEd Academic Coaching Services</Paragraph3>
      <Paragraph3>
        <Phone /> : (503) 381-9040
      </Paragraph3>
      <Paragraph3>
        <Mail /> : info@accessednw.com
      </Paragraph3>
      <Paragraph3>
        <Location /> : Vancouver, Washington
      </Paragraph3>
    </Block>
  );
};

export default FooterContactInfo;

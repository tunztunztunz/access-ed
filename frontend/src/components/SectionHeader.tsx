import { css } from '@emotion/core';
import { Block } from 'baseui/block';
import { Display2, Display4, Paragraph3 } from 'baseui/typography';
import React from 'react';

const headerStyle = css`
  margin-bottom: 2.5rem;
  ::after {
    content: '';
    display: block;
    margin: 1rem auto;
    max-width: 3rem;
    height: 2px;
    background-color: black;
  }
`;

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <Block
      marginBottom={['0', '0', '0']}
      overrides={{
        Block: {
          style: { textAlign: 'center' },
        },
      }}
    >
      <Display4 css={headerStyle} display={['block', 'block', 'none']}>
        {title}
      </Display4>
      <Display2 css={headerStyle} display={['none', 'none', 'block']}>
        {title}
      </Display2>
      <Paragraph3>{description}</Paragraph3>
    </Block>
  );
};

export default SectionHeader;

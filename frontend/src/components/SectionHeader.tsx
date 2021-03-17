import { css } from '@emotion/core';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Display3, Display4, Paragraph1, Paragraph3 } from 'baseui/typography';
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
  description?: string | React.ReactNode;
  noRule?: boolean;
}

const SectionHeader = ({ title, description, noRule }: SectionHeaderProps) => {
  const [css] = useStyletron();
  return (
    <Block
      marginBottom={['0', '0', '0']}
      overrides={{
        Block: {
          style: { textAlign: 'center' },
        },
      }}
    >
      <Display4
        css={noRule ? '' : headerStyle}
        display={['block', 'block', 'none']}
      >
        {title}
      </Display4>
      <Display3
        css={noRule ? '' : headerStyle}
        display={['none', 'none', 'block']}
      >
        {title}
      </Display3>
      <Paragraph3
        as={Block}
        display={['block', 'block', 'none']}
        className={css({ textAlign: 'left' })}
      >
        {description}
      </Paragraph3>
      <Paragraph1 as={Block} display={['none', 'none', 'block']}>
        {description}
      </Paragraph1>
    </Block>
  );
};

export default SectionHeader;

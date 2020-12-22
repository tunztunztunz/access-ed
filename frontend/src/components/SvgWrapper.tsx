import { Block } from 'baseui/block';
import React from 'react';

interface SvgWrapperProps {
  svg: React.ReactNode;
  isSmall?: boolean;
}

const SvgWrapper = ({ svg, isSmall }: SvgWrapperProps) => (
  <Block
    overrides={{
      Block: {
        style: {
          margin: '0 auto',
          minWidth: '200px',
          maxWidth: isSmall ? '200px' : '525px',
          minHeight: isSmall ? '200px' : '',
          maxHeight: isSmall ? '200px' : '',
        },
      },
    }}
  >
    {svg}
  </Block>
);

export default SvgWrapper;

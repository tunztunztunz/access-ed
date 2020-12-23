import { Block } from 'baseui/block';
import React from 'react';

interface SvgWrapperProps {
  svg: React.ReactNode | HTMLImageElement;
  isSmall?: boolean;
}

const SvgWrapper = ({ svg, isSmall }: SvgWrapperProps) => (
  <Block
    overrides={{
      Block: {
        style: {
          margin: '0 auto',
          minWidth: '200px',
          maxWidth: isSmall ? '200px' : '400px',
          minHeight: isSmall ? '200px' : '',
          maxHeight: isSmall ? '200px' : '500px',
        },
      },
    }}
  >
    {svg}
  </Block>
);

export default SvgWrapper;

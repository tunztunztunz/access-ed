import { Block } from 'baseui/block';
import React from 'react';

interface SvgWrapperProps {
  svg: React.ReactNode | HTMLImageElement;
  isSmall?: boolean;
  margin?: boolean;
}

const SvgWrapper = ({ svg, isSmall, margin }: SvgWrapperProps) => {
  const margins = margin ? '0 auto' : '';
  return (
    <Block
      overrides={{
        Block: {
          style: {
            margin: margins,
            width: '100%',
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
};

export default SvgWrapper;

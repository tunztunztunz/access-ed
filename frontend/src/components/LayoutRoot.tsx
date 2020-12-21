import { styled } from 'baseui';
import React from 'react';

interface LayoutRootProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutRootStyle = styled('div', {});

const LayoutRoot = ({ children, className }: LayoutRootProps) => (
  <>
    <LayoutRootStyle className={className}>{children}</LayoutRootStyle>
  </>
);

LayoutRoot.defaultProps = {
  className: '',
};

export default LayoutRoot;

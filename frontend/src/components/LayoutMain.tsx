import { styled } from 'baseui';
import React from 'react';

const StyledLayoutMain = styled('div', ({ $theme }) => ({
  paddingBottom: $theme.sizing.scale1600,
  borderBottom: `2px solid ${$theme.colors.backgroundTertiary}`,
}));
interface LayoutMainProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutMain = ({ children, className }: LayoutMainProps) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

LayoutMain.defaultProps = {
  className: '',
};
export default LayoutMain;

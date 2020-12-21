import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div``;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

Container.defaultProps = {
  className: '',
};
export default Container;

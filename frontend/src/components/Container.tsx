import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={className}>{children}</div>
);

Container.defaultProps = {
  className: '',
};
export default Container;

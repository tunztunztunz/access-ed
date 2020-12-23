import React from 'react';
import IndexLayout from './src/layouts/Index';

export const wrapPageElement = ({ element, props }) => (
  <IndexLayout {...props}>{element}</IndexLayout>
);

import React from 'react';
import IndexLayout from '../frontend/src/layouts/IndexLayout';

export const wrapPageElement = ({ element, props }) => (
  <IndexLayout {...props}>{element}</IndexLayout>
);

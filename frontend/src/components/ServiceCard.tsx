import React from 'react';
import { H5, Paragraph1, Paragraph3 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { css } from '@emotion/core';
import { useStyletron } from 'baseui';
import SvgWrapper from './SvgWrapper';

const styledTextArea = css`
  text-align: center;
`;

interface ServiceCardProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ svg, title, description }: ServiceCardProps) => {
  const [, theme] = useStyletron();
  return (
    <Block css={styledTextArea}>
      <SvgWrapper svg={svg} isSmall={true} />
      <H5 marginBottom={theme.sizing.scale600}>{title}</H5>
      <Paragraph3 display={['block', 'block', 'none']}>{description}</Paragraph3>
      <Paragraph1 display={['none', 'none', 'block']}>{description}</Paragraph1>
    </Block>
  );
};

export default ServiceCard;

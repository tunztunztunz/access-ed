import React from 'react';
import { H5, Paragraph1, Paragraph3 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import SvgWrapper from '../SvgWrapper';

interface ServiceCardProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ svg, title, description }: ServiceCardProps) => {
  const [css, theme] = useStyletron();
  return (
    <Block>
      <SvgWrapper margin svg={svg} isSmall />
      <H5 marginBottom={theme.sizing.scale600} className={css({ textAlign: 'center' })}>
        {title}
      </H5>
      <Paragraph3
        display={['block', 'block', 'block', 'none']}
        maxWidth={['100%', '80%', '65%']}
        margin="0 auto 3rem"
      >
        {description}
      </Paragraph3>
      <Paragraph1 display={['none', 'none', 'none', 'block']}>{description}</Paragraph1>
    </Block>
  );
};

export default ServiceCard;

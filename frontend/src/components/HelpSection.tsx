import React from 'react';
import { Paragraph1, Paragraph2, Paragraph3 } from 'baseui/typography';
import Help from './svg/Help';
import { useStyletron } from 'baseui';
import SvgWrapper from './SvgWrapper';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

interface HelpSectionProps {
  text: string;
  skillsList: string[];
}

const HelpSection = ({ text, skillsList }: HelpSectionProps) => {
  const [css] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2]}
      className={css({
        textAlign: 'center',
      })}
    >
      <FlexGridItem>
        <SvgWrapper svg={<Help />} />
      </FlexGridItem>
      <FlexGridItem>
        <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
        <Paragraph1 display={['none', 'none', 'block']}>{text}</Paragraph1>
        <FlexGrid
          flexGridColumnCount={[2, 2, 2]}
          flexGridRowGap={0}
          className={css({
            textAlign: 'left',
            paddingLeft: '1rem',
          })}
        >
          {skillsList.map((skill, index) => (
            <FlexGridItem key={index}>
              <Paragraph3 display={['block', 'block', 'none']}>✔️ {skill}</Paragraph3>
              <Paragraph2 display={['none', 'none', 'block']}>✔️ {skill}</Paragraph2>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default HelpSection;

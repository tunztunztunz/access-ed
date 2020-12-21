import React from 'react';
import { Paragraph1, Paragraph3 } from 'baseui/typography';
import { HeroButton } from './HeroButton';
import ContactUs from './svg/ContactUs';
import SvgWrapper from './SvgWrapper';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { styled, useStyletron } from 'baseui';

const CallToActionText = styled('div', () => ({
  textAlign: 'center',
  '@media screen and (min-width: 1136px )': {
    textAlign: 'left',
  },
}));
interface CallToActionProps {
  text: string;
}

const CallToAction = ({ text }: CallToActionProps) => {
  const [css] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2]}
      flexDirection={['column', 'column', 'row-reverse']}
      className={css({
        textAlign: 'center',
      })}
    >
      <FlexGridItem>
        <SvgWrapper svg={<ContactUs />} />
      </FlexGridItem>
      <FlexGridItem>
        <CallToActionText>
          <Paragraph3 display={['block', 'block', 'none']}>{text}</Paragraph3>
          <Paragraph1 display={['none', 'none', 'block']}>{text}</Paragraph1>
          <HeroButton buttonText={'Contact Us'} />
        </CallToActionText>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default CallToAction;

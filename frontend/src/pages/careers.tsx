import * as React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import Img from 'gatsby-image';
import { Block } from 'baseui/block';
import SectionHeader from '../components/SectionHeader';
import { HeroButton } from '../components/HeroButton';
import SvgWrapper from '../components/SvgWrapper';
import ContactUs from '../components/svg/ContactUs';

const Careers = () => {
  const [css] = useStyletron();

  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0 1rem', '2rem', '2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale800']}
    >
      <FlexGridItem display="flex" justifyContent="center">
        <Block width={['100%', '100%', '75%', '50%']}>
          <ContactUs />
        </Block>
      </FlexGridItem>
      <FlexGridItem>
        <SectionHeader
          title="Careers at AccessEd"
          description={
            <div
              className={css({
                '@media screen and (min-width: 1136px)': {
                  maxWidth: '50%',
                },
                '@media screen and (min-width: 800px)': {
                  maxWidth: '75%',
                },
                margin: '0 auto',
              })}
            >
              AccessEd is always looking for caring, enthusiastic, and engaging
              tutors to join our team! If you are interested in becoming a tutor
              with AccessEd, LLC please complete the form below and we will
              reach out to you as soon as possible!
            </div>
          }
        />
      </FlexGridItem>
      <FlexGridItem display="flex" justifyContent="center">
        <HeroButton
          buttonText="Go to application"
          externalLink="https://docs.google.com/forms/d/e/1FAIpQLScp31bdThQu7kGjqNHdi4L6mhangghOnz9Hyjp7F_p5bJk1jw/viewform"
        />
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Careers;

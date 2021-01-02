import React from 'react';
import { H3, H5, H6, Paragraph1, Paragraph2, Paragraph3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { HeroButton } from '../HeroButton';

interface ServicePriceCardProps {
  title: string;
  serviceDetails: string[];
  price: string;
  hours: number;
}

const ServicePriceCard = ({ title, serviceDetails, price, hours }: ServicePriceCardProps) => {
  const [css, theme] = useStyletron();

  const details = (
    <ul
      className={css({
        listStyleType: 'none',
        paddingLeft: theme.sizing.scale600,
      })}
    >
      {serviceDetails.map((detail, index) => (
        <li key={index}>
          <span className={css({ color: theme.colors.accent })}>✔ </span>
          {detail}
        </li>
      ))}
    </ul>
  );

  return (
    <Block
      className={css({
        textAlign: 'center',
      })}
    >
      <H5>{title}</H5>
      <FlexGrid
        paddingBottom={'scale600'}
        className={css({
          border: '1px solid black',
        })}
      >
        <FlexGridItem>
          <Paragraph1 marginBottom="0">{hours} hours/month</Paragraph1>
          <hr
            className={css({
              content: '',
              display: 'block',
              // margin: '0 auto 2rem auto',
              maxWidth: '80%',
              border: `1px solid ${theme.colors.primary300}`,
            })}
          />
          <H5 marginBottom={theme.sizing.scale600} marginTop={theme.sizing.scale600}>
            ${price}/month
          </H5>
        </FlexGridItem>
        <FlexGridItem className={css({ textAlign: 'left' })}>
          <Paragraph2 as={Block} display={['block', 'block', 'none']}>
            {details}
          </Paragraph2>
          <Paragraph1 as={Block} display={['none', 'none', 'block']}>
            {details}
          </Paragraph1>
        </FlexGridItem>
        <FlexGridItem display="flex" justifyContent="center">
          <HeroButton buttonText={'Enroll Now'} />
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default ServicePriceCard;

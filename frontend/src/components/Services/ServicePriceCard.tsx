import React from 'react';
import { H5, Paragraph1, Paragraph2 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { HeroButton } from '../HeroButton';

interface ServicePriceCardProps {
  title: string;
  serviceDetails: string[];
  price: string;
  hours: string;
}

const ServicePriceCard = ({ title, serviceDetails, price, hours }: ServicePriceCardProps) => {
  const [css, theme] = useStyletron();

  const details = (
    <ul
      className={css({
        listStyleType: 'none',
        paddingLeft: theme.sizing.scale600,
        minHeight: '280px',
        maxHeight: '280px',
        lineHeight: theme.sizing.scale900,
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
          border: 'none',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
          minHeight: '520px',
          maxHeight: '520px',
          maxWidth: '350px',
        })}
      >
        <FlexGridItem>
          <Paragraph1 marginBottom="0">{hours}</Paragraph1>
          <hr
            className={css({
              content: '',
              display: 'block',
              maxWidth: '80%',
              border: `1px solid ${theme.colors.primary300}`,
            })}
          />
          <H5 marginBottom={theme.sizing.scale600} marginTop={theme.sizing.scale600}>
            ${price}
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
          <HeroButton buttonText={'Enroll Now'} link={'/contact'} />
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default ServicePriceCard;

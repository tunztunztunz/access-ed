import React from 'react';
import { H5, H6, Paragraph1, Paragraph2 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { HeroButton } from '../HeroButton';
import salesPrice from '../../utils/salesPrice';

interface ServicePriceCardProps {
  title: string;
  serviceDetails: string[];
  price: string;
  hours: string;
  discount?: number;
  message?: string;
}

const ServicePriceCard = ({
  title,
  serviceDetails,
  price,
  hours,
  discount,
  message,
}: ServicePriceCardProps) => {
  const [css, theme] = useStyletron();

  const servicePrice =
    // eslint-disable-next-line no-nested-ternary
    parseInt(price) === 0
      ? '$0'
      : discount
      ? Math.ceil((salesPrice(parseInt(price), discount) / 10) * 10)
      : `$${price}`;

  const details = (
    <ul
      className={css({
        listStyleType: 'none',
        paddingLeft: theme.sizing.scale600,
        height: '100%',
        maxHeight: '280px',
        marginTop: 0,
        lineHeight: theme.sizing.scale900,
      })}
    >
      {serviceDetails.map((detail, index) => (
        <li key={index}>
          <span className={css({ color: theme.colors.accent })}>✔ </span>
          {console.log(index <= 5)}
          {detail}
        </li>
      ))}
    </ul>
  );

  return (
    <Block
      className={css({
        height: '100%',
        textAlign: 'center',
      })}
    >
      <H5>{title}</H5>
      <FlexGrid
        paddingBottom="scale600"
        className={css({
          border: 'none',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
          height: '80%',
          marginBottom: '60px',
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
          <H5 marginBottom="0" marginTop={theme.sizing.scale600}>
            {discount && (
              <>
                <span
                  style={{
                    textDecoration: 'line-through',
                    color: theme.colors.contentTertiary,
                    marginRight: '.5rem',
                  }}
                >
                  ${price}
                </span>
              </>
            )}
            ${servicePrice}
          </H5>
          <H6
            className={css({
              textTransform: 'uppercase',
              margin: '0',
              color: theme.colors.contentNegative,
            })}
          >
            {message}
          </H6>
        </FlexGridItem>
        <FlexGridItem className={css({ textAlign: 'left' })}>
          <Paragraph2 as={Block} display={['block', 'block', 'none']}>
            {details}
          </Paragraph2>
          <Paragraph1 as={Block} display={['none', 'none', 'block']}>
            {details}
          </Paragraph1>
        </FlexGridItem>
        <FlexGridItem
          display="flex"
          position="relative"
          marginTop="scale800"
          justifyContent="center"
        >
          <Block
            className={css({
              margin: '0 auto',
              position: 'absolute',
              bottom: '0',
            })}
          >
            <HeroButton buttonText="Enroll Now" link="/contact" />
          </Block>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default ServicePriceCard;

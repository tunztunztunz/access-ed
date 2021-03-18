import React from 'react';
import { H2, H3, Paragraph1, Paragraph3 } from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeroButton } from '../HeroButton';
import salesPrice from '../../utils/salesPrice';

interface SimpleSectionProps {
  features: string[];
  price: string;
  link?: string;
  header?: string;
  button?: string;
  isReversed?: boolean;
  discount: number;
}

const ServicesPricingRow = ({
  features,
  header,
  button,
  price,
  link,
  discount,
}: SimpleSectionProps) => {
  const [css, theme] = useStyletron();

  const servicePrice =
    // eslint-disable-next-line no-nested-ternary
    parseInt(price) === 0
      ? ''
      : discount
      ? `$${salesPrice(parseInt(price), discount)}`
      : `$${price}`;

  const serviceFeatureList = (
    <ul
      className={css({
        paddingLeft: 0,
        margin: 0,
        listStyle: 'none',
      })}
    >
      {features.map((feature: string, index) => (
        <li key={index}>★ {feature}</li>
      ))}
    </ul>
  );

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 4]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale200"
      flexDirection={['column', 'column', 'column', 'row']}
      justifyContent="center"
    >
      <FlexGridItem>
        <H2
          display={['none', 'none', 'none', 'block']}
          marginTop={[0]}
          marginBottom={['1rem', '1rem', '1rem', 0]}
        >
          {header}
        </H2>
        <H3
          display={['block', 'block', 'block', 'none']}
          marginTop={[0]}
          marginBottom={['1rem', '1rem', '1rem', 0]}
        >
          {header}
        </H3>
      </FlexGridItem>
      <FlexGridItem
        display="flex"
        justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
      >
        <Paragraph1 as={Block}>{serviceFeatureList}</Paragraph1>
      </FlexGridItem>
      <FlexGridItem
        display="flex"
        justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
      >
        {console.log(typeof price)}
        <H2
          display={['block']}
          marginBottom={['1em', '1rem', '1rem', 0]}
          marginTop={['1rem', '1rem', '1rem', 0]}
        >
          <Paragraph3

            marginTop={[0]}
            className={css({
              color: theme.colors.contentTertiary,
            })}
            display='inline'
          >
            {servicePrice !== '' ? 'starting at/' : 'Pricing Upon Request'}

          </Paragraph3>
          {discount && (
            <>
              <span
                className={css({
                  textDecoration: 'line-through',
                  color: theme.colors.contentTertiary,
                  marginRight: '.5rem',
                })}
              >
                {price}
              </span>
            </>
          )}
          {servicePrice}
        </H2>
      </FlexGridItem>
      <FlexGridItem
        display="flex"
        justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
      >
        {/* Flex was not working without wrapping this conditional */}
        <Block>
          {button && <HeroButton buttonText={button} noMargin link={link} />}
        </Block>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default ServicesPricingRow;

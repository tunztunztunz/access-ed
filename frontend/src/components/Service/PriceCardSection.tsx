import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import React from 'react';
import SectionHeader from '../SectionHeader';
import ServicePriceCard, {
  ServicePriceCardProps,
} from '../Services/ServicePriceCard';

const BlockContent = require('@sanity/block-content-to-react');

interface ServiceSectionProps {
  priceModifier: number;
  message: string;
  slug: {
    current: string;
  };
  section: {
    header: string;
    _rawText: string[];
    priceCards: [
      {
        title: string;
        serviceDetails: string[];
        price: string;
        hours: string;
      }
    ];
  };
}

const PriceCardSection = ({
  section,
  priceModifier,
  message,
  slug,
}: ServiceSectionProps) => {
  const sectionDescription = section._rawText ? (
    <BlockContent blocks={section._rawText} renderContainerOnSingleChild />
  ) : (
    ''
  );
  const sectionLength = section?.priceCards.length;
  return (
    <FlexGridItem>
      <FlexGridItem>
        <SectionHeader
          title={section.header}
          description={sectionDescription}
        />
      </FlexGridItem>
      <FlexGridItem>
        <FlexGrid
          flexGridColumnCount={[
            1,
            1,
            sectionLength <= 1 ? sectionLength : 2,
            sectionLength,
          ]}
          flexDirection="row"
          flexGridColumnGap={['scale1200']}
          flexGridRowGap={['scale1600', 'scale1600', 'scale1600', 'scale800']}
          marginBottom="scale3200"
        >
          {console.log(section)}
          {/* eslint-disable-next-line no-shadow */}
          {section.priceCards.map(
            (card: ServicePriceCardProps, index: number) => (
              <FlexGridItem
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ServicePriceCard
                  key={index}
                  hours={card.hours}
                  title={card.title}
                  price={card.price}
                  discount={priceModifier}
                  message={message}
                  serviceDetails={card.serviceDetails}
                  state={slug.current}
                />
              </FlexGridItem>
            )
          )}
        </FlexGrid>
      </FlexGridItem>
    </FlexGridItem>
  );
};

export default PriceCardSection;

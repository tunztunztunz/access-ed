import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import React from 'react';
import { A } from '../../templates/Service';
import SectionHeader from '../SectionHeader';
import ServicePriceCard from '../Services/ServicePriceCard';

const BlockContent = require('@sanity/block-content-to-react');

interface ServiceSectionProps {
  priceModifier: number;
  message: string;
  slug: {
    current: string;
  };
  section: A
}

const PriceCardSection = ({
  section,
  priceModifier,
  message,
  slug,
}: ServiceSectionProps) => {

  // Setting up block content
  const sectionDescription = section._rawText ? (
    <BlockContent blocks={section._rawText} renderContainerOnSingleChild />
  ) : (
    ''
  );
  // This length is passed into the column count so we don't render one row
  // pushed the the left if we only have one card
  const sectionLength = section?.priceCards ? section?.priceCards.length : 0;

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
          {/* Mapping all of the price cards within the section */}
          {section.priceCards && section?.priceCards.map(
            (card, index: number) => (
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

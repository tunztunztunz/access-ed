import { styled, useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { H5, H6, Paragraph1, Paragraph3 } from 'baseui/typography';
import React from 'react';

const BlockQuote = styled('div', ({ $theme }) => ({
  fontStyle: 'italic',
  color: $theme.colors.primary,
  padding: '1rem',
  borderLeft: `8px solid ${$theme.colors.accent}`,
  lineHeight: '1.6',
  position: 'relative',
  background: $theme.colors.backgroundSecondary,
}));

interface QuoteProps {
  quote: string;
  quoteAuthor: string;
  quoteLink: string;
}
// The copy paste of different text sizes triggered by screen width is a hold over until I figure out a better solution

const Quote = ({ quote, quoteAuthor, quoteLink }: QuoteProps) => {
  const [css, theme] = useStyletron();
  return (
    <a href={quoteLink}>
      <BlockQuote>
        {/*  Small Screens */}
        <Block display={['block', 'block', 'none']}>
          <Paragraph3
            className={css({
              color: theme.colors.contentSecondary,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: '1em',
            })}
          >
            {quote}
          </Paragraph3>
          <Paragraph1>- {quoteAuthor}</Paragraph1>
        </Block>
        {/* Large Screens */}
        <Block display={['none', 'none', 'block']}>
          <H6
            className={css({
              color: theme.colors.contentSecondary,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: '1em',
            })}
          >
            {quote}
          </H6>
          <H5>- {quoteAuthor}</H5>
        </Block>
      </BlockQuote>
    </a>
  );
};

export default Quote;

export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fieldsets: [
    {
      name: 'quoteFields',
      title: 'Quote and citation',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    {
      name: 'quoteText',
      title: 'Quote',
      type: 'text',
      max: 140,
      description: 'Put the quote here.',
      fieldset: 'quoteFields',
    },
    {
      name: 'quoteCitation',
      title: 'Citation',
      type: 'string',
      max: 50,
      description: 'Cite the quote.',
      fieldset: 'quoteFields',
    },
    {
      name: 'quoteUrl',
      title: 'Quote URL',
      type: 'url',
      max: 200,
      description: 'The URL of the quote/',
      fieldset: 'quoteFields',
    },
  ],
};

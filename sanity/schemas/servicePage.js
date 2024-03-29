export default {
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fieldsets: [
    {
      name: 'highlights',
      title: 'Highlights',
      description:
        "This information will be used on the SERVICES page to show this service's information. Use this area to highlight the price and some features of the service",
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'promotion',
      title: 'Promotion',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'services',
      title: 'Services',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      description:
        'Create sections for your product page. This can include pricing cards, or just text.',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      description:
        'Optional section. If you want to have a disclaimer at the bottom of the page put it here.',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'price',
      title: 'Price',
      description: 'What is the starting price for this service?',
      type: 'string',
      fieldset: 'highlights',
    },
    {
      name: 'features',
      title: 'Features',
      description:
        'What are the most important features of this service that you want customers to know about',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'highlights',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: "priceModifier",
      title: "Price Modifier",
      description: "Price modifier for promotion. Just put what pertentage the promotion is",
      type: "number",
      fieldset: 'promotion'
    },
    {
      name: 'message',
      title: 'Promotion Message',
      description: 'Short message to be displayed in price cards',
      type: 'string',
      fieldset: 'promotion'
    },
    {
      name: 'promotion',
      title: 'Promotional Content',
      description: 'Optional content to promote a sale',
      type: 'promotion',
      fieldset: "promotion"
    },
    {
      name: 'section',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'servicePageSection',
        },
        {
          type: 'textAndImageSection'
        },
      ],
      fieldset: 'pageSections',
    },
    {
      name: 'disclaimerText',
      title: 'Disclaimer Text',
      type: 'blockContent',
      fieldset: 'disclaimer',
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      description:
        'This is the call to action at the bottom of the About page. Tie it in to the rest of the copy.  You get a header, body text, and an image',
      type: 'textAndImageSection',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'hero.heroText',
      media: 'hero.heroImage',
    },
  },
};

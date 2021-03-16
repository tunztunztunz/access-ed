export default {
  name: 'promotion',
  title: 'Promotion',
  type: 'object',
  fieldsets: [
    {
      name: 'promotion',
      title: 'Promotion Content',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    {
      name: 'image',
      title: 'Promotion Image',
      type: 'image',
      description: 'Optional: If you promotion has an image provide it here',
      options: {
        hotspot: true,
      },
      fieldset: 'promotion',
    },
    {
      name: 'promotionHeader',
      title: 'Promotion Header',
      type: 'string',
      description: 'Optional: The big text on the promotion. It will appear above the image',
      fieldset: 'promotion',
    },
    {
      name: 'promotionText',
      title: 'Promotion Text',
      type: 'text',
      description: 'Optional: This text explains the promotion you are running. It will appear below the image.',
      fieldset: 'promotion',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Choose which page you want to link to from this promotion',
      type: 'array',
      of: [{type: 'reference',
      to: [
        {type: 'aboutPage'},
        {type: 'partnershipsPage'},
        {type: 'testimonialsPage'},
        {type: 'servicesPage'},
        {type: 'servicePage'},
      ]
    }],
    fieldset: 'promotion',
    validation: Rule => Rule.max(1)
    }
  ],
};

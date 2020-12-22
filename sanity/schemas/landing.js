export default {
  name: 'landing',
  title: 'Landing Page',
  type: 'document',
  fieldsets: [
    {
      name: 'serviceCards',
      title: 'Cards for services provided',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'helpSection',
      title: 'How We Can Help',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'contactSection',
      title: 'Contact Section',
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
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    //Service Cards
    {
      name: 'serviceCardOne',
      title: 'Service Card One',
      type: 'serviceCard',
      fieldset: 'serviceCards',
    },
    {
      name: 'serviceCardTwo',
      title: 'Service Card Two',
      type: 'serviceCard',
      fieldset: 'serviceCards',
    },
    {
      name: 'serviceCardThree',
      title: 'Service Card Three',
      type: 'serviceCard',
      fieldset: 'serviceCards',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'quote',
    },
    {
      name: 'helpImage',
      title: 'Image for help section',
      type: 'image',
      fieldset: 'helpSection',
    },
    {
      name: 'helpText',
      title: 'Section Text',
      type: 'text',
      rows: 3,
      fieldset: 'helpSection',
    },
    {
      name: 'skills',
      title: 'Skills',
      description: 'List the skills Access Ed helps students develop.',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'helpSection',
    },
    {
      name: 'contactText',
      title: 'Call to action',
      description: 'This will be the final bit of text on the landing above a contact button',
      type: 'text',
      fieldset: 'contactSection',
    },
    {
      name: 'contactImage',
      title: 'Image for contact section',
      type: 'image',
      fieldset: 'contactSection',
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

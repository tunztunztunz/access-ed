export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fieldsets: [
    {
      name: 'serviceCards',
      title: 'Cards for services provided',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'quote',
      title: 'Quote',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },

    {
      name: 'helpSection',
      title: 'How We Can Help',
      options: { collapsible: true, collapsed: true, columns: 1 },
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      description:
        "This is the section at the bottom of the page that links to a contact form. They are on every page so you can tie the call to action in with the rest of the page's copy",
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
    {
      name: 'promotion',
      title: 'Promotional Content',
      type: 'promotion',
    },
    //Service Cards
    {
      name: 'serviceCards',
      title: 'Service Cards',
      description: 'List the services your business provides',
      type: 'array',
      of: [{ type: 'serviceCard' }],
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
      name: 'callToAction',
      title: 'Call To Action',
      description:
        'This is the call to action at the bottom of the About page. Tie it in to the rest of the copy.  You get a header, body text, and an image',
      type: 'textAndImageSection',
      fieldset: 'callToAction',
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

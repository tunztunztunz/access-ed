export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fieldsets: [
    {
      name: 'services',
      title: 'Services',
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
    {
      name: 'services',
      title: 'Services',
      description:
        "This section links to SERVICE PAGES you've created. Choose them from the dropdown. If you want your created services to show up on the SERVICES PAGE, then you need to link them here",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'servicePage' }],
        },
      ],
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

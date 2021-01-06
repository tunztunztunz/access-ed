export default {
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  fieldsets: [
    {
      name: 'testimonials',
      title: 'Testimonials Sections',
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
      name: 'sections',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'textAndImageSection' }],
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

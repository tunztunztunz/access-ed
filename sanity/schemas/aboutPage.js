export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fieldsets: [
    {
      name: 'aboutMe',
      title: 'About Me Section',
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
      title: 'About Sections',
      type: 'array',
      of: [{ type: 'textAndImageSection' }],
    },
    {
      name: 'aboutImage',
      title: 'Image',
      description: 'Image of who this section is about',
      type: 'image',
      fieldset: 'aboutMe',
    },
    {
      name: 'aboutImageCaption',
      title: 'Image Caption',
      description: 'The caption for the image',
      type: 'string',
      fieldset: 'aboutMe',
    },
    {
      name: 'aboutHeader',
      title: 'Header',
      description: "Largest font for the about section's introduction. Must be very short.",
      validation: Rule => Rule.max(30),
      type: 'string',
      fieldset: 'aboutMe',
    },
    {
      name: 'aboutText',
      title: 'Text',
      description: 'This is the main body of text.',
      type: 'blockContent',
      fieldset: 'aboutMe',
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      description: 'List the skills',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'aboutMe',
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

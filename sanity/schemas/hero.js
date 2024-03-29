export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero image and text',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'hero',
    },
    {
      name: 'heroHeader',
      title: 'Hero Header',
      type: 'string',
      description: 'The big text on the hero. This will be the first thing visitors will read.',
      validation: Rule => Rule.max(50),
      fieldset: 'hero',
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      validation: Rule => Rule.max(250),
      description: 'This will be text that goes over hero image. Make it catchy.',
      fieldset: 'hero',
    },
  ],
};

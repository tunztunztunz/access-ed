export default {
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Card Title',
      type: 'string',
      max: 30,
      description: 'Title of the service. Keep it brief.',
    },
    {
      name: 'description',
      title: 'Card Description',
      type: 'text',
      rows: 5,
      max: 140,
      description: 'Description of the service offered.',
    },
  ],
};

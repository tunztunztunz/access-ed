export default {
  name: 'iconWithText',
  title: 'Icon with text',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      valididation: Rule => [Rule.required],
    },
    {
      name: 'iconText',
      title: 'Text',
      type: 'string',
      validation: Rule => [
        Rule.required()
          .min(1)
          .max(60)
          .error('Required field with at least 1 and at most 60 characters.'),
        Rule.unique(),
      ],
    },
  ],
};

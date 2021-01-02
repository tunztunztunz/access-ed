//This difference between a section and a hero is the validation limits.
//Becuase a section is designed to contain more information and still look good on the frontend
//The hero should be brief. The validation is in place to prevent customers from breaking design

export default {
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      description: 'This is the header for the section.',
      type: 'string',
      validation: Rule => Rule.max(100),
    },
    {
      name: 'text',
      title: 'Text Block',
      description: 'This is the main text area of the section.',
      type: 'blockContent',
    },
  ],
};

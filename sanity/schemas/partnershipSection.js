//This difference between a section and a hero is the validation limits.
//Becuase a section is designed to contain more information and still look good on the frontend
//The hero should be brief. The validation is in place to prevent customers from breaking design

export default {
  name: 'partnershipSection',
  title: 'Partners',
  type: 'object',
  fields: [
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Link',
      description: "Link to your partner's website",
      type: 'url',
    },
    {
      name: 'sectionHeader',
      title: 'section Header',
      type: 'string',
      description: 'What is this section about?',
      validation: Rule => Rule.max(100),
    },
    {
      name: 'sectionText',
      title: 'Section Text',
      type: 'blockContent',
      validation: Rule => Rule.max(1000),
      description: 'Section text',
    },
  ],
};

export default {
  name: 'servicePriceCard',
  title: 'Service Price Card',
  type: 'object',
  fields: [
    {
      name: 'hours',
      title: 'Hours Per Month',
      description: 'How many hours a month is the service providing?',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Card Title',
      type: 'string',
      max: 30,
      description: 'Title of the service. Keep it brief.',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'How much is this service?',
    },
    {
      name: 'serviceDetails',
      title: 'Service Details',
      description: 'List of what is offered in this package. Limited to 5 items',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(8),
    },
  ],
};

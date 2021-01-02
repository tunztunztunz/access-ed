import { BsBook as book } from 'react-icons/bs';
export default {
  name: 'servicePageSection',
  title: 'Service Page Section',
  icon: book,
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Section Header',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Section Text',
      type: 'blockContent',
    },
    {
      name: 'priceCards',
      title: 'Price Cards',
      type: 'array',
      of: [{ type: 'servicePriceCard' }],
    },
  ],
};

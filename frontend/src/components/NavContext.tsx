import React from 'react';
import { ChevronDown, Delete } from 'baseui/icon';

export const navItems = [
  { label: 'Home', slug: '/', info: { id: 1 }, active: true },
  { label: 'About', info: { id: 2 }, slug: '/about' },
  {
    icon: ChevronDown,
    label: 'Services',
    slug: '/services',
    navExitIcon: Delete,
    children: [],
  },
  { label: 'Testimonials', slug: '/testimonials', info: { id: 3 } },
  { label: 'Partnerships', slug: '/partnerships', info: { id: 4 } },
  { label: 'Book Now!', slug: '/contact', info: { id: 5 } },
];

const NavContext = React.createContext({
  mainItems: navItems,
  setMainItems: (arg: any) => {
    return arg;
  },
});

export default NavContext;

// @ts-nocheck
import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { ChevronDown, Delete } from 'baseui/icon';
import { Link, navigate } from 'gatsby';
import { useStyletron, withStyle } from 'baseui';

interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  const [css, theme] = useStyletron();
  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    {
      label: 'About',
      info: { id: 1 },
    },
    {
      icon: ChevronDown,
      label: 'Services',
      navExitIcon: Delete,
      children: [
        { label: 'Tutoring' },
        { label: 'Enrichment Pods' },
        { label: 'Micro-School' },
        { label: 'Academic Coaching' },
        { label: 'Bootcamp' },
        { label: 'Summer Refresher' },
        { label: 'More...' },
      ],
    },
    { label: 'Testimonials', info: { id: 3 } },
    { label: 'Partnerships', info: { id: 4 } },
    { label: 'Book Now!', info: { id: 5 } },
  ]);
  function getUniqueIdentifier(item: NavItemT) {
    if (item.info) {
      return item.info.id;
    }
    console.log(item.label);
    return item.label;
  }
  function handleMainItemSelect(item: NavItemT) {
    navigate(`/${item.label.toLocaleLowerCase()}`);
    setMainItems(prev => setItemActive(prev, item, getUniqueIdentifier));
  }

  console.log(title);
  return (
    <AppNavBar
      title={title}
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      //@ts-ignore
      overrides={{
        Root: {
          style: () => ({ boxShadow: 'none' }),
        },
      }}
    />
  );
}

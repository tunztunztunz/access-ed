import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { navigate } from 'gatsby';
import { FaGraduationCap as Cap } from 'react-icons/fa';
import NavContext from './NavContext';

// This will be used outside of header to set the correct nav item as active
export function getUniqueIdentifier(item: NavItemT) {
  if (item?.info) {
    return item?.info?.id;
  }
  return item.label;
}

export default function Header({ title }: { title: string }) {
  // @ts-ignore
  const { mainItems, setMainItems } = React.useContext(NavContext);
  const siteName = (
    <>
      {title} <Cap />
    </>
  );

  function handleMainItemSelect(item: NavItemT) {
    setMainItems((prev: any) => setItemActive(prev, item, getUniqueIdentifier));
    // @ts-ignore
    navigate(item.slug);
  }
  return (
    <AppNavBar
      title={siteName}
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      // @ts-ignore
      overrides={{
        Root: {
          style: () => ({ boxShadow: 'none' }),
        },
      }}
    />
  );
}

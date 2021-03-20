import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { navigate } from 'gatsby';
import { FaGraduationCap as Cap } from 'react-icons/fa';
import NavContext from './NavContext';

interface ItemInterface extends NavItemT {
  slug: string;
}

// This will be used outside of header to set the correct nav item as active
export function getUniqueIdentifier(item: NavItemT) {
  if (item?.info) {
    return item?.info?.id;
  }
  return item.label;
}

export default function Header({ title, active }: { title: string; active: string }) {
  // @ts-ignore
  const { mainItems, setMainItems } = React.useContext(NavContext);
  React.useEffect(() => {
    let item = mainItems.find((i) => `${i.slug}/` === active);
    if (item !== undefined) {
      handleMainItemSelect(item);
    }
    if (item === undefined) {
      const services = mainItems.find((i) => i.slug === `/services`);
      item = services?.children?.find((i: { slug: string }) => `${i.slug}` === `${active}`);
      // @ts-ignore
      setMainItems((prev: any) => setItemActive(prev, item, getUniqueIdentifier));
    }
  }, []);
  const siteName = (
    <>
      {title} <Cap />
    </>
  );

  function handleMainItemSelect(item: ItemInterface) {
    setMainItems((prev: any) => setItemActive(prev, item, getUniqueIdentifier));
    navigate(item.slug);
  }
  return (
    <AppNavBar
      title={siteName}
      mainItems={mainItems}
      // @ts-ignore
      onMainItemSelect={handleMainItemSelect}
      overrides={{
        Root: {
          style: () => ({ boxShadow: 'none' }),
        },
      }}
    />
  );
}

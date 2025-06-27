'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
} from '@heroui/navbar';
import { Kbd } from '@heroui/kbd';
import { Input } from '@heroui/input';
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { Button } from '@heroui/button';
import Link from 'next/link';

import { SearchIcon } from '../assets/icons/icons';
import { siteConfig } from '../config/site';
import { headings } from '../constant';

export const Navbar = () => {
  const pageRoutes = siteConfig.pageRoutes;
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value) {
      setQuery(value);
      const suggestions = headings.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(suggestions);
    } else {
      setQuery(value);
      setFiltered([]);
    }
  };

  const handleSelect = (item) => {
    router.push(`${item.page}#${item.id}`);
  };

  const searchInput = (
    <div>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm',
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={['command']}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
        }
        type="search"
        value={query}
        onChange={handleChange}
      />

      {filtered.length > 0 && (
        <ul className="absolute right-6 mt-2 max-w-96 rounded border bg-white shadow dark:bg-black">
          {filtered.map((item, index) => (
            <li
              key={index}
              aria-hidden="true"
              className="cursor-pointer whitespace-normal p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              onClick={() => handleSelect(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const headerMenu = () => {
    return pageRoutes.map((item, index) => {
      if (item?.submenus?.length > 0) {
        return (
          <Dropdown key={index}>
            <DropdownTrigger>
              <Button
                className="border-0 focus:outline-none"
                variant="bordered"
              >
                {item.label}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              {item.submenus.map((subMenuItem, subMenuIndex) => {
                return (
                  <DropdownItem
                    key={subMenuIndex}
                    className={clsx(
                      linkStyles({ color: 'foreground' }),
                      'data-[active=true]:font-medium data-[active=true]:text-primary'
                    )}
                    href={subMenuItem.href}
                  >
                    {subMenuItem.label}
                    <ul className="ps-5 gap-2 flex flex-col">
                      {subMenuItem?.childSubMenu?.length > 0 &&
                        subMenuItem?.childSubMenu?.map((childSubMenuItem) => {
                          return (
                            <li
                              key={childSubMenuItem.label}
                              className="text-small "
                            >
                              <Link href={childSubMenuItem.href}>
                                {childSubMenuItem.label}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        );
      } else {
        return (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:font-medium data-[active=true]:text-primary'
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        );
      }
    });
  };

  return (
    <HeroUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="text-xl font-bold text-inherit text-lightThemeSecondryText dark:text-darkThemeSecondryText">
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                MTrax
              </span>{' '}
              Digital Media
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        {headerMenu()}
        <NavbarItem className="hidden gap-2 sm:flex">
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        {/* <ThemeSwitch /> */}
        {/* <NavbarMenuToggle>hello</NavbarMenuToggle> */}
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* {companyLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={'foreground'} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

'use client';
import '../styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontSans } from '../config/fonts';
import { Navbar } from '../components/navbar';
import GetInTouch from '../components/GetInTouch';
import { title } from '../components/primitives';
import { siteConfig } from '../config/site';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const pageRoutes = siteConfig.pageRoutes;
  const [companyLinks, setCompanyLinks] = useState([]);
  const [usefulLinks, setUsefulLinks] = useState([]);

  useEffect(() => {
    if (pageRoutes.length > 0) {
      setCompanyLinks(pageRoutes.filter((item) => item.type === 1));
      setUsefulLinks(pageRoutes.filter((item) => item.type === 2));
    }
  }, [pageRoutes]);
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          fontSans.variable
        )}
      >
        <Providers
        // themeProps={{ attribute: 'class', defaultTheme: 'white' }}
        >
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto flex-grow md:px-16 xl:px-28">
              {children}
            </main>
            <footer className="w-full px-0 py-3 sm:px-36">
              <div className="grid items-center justify-center gap-12 sm:grid-cols-3 sm:gap-0">
                <div className="text-center sm:text-start">
                  <GetInTouch />
                </div>
                <div className="text-center sm:text-start">
                  <h1 className={title({ size: 'sm' })}>Company</h1>
                  <ul className="ml-2 mt-7 flex flex-col justify-start gap-4">
                    {companyLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium'"
                          color="foreground"
                          href={item.href}
                        >
                          {item.label}
                        </NextLink>
                      ))}
                  </ul>
                </div>
                <div className="text-center md:text-start">
                  {' '}
                  <h1 className={title({ size: 'sm' })}>Useful links</h1>
                  <ul className="ml-2 mt-7 flex flex-col justify-start gap-4">
                    {usefulLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium'"
                          color="foreground"
                          href={item.href}
                        >
                          {item.label}
                        </NextLink>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center pb-6 pt-12">
                <div
                  className="flex items-center gap-1 text-current"
                  title="homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-xl font-semibold text-inherit text-lightThemeSecondryText dark:text-darkThemeSecondryText">
                    <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                      MTrax
                    </span>{' '}
                    Digital Media
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

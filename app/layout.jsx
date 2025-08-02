'use client';
import '../styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontSans, fontAsap } from '../config/fonts';
import { Navbar } from '../components/navbar';
import GetInTouch from '../components/GetInTouch';
import { title } from '../components/primitives';
import { siteConfig } from '../config/site';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { WhatsappIcon } from '../assets/brand-Icons';
import Link from 'next/link';

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
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${clsx(
          'min-h-screen text-foreground no-visible-scrollbar bg-background font-sans antialiased'
          // fontSans.variable
        )} ${fontAsap.className}`}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen 1">
            <Navbar />
            <main className="capitalize">{children}</main>
            <footer className="w-full px-0 sm:px-36 py-3">
              <div className="grid gap-12 sm:gap-0 sm:grid-cols-3 justify-center">
                <div className="text-center sm:text-start">
                  <GetInTouch />
                </div>
                <div className="text-center sm:text-start">
                  <h1 className={title({ size: 'sm' })}>Company</h1>
                  <ul className="flex mt-7 flex-col gap-4 justify-start ml-2">
                    {companyLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="
                          capitalize
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary  data-[active=true]:font-medium'
                  "
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
                  <ul className="flex flex-col gap-4 mt-7 justify-start ml-2">
                    {usefulLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="
                          capitalize 
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  "
                          color="foreground"
                          href={item.href}
                        >
                          {item.label}
                        </NextLink>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center pt-12 pb-6 items-center">
                <div
                  className="flex items-center gap-1 text-current"
                  title="homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="font-semibold text-xl text-inherit text-lightThemeSecondryText dark:text-darkThemeSecondryText ">
                    <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                      MTrax
                    </span>{' '}
                    Digital Media
                  </p>
                  |
                  <p className="">
                    Design & Developed by
                    <Link
                      className="font-semibold text-xl text-inherit"
                      href={'https://developervishalgupta.github.io/portfolio/'}
                      target="_blank"
                    >
                      Arka
                    </Link>
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

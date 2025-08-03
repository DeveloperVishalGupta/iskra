'use client';
import '../styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontAsap } from '../config/fonts';
import { Navbar } from '../components/navbar';
import Link from 'next/link';

export default function RootLayout({ children }) {
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
            <main className="capitalize bg-slate-100">{children}</main>
            <footer className="w-full px-0 sm:px-36 py-3">
              <div className="flex justify-center items-center">
                <div
                  className=" items-center justify-center flex flex-col gap-1 text-current"
                  title="homepage"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-default-600">Powered by</span>
                    <p className="font-semibold text-xl text-inherit text-primaryRed ">
                      <span className=" text-primaryBlue">
                        Integrated Sustainable Knowledge and Research Academy
                      </span>{' '}
                      (ISKRA)
                    </p>
                  </div>

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

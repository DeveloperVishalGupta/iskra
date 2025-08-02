import { Inter } from 'next/font/google';
import { Asap } from 'next/font/google';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontAsap = Asap({
  subsets: ['latin'],
  variable: '--font-asap',
  display: 'swap',
});

// If you want to use a monospace font, you can uncomment and define it here
// import { Fira_Code } from 'next/font/google';
// export const fontMono = Fira_Code({
//   subsets: ['latin'],
//   variable: '--font-mono',
// });

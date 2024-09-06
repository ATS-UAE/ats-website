import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import logo from '../public/ATS_icon.png';



export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <MantineProvider withCssVariables  theme={{primaryColor: 'lime'}}>
      <Head>
        <title>Advanced Telematic Solutions</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="icon" href={logo.src} />
      </Head>
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </MantineProvider>
  );
}


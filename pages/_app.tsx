import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import '../styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 text-white">
                  <Link href="/">
                    <a>Server</a>
                  </Link>
                  <Link href="/static">
                    <a>Static</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;

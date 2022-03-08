import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '@components/ui';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta
          name="description"
          content={`Information about pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`Page about pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main className="mainLayout-children">{children}</main>
    </>
  );
};

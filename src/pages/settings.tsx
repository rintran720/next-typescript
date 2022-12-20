import Head from 'next/head';
import React from 'react';
import Settings from '~/modules/setting/Settings';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='description' content='This is SEOful web app' />
      </Head>
      <Settings />
    </>
  );
}

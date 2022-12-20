import Head from 'next/head';
import React from 'react';
import Profile from '~/modules/profile/Profile';

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='description' content='This is SEOful web app' />
      </Head>
      <Profile />
    </>
  );
}

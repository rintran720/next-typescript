import Head from 'next/head';
import React from 'react';
import Notifications from '~/modules/notification/Notifications';

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='description' content='This is SEOful web app' />
      </Head>
      <Notifications />
    </>
  );
}

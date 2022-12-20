import HomeComponent from '../modules/home/Home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='description' content='This is SEOful web app' />
      </Head>
      <HomeComponent />;
    </>
  );
}

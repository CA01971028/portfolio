import Head from 'next/head';
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>
      <div className="h-screen w-full bg-base">
        <Header/>
      </div>
    </>
  );
}

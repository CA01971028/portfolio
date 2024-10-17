import Head from 'next/head';
import Header from './components/Header'
import Cards from './components/Cards'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>
      <div className='bg-base flex flex-col min-h-screen'>
        <Header/>
        <Cards />
      </div>
        
    </>
  );
}

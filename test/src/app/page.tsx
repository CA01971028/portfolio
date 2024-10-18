import Head from 'next/head';
import Header from './components/Header'
import Cards from './components/Cards'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>
        <Header/>
        <Cards />
        <Skills/>
    </>
  );
}

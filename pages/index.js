import Head from "next/head";
import Header from "../components/Header";
import SearchBanner from "../components/SearchBanner";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hup Soon Cheong</title>
        <meta name="description" content="Hup Soon Cheong Service Ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBanner />
      <main>
        <div className="flex flex-col md:grid grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Whatsapp Build 2.0</h1>
      <Sidebar />
    </div>
  );
}

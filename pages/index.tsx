import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";

const Home: NextPage = () => {
  console.log(Option);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full grid justify-center items-center">
        <h2>Hello World!</h2>
      </main>
    </div>
  );
};

export default Home;
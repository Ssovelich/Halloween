'use client';

import Head from "next/head";
import { baseMetadata } from "@/metadata/metadata";

export default function Candies() {
  return (
    <>
      <Head>
        <title>{baseMetadata.title} | Candies</title>
      </Head>
      <main className="container">
        {/* Контент сторінки */}
      </main>
    </>
  );
}

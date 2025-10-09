"use client";

import Head from "next/head";
import About from "@/components/About/About";
import Discount from "@/components/Discount/Discount";
import SplitCard from "@/components/SplitCard/SplitCard";
import { useTranslation } from "react-i18next";
import { baseMetadata } from "@/metadata/metadata";

const Home = () => {
  const { t } = useTranslation();

  const images = [
    "/images/home1.png",
    "/images/home2.png",
    "/images/home3.png",
  ];
  const cards = t("home.cards", { returnObjects: true });

  return (
    <>
      <Head>
        <title>{baseMetadata.title} | Home</title>
        <meta name="description" content={baseMetadata.description} />
        <meta name="keywords" content={baseMetadata.keywords.join(", ")} />
        <meta property="og:title" content={`${baseMetadata.title} | Home`} />
        <meta property="og:description" content={baseMetadata.description} />
        <meta property="og:url" content={baseMetadata.openGraph.url} />
        <meta
          property="og:site_name"
          content={baseMetadata.openGraph.siteName}
        />
        <meta property="og:type" content={baseMetadata.openGraph.type} />
        <meta
          property="og:image"
          content={baseMetadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:alt"
          content={baseMetadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content={baseMetadata.twitter.card} />
        <meta name="twitter:image" content={baseMetadata.twitter.images[0]} />
        <link rel="icon" href={baseMetadata.icons.icon} />
      </Head>
      <main className="container">
        {cards.map((c, i) => (
          <SplitCard
            key={i}
            image={images[i]}
            title={c.title}
            text={c.text}
            extraText={c.extraText}
            btn={c.btn}
            reverse={i === 1}
          />
        ))}
        <About />
        <Discount />
      </main>
    </>
  );
};

export default Home;

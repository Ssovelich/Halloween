"use client";

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

  const cards = t("home.cards", { returnObjects: true }) || [];

  return (
      <main className="container">
        {Array.isArray(cards) && cards.map((c, i) => (
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
  );
};

export default Home;

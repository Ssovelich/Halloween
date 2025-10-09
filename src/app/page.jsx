'use client';

import About from '@/components/About/About';
import SplitCard from '@/components/SplitCard/SplitCard';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const images = ['/images/home1.png', '/images/home2.png', '/images/home3.png'];
  const cards = t('home.cards', { returnObjects: true });

  return (
    <main className="container">
    {cards.map((c, i) => (
      <SplitCard
        key={i}
        image={images[i]}
        title={c.title}
        text={c.text}
        btn={c.btn}
        reverse={i === 1}
      />
    ))}
    <About />
  </main>
  );
}

export default Home;

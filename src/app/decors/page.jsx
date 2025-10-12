import ProductList from "@/components/ProductList/ProductList";

const decorations = [
  { id: 1, key: "decor1", price: 15, image: "/images/web.png", category: "decors" },
  { id: 2, key: "decor2", price: 20, image: "/images/candle.png", category: "decors" },
  { id: 3, key: "decor3", price: 12, image: "/images/bat.png", category: "decors" },
  { id: 4, key: "decor4", price: 25, image: "/images/lantern.png", category: "decors" },
  { id: 5, key: "decor5", price: 18, image: "/images/grave.png", category: "decors" },
  { id: 6, key: "decor6", price: 22, image: "/images/witch-hat.png", category: "decors" },
];

const DecorsPage = () => (
  <ProductList
    title="Spooky Decorations"
    translationKey="decors"
    items={decorations}
  />
);

export default DecorsPage;

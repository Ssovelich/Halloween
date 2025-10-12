import ProductList from "@/components/ProductList/ProductList";

const candies = [
  { id: 1, key: "candy1", price: 5, image: "/images/toffee.png", category: "candies"  },
  { id: 2, key: "candy2", price: 8, image: "/images/bone.png", category: "candies"  },
  { id: 3, key: "candy3", price: 6, image: "/images/scarecrow.png", category: "candies"  },
  { id: 4, key: "candy4", price: 3, image: "/images/candy-cane.png", category: "candies"  },
  { id: 5, key: "candy5", price: 7, image: "/images/pumpkin.png", category: "candies"  },
  { id: 6, key: "candy6", price: 4, image: "/images/ghost.png", category: "candies"  },
];

const CandiesPage = () => (
  <ProductList
    title="Sweet Treats"
    translationKey="candies"
    items={candies}
  />
);

export default CandiesPage;
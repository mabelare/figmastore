import ProductList from "../components/ProductList.jsx";

export default function Home({ addToCart }) {
  return (
    <main>
      <ProductList addToCart={addToCart} />
    </main>
  );
}

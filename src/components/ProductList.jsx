import { Link } from "react-router-dom";
import Data from "../Data.js";

export default function ProductList() {
  const fullWidthProducts = [12, 14, 15]; // Daydreamer, Everywhere tee, Plushie

  return (
    <section className="product-section p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Data.map((product) => (
          <div
            key={product.id}
            className={`rounded-2xl overflow-hidden shadow ${
              fullWidthProducts.includes(product.id)
                ? "col-span-2 md:col-span-3"
                : ""
            }`}
          >
            <Link
              to={`/product/${product.id}`}
              onClick={() =>
                sessionStorage.setItem("internalNav", Date.now().toString())
              }
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover block"
              />
            </Link>

            <div className="p-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold">NEW!</span>
                <p className="font-semibold">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>

              <p className="font-bold leading-tight mt-3">{product.name}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-bold text-center mt-32">
        LOOKING TO SHOP OUR PAST COLLECTIONS?
      </p>
    </section>
  );
}

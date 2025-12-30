import { Link } from "react-router-dom";
import Data from "../Data.js";

export default function ProductList() {
  return (
    <section className="product-section p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {Data.map((product) => (
          <div key={product.id} className="rounded-2xl overflow-hidden shadow">
            <Link
              to={`/product/${product.id}`}
              onClick={() =>
                sessionStorage.setItem("internalNav", Date.now().toString())
              }
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 md:h-72 lg:h-80 object-cover block"
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

import { Link } from "react-router-dom";
import Data from "../Data.js";

export default function RelatedProducts({ currentId, showHeading = true }) {
  const relatedProducts = Data.filter((product) => product.id !== currentId);

  return (
    <section className="mt-12 px-6">
      {showHeading && (
        <h2 className="text-lg font-bold mb-4">More from the store</h2>
      )}

      <div className="grid grid-cols-2 gap-4 overflow-x-auto scrollbar-hide">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="min-w-96"
          >
            <div className="bg-gray-100 rounded-2xl p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl mb-3"
              />

              <p className="font-semibold leading-tight">{product.name}</p>
              <p className="font-bold">₦{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

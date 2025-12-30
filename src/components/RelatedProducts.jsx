import { Link } from "react-router-dom";
import Data from "../Data.js";

export default function RelatedProducts({ currentId, showHeading = true }) {
  const relatedProducts = Data.filter((product) => product.id !== currentId);

  return (
    <section className="mt-12 px-6 md:px-12">
      {showHeading && (
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
          More from the store
        </h2>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block"
          >
            <div className="bg-gray-100 rounded-2xl p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl mb-3 w-full h-64 object-cover"
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

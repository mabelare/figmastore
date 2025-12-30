import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Data from "../Data.js";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = Data.find((p) => p.id === Number(id));
  const [size, setSize] = useState("S");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  if (!product) return <p className="p-6">Product not found</p>;

  const handleAdd = () => {
    const item = { ...product, size, qty };
    addToCart(item);
  };

  const handleClose = () => {
    // remove internal navigation flag so next load returns to default
    sessionStorage.removeItem("internalNav");
    navigate("/");
  };

  return (
    <section className="p-6 relative">
      <button
        onClick={handleClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
      >
        X
      </button>

      <div className="block md:hidden mb-6">
        <span className="inline-block bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          {product.badge || "LAYERS"}
        </span>
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-3">{product.description}</p>
        <hr className="border-t my-3" />
        <div className="flex items-center justify-between font-semibold uppercase">
          <div>Product details</div>
          <div className="text-2xl">▾</div>
        </div>
        <hr className="border-t my-3" />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-6">
          <div className="flex gap-6 overflow-x-auto touch-pan-x scrollbar-hide pb-4">
            {(product.images && product.images.length > 0
              ? product.images
              : [product.image]
            ).map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 sm:w-96 md:w-[520px] rounded-xl overflow-hidden border border-gray-200"
              >
                <img
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  className={`w-full h-80 md:h-[520px] ${
                    product.id === 1 && i === 2
                      ? "object-cover object-top transform scale-110"
                      : "object-cover"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4 hidden md:block">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-6 hidden md:block">
            {product.description}
          </p>

          <p className="text-2xl font-extrabold mb-6">
            ₦{product.price.toLocaleString()}
          </p>

          <div className="mb-6">
            <p className="font-semibold mb-2">Size guide</p>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-2 rounded-full border-2 font-bold ${
                    size === s ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-full border-2 font-bold"
            >
              -
            </button>
            <div className="font-semibold">{qty}</div>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 rounded-full border-2 font-bold"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-black text-white py-3 rounded-full"
          >
            Add ₦{(product.price * qty).toLocaleString()} {product.name}
          </button>
        </div>
      </div>

      {/* Related products removed on product detail page per request */}
    </section>
  );
}

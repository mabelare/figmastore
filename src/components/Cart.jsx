import { useState } from "react";

export default function Cart({ cart, onClose, removeFromCart }) {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item, index) => ({ ...acc, [index]: 1 }), {})
  );
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const updateQuantity = (index, change) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + change),
    }));
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item, index) => {
      return sum + item.price * (quantities[index] || 1);
    }, 0);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
      <button onClick={onClose} className="underline mb-6">
        Back
      </button>

      <h2 className="font-bold text-xl mb-6">
        {cart.length} {cart.length === 1 ? "item" : "items"} in Cart
      </h2>

      <hr className="border-black mb-6" />

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold mb-6">EMPTY CART, AAACKKK</h1>

          <button
            onClick={onClose}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            SEE ALL PRODUCTS
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-lg mb-4">Item</h3>
          <hr className="border-black mb-6" />

          <div className="space-y-6 mb-8">
            {cart.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-3xl leading-none hover:opacity-70"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold leading-none pb-0.5"
                      >
                        +
                      </button>
                      <span className="text-xl font-semibold">
                        {quantities[index] || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold leading-none pb-0.5"
                      >
                        −
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-xl">
                        ₦
                        {(
                          item.price * (quantities[index] || 1)
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-black mb-6" />

          <div className="mb-8">
            <div className="flex justify-end items-center mb-8">
              <div className="text-right">
                <p className="text-lg mb-2">Subtotal</p>
                <p className="text-2xl font-bold">
                  ₦{calculateSubtotal().toLocaleString()}
                </p>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full text-xl font-bold mb-4">
              CHECKOUT
            </button>

            <p className="text-right text-sm mb-6">
              *Taxes and shipping collected at checkout
            </p>

            <div className="space-y-4 text-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  By ticking this box, you confirm your agreement to our{" "}
                  <a
                    href="https://store.figma.com/pages/terms-of-service"
                    className="underline"
                  >
                    Figma Store Terms of Sale
                  </a>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  By ticking this box, you agree to our{" "}
                  <a
                    href="https://store.figma.com/pages/privacypolicy"
                    className="underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              <p className="text-right">
                By clicking on the "Checkout" button you agree that you have
                read and accept our{" "}
                <a
                  href="https://store.figma.com/pages/terms-of-service"
                  className="underline"
                >
                  Terms of Sale.
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

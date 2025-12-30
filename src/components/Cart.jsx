export default function Cart({ cart, onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="underline mb-6">
        Back
      </button>

      <p className="font-semibold">{cart.length} items in Cart</p>

      <hr className="my-6" />

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
        <div className="space-y-4">
          {cart.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

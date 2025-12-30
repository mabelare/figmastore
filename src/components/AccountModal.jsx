export default function AccountModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="text-2xl">
        ✕
      </button>

      <h1 className="text-3xl font-bold mt-10">WELCOME BACK</h1>

      <div className="mt-10">
        <label className="text-sm font-semibold">Your email</label>
        <input
          placeholder="Enter your email address"
          className="w-full border-b py-3 outline-none"
        />
      </div>

      <div className="mt-8">
        <label className="text-sm font-semibold">Your password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border-b py-3 outline-none"
        />
      </div>

      <p className="text-sm underline mt-4 text-right">Forgot password?</p>

      <button className="w-full bg-black text-white py-4 rounded-full mt-10">
        SIGN IN
      </button>

      <div className="text-center mt-10">
        <p className="text-sm mb-4">New to The Figma Store?</p>
        <button className="border px-6 py-3 rounded-full font-semibold">
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="text-2xl mb-12">
        ✕
      </button>

      <div className="space-y-6 text-3xl font-bold">
        <p>Shop all</p>
        <p>About</p>
      </div>

      <div className="mt-16 space-y-4 text-sm">
        <p>FAQ</p>
        <p>Contact us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Account</p>
      </div>
    </div>
  );
}

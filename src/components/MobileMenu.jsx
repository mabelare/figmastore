import { Link } from "react-router-dom";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="text-2xl mb-12">
        ✕
      </button>

      <div className="space-y-6 text-3xl font-bold">
        <p>Shop all</p>
        <Link
          to="/about"
          onClick={onClose}
          className="block hover:underline"
        >
          About
        </Link>
      </div>

      <div className="mt-16 space-y-4 text-sm">
        <Link
          to="/faq"
          onClick={onClose}
          className="block hover:underline"
        >
          FAQ
        </Link>
        <Link
          to="/about#contact"
          onClick={onClose}
          className="block hover:underline"
        >
          Contact us
        </Link>
        <Link
          to="/privacy-policy"
          onClick={onClose}
          className="block hover:underline"
        >
          Privacy policy
        </Link>
        <Link
          to="/terms-of-service"
          onClick={onClose}
          className="block hover:underline"
        >
          Terms of service
        </Link>
      </div>
    </div>
  );
}

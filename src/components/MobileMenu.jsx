export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="text-2xl mb-12">
        ✕
      </button>

      <div className="space-y-6 text-3xl font-bold">
        <p>Shop all</p>
        <a
          href="https://store.figma.com/pages/about"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          About
        </a>
      </div>

      <div className="mt-16 space-y-4 text-sm">
        <a
          href="https://store.figma.com/pages/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          FAQ
        </a>
        <a
          href="https://store.figma.com/pages/about#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          Contact us
        </a>
        <a
          href="https://store.figma.com/pages/privacypolicy"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          Privacy Policy
        </a>
        <a
          href="https://store.figma.com/pages/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          Terms of Service
        </a>
        <p>Account</p>
      </div>
    </div>
  );
}

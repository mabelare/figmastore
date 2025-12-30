export default function Navbar({
  cartCount,
  onMenuClick,
  onAccountClick,
  onCartClick,
  bgColor = "white",
}) {
  return (
    <nav
      className="sticky top-0 z-40 transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onMenuClick}
            className="text-base px-2 py-0.5 rounded-full border-2 border-black"
          >
            ☰
          </button>
          <button className="w-5 h-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="10" cy="10" r="6" />
              <line x1="14.5" y1="14.5" x2="20" y2="20" />
            </svg>
          </button>
        </div>

        <h1 className="font-bold text-sm tracking-wide">THE FIGMA STORE</h1>

        <div className="flex items-center gap-3">
          <button onClick={onAccountClick} className="w-5 h-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
            </svg>
          </button>

          <button
            onClick={onCartClick}
            className="px-3 py-0.5 rounded-full border-2 border-black font-bold"
          >
            {cartCount}
          </button>
        </div>
      </div>
    </nav>
  );
}

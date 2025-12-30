export default function Footer() {
  return (
    <footer className="footer-animate text-black">
      <div className="px-6 pt-12 pb-4\">
        <div className="max-w-6xl mx-auto">
          <div
            className="cross-animate py-16 px-8 mb-6 relative"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 75% 25%, 90% 25%, 90% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 10% 75%, 10% 25%, 25% 25%)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold mb-2">THE</h2>
              <div className="flex items-center gap-8">
                <h2 className="text-3xl font-bold">FIGMA</h2>
                <div className="-rotate-90 whitespace-nowrap">
                  <h2 className="text-3xl font-bold">STORE</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
            OBJECTS
            <br />
            THAT INSPIRE.
          </div>

          <div className="flex gap-12 relative">
            <div className="space-y-4 text-base flex-1">
              <a
                href="https://store.figma.com/pages/faq"
                className="block font-semibold hover:underline"
              >
                FAQ
              </a>
              <a
                href="https://store.figma.com/pages/about#contact"
                className="block font-semibold hover:underline"
              >
                Contact us
              </a>
              <a
                href="https://store.figma.com/pages/privacypolicy"
                className="block font-semibold hover:underline"
              >
                Privacy policy
              </a>
              <a
                href="https://store.figma.com/pages/terms-of-service"
                className="block font-semibold hover:underline"
              >
                Terms of service
              </a>
              <a
                href="https://www.figma.com/"
                className="block font-semibold hover:underline flex items-center gap-2"
              >
                FIGMA
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 13L13 3M8 3l5 0M13 3l0 5"></path>
                </svg>
              </a>

              <div className="space-y-4">
                <a
                  href="https://twitter.com/figma"
                  className="block font-semibold hover:underline"
                >
                  TWITTER
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/figma"
                    className="block font-semibold hover:underline"
                  >
                    INSTAGRAM
                  </a>
                </div>
                <a
                  href="https://www.youtube.com/c/Figmadesign"
                  className="block font-semibold hover:underline"
                >
                  YOUTUBE
                </a>
              </div>
            </div>

            <div className="absolute right-0 top-48 h-full flex items-start">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-black rounded-full p-2 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5V19M5 12l7-7 7 7"></path>
                </svg>
              </button>
            </div>

            <div className="text-base leading-none flex-1">
              <p>
                This site is powered by{" "}
                <span className="font-bold">Harper + Scott</span>, a{" "}
                <span className="font-bold">Certified B-Corporation</span>. For
                more information read Harper + Scott's{" "}
                <span className="font-bold">CSR policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="scroll-text whitespace-nowrap flex items-center gap-2">
          <span className="text-black font-bold text-2xl">FIGMA'S</span>
          <span className="text-black font-bold text-2xl">MARVELOUSLY</span>
          <span className="inline-block w-4 h-4 bg-white rotate-45"></span>
          <span className="text-black font-bold text-2xl">CONSIDERED</span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="text-black font-bold text-2xl">COLLECTION</span>
          <span className="inline-block w-4 h-4 bg-white"></span>
          <span className="text-black font-bold text-2xl">OF</span>
          <span className="text-black font-bold text-2xl">OBJECTS</span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="text-black font-bold text-2xl">FOR</span>
          <span className="inline-block w-4 h-4 bg-white rotate-45"></span>
          <span className="text-black font-bold text-2xl">OUR</span>
          <span className="inline-block w-4 h-4 bg-white"></span>
          <span className="text-black font-bold text-2xl">TIME</span>
          <span className="text-black font-bold text-2xl">ON</span>
          <span className="text-black font-bold text-2xl">FIGMA'S</span>
          <span className="text-black font-bold text-2xl">MARVELOUSLY</span>
          <span className="inline-block w-4 h-4 bg-white rotate-45"></span>
          <span className="text-black font-bold text-2xl">CONSIDERED</span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="text-black font-bold text-2xl">COLLECTION</span>
          <span className="inline-block w-4 h-4 bg-white"></span>
          <span className="text-black font-bold text-2xl">OF</span>
          <span className="text-black font-bold text-2xl">OBJECTS</span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="text-black font-bold text-2xl">FOR</span>
          <span className="inline-block w-4 h-4 bg-white rotate-45"></span>
          <span className="text-black font-bold text-2xl">OUR</span>
          <span className="inline-block w-4 h-4 bg-white"></span>
          <span className="text-black font-bold text-2xl">TIME</span>
          <span className="text-black font-bold text-2xl">ON</span>
        </div>
      </div>
    </footer>
  );
}
